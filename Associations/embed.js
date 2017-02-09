var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//USER - email, name
//to embed postSchema into user (an array of posts)
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});


var User = mongoose.model("User", userSchema);

//POST - title, content

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);

var newUser = new User({
	email: "charlie@brown.edu",
	name: "Charlie Brown"
});

//push the posts to posts array
newUser.posts.push({
	title: "some title",
	content: "Just Kidding"
});

newUser.save(function(err, user){
	if(err){
		console.log.log(err);
	} else {
		console.log(user);
	}
})

// var newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: "They are delicious"
// });

// newPost.save(function(err, user){
// 	if(err){
// 		console.log.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

//one to many post
User.findOne({name: "Charlie Brown"}, function(err, user){
	if(err){
		console.log(err);
	} else {
		//push to the founded user posts
		user.posts.push({
			title: "3 things i really hate",
			content: "voldemort, voldemort, voldemort"
		});
	}
	//user referes to the founded user
	user.save(function(err, user){
		if(err){
			console.log(err);
		} else {
			console.log(user);
		}
	});

});


