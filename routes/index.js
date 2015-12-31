var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.render("index");
});

router.get("/index", function(req, res){
	res.render("index");
});

router.get("/sentence", function(req, res){
	res.render("sentence");
});

router.get("/talk", function(req, res){
	res.render("talk");
});

router.get("/test", function(req, res){
	res.render("test");
})

router.get("/socket.io", function(req, res){
	res.render("socket.io");
});


module.exports = router;