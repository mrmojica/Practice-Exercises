var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);



//adding a new cat to the DB

// var george = new Cat({
// 	name: "George",
// 	age: 11,
// 	temperament: "grouchy"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("something went wrong!");
// 	} else {
// 		console.log("We just saved cat to the DB:")
// 		//cat is what is being returned from the database
// 		console.log(cat);
// 	}
// })

//OR shorter step

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Bland"
}, function(err, cat){
	if(err){
		console.log(err);
	} else {
		console.log(cat);
	}
});

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
	if(err){
		console.log("ERROR!!!");
		console.log(err);
	} else {
		console("you found the cats");
		console.log(cats);
	}
})