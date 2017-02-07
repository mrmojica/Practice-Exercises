
var express = require('express');
var app = express();




app.get("/", function(req, res) {
	res.send("Hi there!");

});

app.get("/bye", function(req, res) {
	res.send("Good Bye!!!");

});

//params patterns
app.get("/r/:subredditName", function(req, res) {
	//what information is coming through the params
	console.log(req.params);
	var subreddit = req.params.subredditName;

	res.send("welcome to the " + subreddit + " subreddit!");

});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
	res.send("welcome to comments page!");

});

//order of * matters if placed at bottom it will do a catch all (if first, no other routes will run below it)
app.get("*", function(req, res) {
	res.send("you are a star!!");

});

app.listen(8080 || process.envs.PORT, function(){
	console.log("server 8080 is running");
})