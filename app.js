

/* 클러스터 부분 주석처리
var cluster = require("cluster");
var numOfCore = require("os").cpus().length;
if(cluster.isMaster){
	for(var i=0; i<numOfCore; i++){
		cluster.fork();
	}
} else{
*/
	var http = require("http");
	var express = require("express");
	var path = require("path");
	var bodyParser = require("body-parser");
	var wss = require("./lib/wss");
	var redis = require("socket.io-redis");
	var routes = require("./routes");


	var app = express();

	app.set("views", path.join(__dirname, "views"));
	app.set("view engine", "ejs");

	app.use(bodyParser());
	app.use("/", routes);
	app.use(express.static(path.join(__dirname, "public")));


	var server = http.createServer(app);

	var port = process.env.PORT || 5000;
	server.listen(port, function () {
		console.log("Server Start...listening on %d", port);
	});


	var io = require("socket.io").listen(server);
	io.set("transports", ["websocket", "polling","xhr-polling"]); 

	io.on("connection", function (socket) {
		wss.connect(socket, io);
	});
//}