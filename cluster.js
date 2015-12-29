var cluster = require("cluster");
var http = require("http");
var numOfCore = require("os").cpus().length;

if(cluster.isMaster){
	for(var i=0; i<numOfCore; i++){
		cluster.fork();
	}
} else{
	http.createServer(function(req, res){
		setTimeout(function(){
			res.writeHeader(200, {
				"Content-Type" : "text/html; charset=utf8"
			});
			res.write("PID: " + process.pid + " => ");
			res.end();

		},5000);
	}).listen(5000, "localhost", function(){
		console.log("Server start... http://localhost:5000");
	});
}