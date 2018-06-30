const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const keys = require("./config/keys");
const cookieSession = require('cookie-session');
const passport = require("passport");
const PORT = process.env.PORT || 3001;
require("./models/users");
require("./service/passport");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));
// }
// Add routes, both API and view
// app.use(routes);
app.use(cookieSession({
	name: 'session',
	keys: [keys.cookieKey],
	maxAge: 24 * 60 * 60 * 1000
}));
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// // Connection URL
// var url = 'mongodb://localhost:27017/simDB';
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   insertDocuments(db, function() {
//     db.close();
//   });
// });
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/simDB");

require('./routes/auth')(app);
// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
