var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});


//takes passportLocal mongoose package and add methods to the user schema
//passport.serialize() + passport.deserialize()
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);