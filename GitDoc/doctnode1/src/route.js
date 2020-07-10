//var mainRoutes = require("./main");

var doctorloginroutes=require("./doctorlogin/doctorloginroute");
var appDetailsroute=require("./appointment/appointmentroute");
var Signupandloginroutedetails=require("./signupandlogin/signupandloginroute");
var Bookingroutedetails=require("./booking/bookingroute");

exports.oneallRoutes=function(app){

doctorloginroutes(app);
appDetailsroute(app);
Signupandloginroutedetails(app);
Bookingroutedetails(app)

};





