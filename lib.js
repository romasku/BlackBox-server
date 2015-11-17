function randomInt (high) {
    return Math.floor(Math.random() * (high + 1));
}
function returnMessage(response,message){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(message.toString());
        response.end();
}
function returnHtml(response, body){
	response.writeHead(200, {"Content-Type" : "text/html"});
        body = 	'<html>'+
               	'<head>'+
               	'<meta http-equiv="Content-Type" content="text/html; '+
               	'charset=UTF-8" />'+
                '<link rel="stylesheet" type="text/css" href="style.css">'+
               	'</head>' +
          	'<body>'  +
			body +
		'</body>' +
	     	'</html>';
	response.write(body);
	response.end();
}

//Constants
exports.defaultUsername="Username";
exports.defaultScore=0;
exports.defaultGoogleId="null";
exports.databaseUrl="mysql://b7fe3bd1d05e99:918fec7b@br-cdbr-azure-south-a.cloudapp.net:3306/blackbox";
exports.leadersCount=50;

exports.randomInt = randomInt;
exports.returnHtml = returnHtml;
exports.returnMessage = returnMessage;
