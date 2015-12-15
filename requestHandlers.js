var querystring = require("querystring"),
    url         = require("url"),
    database    = require("./databaseWorker"),
    lib         = require("./lib"),
    fs          = require('fs');

function getUsername(response, request){
        fields=url.parse(request.url, true).query;
        if (fields["id"])
                database.getUserById(parseInt(fields["id"]), function(user){
                        if (user) lib.returnMessage(response, user["username"]);
                        else lib.returnMessage(response, "User not found", true);
                });
        else lib.returnMessage(response, "Wrong GET", true);
}

function uploadReplay(response, request)
{
        var replay=url.parse(request.url,true).query;
        if (replay["players_id"] && replay["time_won"] && replay["log"] && replay["game_id"])
                database.uploadReplay( parseInt(replay["players_id"]),
                        replay["is_multiplay"], replay["log"], parseInt(replay["game_id"]),
                        function(id){
                                if (id) lib.returnMessage(response,id);
                                else lib.returnMessage(response, "BD Error");
                });
        else lib.returnMessage(response, "Wrong GET");
}    

function register(response,request){
        fields=url.parse(request.url, true).query;
        var googleId = lib.defaultGoogleId,
            username = lib.defaultUsername,
            score    = lib.defaultScore;
        if (fields["google_id"]) googleId=fields["google_id"];
        if (fields["username"]) username=fields["username"];
        if (fields["score"]) score=fields["score"];
        database.createUser(googleId, username, score, function(id){
                lib.returnMessage(response, id);
        });
}

function findReplay(response, request){
        var replayStr;
        database.randomReplay(function(replay){
                if (replay){
			            console.log(replay.dataValues);
                        replayStr = JSON.stringify(replay.dataValues);
                        lib.returnMessage(response, replayStr);
                } else {
                        lib.returnMessage(response, "DB error or no replays", true);
                }
        });
}

function leaderboard(response, request){
        database.getTopUsers(lib.leadersCount,function(table){
                if (!table) lib.returnMessage(response, "Users not found", true);
                else {
                        var body = '<div id="content">'
                        + '<h1>Leaderboard</h1>'     
                        + '<table>';
                        for( var i = 0; i < table.length; i++){
                                row = table[i];
                                body +=
                                "<tr>" +
                                "<td>" + row["username"] + "</td>" +
                                "<td>" + row["score"] + "</td>" +
                                "</tr>";
                        }
                        body += '</table>'
                        + '</div>' ;
                        lib.returnHtml(response, body);
                }
        });
}
function leaderboardgame(response, request){
        database.getTopUsers(lib.leadersCount,function(table){
                if (!table) lib.returnMessage(response, "Users not found", true);
                else {
                       var ans=[];
                       for (var i = 0; i < table.length; i++){
                            ans[i] = {};
                            ans[i]["username"] = table[i]["username"];
                            ans[i]["score"] = table[i]["score"];
                       }
                       ans = JSON.stringify(ans);
                       lib.returnMessage(response,ans);
                }
        });
}

function setName(response,request)
{
        fields=url.parse(request.url, true).query;
        if (fields["id"]&&fields["username"])
                database.updateName(parseInt(fields["id"]),fields["username"],function(res){
                lib.returnMessage(response,res);
        });
        else lib.returnMessage(response, "Wrong GET");
}
function setScore(response,request)
{
        fields=url.parse(request.url, true).query;
        if (fields["id"]&&fields["score"])
                database.updateScore(parseInt(fields["id"]),parseInt(fields["score"]),function(res){
                lib.returnMessage(response,res);
        });
        else lib.returnMessage(response, "Wrong GET");
}

function getStyle(response){
    response.writeHead(200, {"Content-Type" : "text/css"});
    fs.readFile((__dirname+"/style.css"), 'utf8', function(err, data){
        if (err){
            console.log(err);
            response.end();
        } else {
            response.write(data);
            response.end();
        }
    });
}

exports.setScore = setScore;
exports.getUsername = getUsername;
exports.uploadReplay = uploadReplay;
exports.register = register;
exports.findReplay = findReplay;
exports.leaderboard = leaderboard;
exports.setName = setName;
exports.getStyle = getStyle;
exports.leaderboardgame = leaderboardgame;