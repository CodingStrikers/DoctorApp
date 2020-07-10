var DoctorloginDetails=require("../models/doctor");
var CustomerloginDetails=require("../models/culogdetails");

exports.LoginPatient=function(req,res){
        console.log("Into login for patient or customer ");
        console.log(req.body);

patientlogin=new CustomerloginDetails();
patientlogin.cEmail=req.body.email;
patientlogin.cPassword=req.body.password;

console.log("patientdetails",patientlogin);

CustomerloginDetails.find(patientlogin)
     .exec(function(err, resp) {
       if (err) {
           res.send("0");
           console.log(err);
       } else {
        res.send("1");
        console.log("patient details found");
        console.log(resp); 
       }
     });
       
}

exports.LoginDoctor=function(req,res){
        console.log("Into login for doctor");
        console.log(req.body);
        var url = "mongodb://localhost:27017/";

DoctorloginDetails.find((
    {
        Email:req.body.email,
        Password:req.body.password
    })).exec(function(err, resp) {
       if (err) {
           res.send("0");
           console.log(err);
       } else {
        res.send(resp);
        console.log("Doctor details found");
        console.log(resp); 
       }
     });        
  
}
