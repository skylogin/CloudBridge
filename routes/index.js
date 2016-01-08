var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.render("index");
});

router.get("/index", function(req, res){
	res.render("index");
});

router.get("/word", function(req, res){
	res.render("word");
});

router.get("/sentence", function(req, res){
	res.render("sentence");
});

router.get("/popup", function(req, res){
	res.render("popup");
});


module.exports = router;