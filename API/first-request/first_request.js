// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

var request = require('request');
request('http://www.apiURL.com', function(error, response, body){
	if(!error && esponse.statusCode == 200 ) {
		//if data is returning a string and not a object use JSON.parse()
		var parsedData = JSON.parse(body);
		console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
	} 

});