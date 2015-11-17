var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/register"] = requestHandlers.register;
handle["/set_name"] = requestHandlers.setName;
handle["/set_score"] = requestHandlers.setScore;
handle["/leaderboard"] = requestHandlers.leaderboard;
handle["/leaderboardgame"] = requestHandlers.leaderboardgame;
handle["/upload_replay"] = requestHandlers.uploadReplay;
handle["/get_username"] = requestHandlers.getUsername;
handle["/find_replay"] = requestHandlers.findReplay;
handle["/"] = requestHandlers.leaderboard;
handle["/style.css"] = requestHandlers.getStyle;

server.start(router.route, handle);
