var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http');
//var monngo = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
// var fs = require('fs');
//var nodemailer = require('nodemailer');
var routes=require("./route");
var cors=require("cors");
var mongoDbConfig = require("./config/mongoConfig");
var mongoose = require("mongoose");


app.use(cors());


app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Tableau-Auth");
	next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: false
}));

app.set('port', 4542);
var server = http.createServer(app);
server.listen(4542, () => {
	console.log("server started running");
});
var mongoDbConfig = require("./config/mongoConfig");
var mongoose = require("mongoose");

mongoose.connect(mongoDbConfig.url, {
  useNewUrlParser: true
});

mongoose.connection.on("error", function() {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

mongoose.connection.once("open", function() {
  console.log("Successfully connected to the database");
});
routes.oneallRoutes(app);

//module.exports=app;

