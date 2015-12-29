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

router.post("/chat", function(req, res){
	var nick = req.body.uNickname;
	res.render("chat", {
		uNick : nick
	});
});



module.exports = router;