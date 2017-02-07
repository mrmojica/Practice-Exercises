//express exercise

const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get('/speak/:animal', function(req,res){
	var animal = req.params.animal;

	if(animal == 'pig') {
		res.send("The pig says 'Oink'");
	}
	else if(animal == 'cow') {
		res.send("The cow says 'Moo'");
	}
	else if(animal == 'dog') {
		res.send("The dog says 'Woof Woff!'");
	}

	//alternative solution
	// var sounds = {
	// 	pig: 'Oink',
	// 	cow: 'Moo',
	// 	dog: 'Woof Woof!'
	// }
	// var sound = sounds[animal];

	// res.send("The dog says " + sound)

});

app.get('/repeat/:word/:repeat', function(req,res){
	var word = req.params.word;
	var repeat = req.params.repeat;
	var repeatWord = '';

	for(var i = 0; i < repeat; i++) {
		repeatWord += word + ' ';
	}
	console.log(repeatWord);
	res.send(repeatWord);

});
app.get('*', function(req,res){
	res.send('Sorry, page not found... What are you doing with your life?')

});

app.listen(8080 || process.envs.PORT, function(){
	console.log("server 8080 is running");
})