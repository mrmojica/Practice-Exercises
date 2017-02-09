var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//USER - email, name
//to embed postSchema into user (an array of posts)
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	//referencing object Id's belonging to post
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post"
	}]
});


var User = mongoose.model("User", userSchema);

//POST - title, content

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});


// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// });

//creating posts id's for user
// Post.create({
// 	title: "How to cook the best burger",
// 	content: "Bun Meat"
// }, function(err, post){
// 	User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//should just see the ID in post
// 					console.log(data);
// 				}
// 			});
// 		}
// 	})
// })

//finding a user and chaining with populate to find the correct ids and run exec to execute the code
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	} else {
		//will return the user data and the details of posts (all posts data)
		console.log(user);
	}

});