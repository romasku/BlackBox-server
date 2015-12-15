var Sequelize = require('sequelize');
var lib = require('./lib');
var sequelize = new Sequelize("blackbox", "b7fe3bd1d05e99", "918fec7b", {
        host: "br-cdbr-azure-south-a.cloudapp.net",
        dialect: "mysql",
        dialectOptions: {
                  timeout: 30
            },
        pool: {
                max: 5,
                min: 0,
                idle: 10
            }
});

User = sequelize.define('user', {
    id : { type: Sequelize.INTEGER, primaryKey: true},
	google_id : Sequelize.STRING,
	username : Sequelize.STRING,
	score : Sequelize.INTEGER
});

Replay = sequelize.define('replay', {
    id : { type: Sequelize.INTEGER, primaryKey: true},
	players_id : Sequelize.INTEGER,
	is_multiplay : Sequelize.TEXT,
	game_id : Sequelize.STRING(80),
	log : Sequelize.TEXT
});

function getTopUsers(num, callback){
	User.findAll({
		limit: num,
		order: [ ['score', 'DESC'] ]
	}).then(function(users){
		callback(users);
	});
}

function getUserById(id, callback){
	User.findOne({ where: {id: id} }).then(function(user){callback(user)});
}

function createUser(googleId, username, score, callback){
	var newId=-1;
	User.findOne({ where: {google_id: googleId} }).then(function(user){
		if (user&&googleId!="null") callback(user["id"]);
		else {
			User.count().then(function(id) {
				id++;
				newId=id;
				User.create({ 
					id: id,
					google_id: googleId,
					username: username,
					score: score
			}).then(function(){ callback(newId) });
			});
		}
	});
}

function updateName(id, username, callback){
	User.find({ where: {id: id} }).then(function(user) {
 		if (user) {
    			user.updateAttributes({
    	 			username : username
   	 		}).then(function() {callback("ok")});
 		}
		else callback("id not found");
	})
}
function updateScore(id, score, callback){
	User.find({ where: {id: id} }).then(function(user) {
 		if (user) {
    			user.updateAttributes({
    	 			score : score
   	 		}).then(function() {callback("ok")});
 		}
		else callback("id not found");
	})
}

function uploadReplay(playersId, type, log, gameId, callback){
	var newId=-1;
	Replay.count().then(function(id) {
        id++;
        newId=id;
        Replay.create({
            id: id,
            players_id: playersId,
            is_multiplay: type,
            log: log,
            game_id: gameId
        }).then(function(){ callback(newId) });
    });	
}

function randomReplay(callback){
	Replay.count().then(function(count) {
		var num = 1 + lib.randomInt(count-1);
		Replay.findOne({where:{ id: num}}).then(function(replay){
			callback(replay);
		});	
	});
}


exports.init = function() {
	sequelize.sync();
}
exports.getTopUsers = getTopUsers;
exports.createUser = createUser;
exports.uploadReplay = uploadReplay;
exports.randomReplay = randomReplay;
exports.getUserById = getUserById;
exports.updateName = updateName;
exports.updateScore = updateScore;
	
