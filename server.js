var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/weather/dist'));

mongoose.connect("mongodb://localhost/weather_api");

var UserSchema = new mongoose.Schema({
    name: { type: Number, required: [true, "Name is required"]}
});
mongoose.model('User', UserSchema); 
var User = mongoose.model('User');

mongoose.Promise = global.Promise;

// catch-all route
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./weather/dist/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})