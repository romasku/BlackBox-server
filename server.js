var http = require("http");
var url = require("url");
var database = require("./databaseWorker");

function start(route, handle)
{
	database.init();
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}
	http.createServer(onRequest).listen(process.env.PORT || 8884);
	console.log("Started");
}

exports.start = start;
