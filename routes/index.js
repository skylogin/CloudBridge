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

route.get("/test", function(req, res){
	res.render("test");
})


module.exports = router;