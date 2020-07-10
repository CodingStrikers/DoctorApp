var DoctorDetailslogin=require("../models/doctor");
var PatientDetailslogin=require("../models/appdetails");

exports.DoctorloginDoctorDetails=function(req,res){
        console.log("Details of Doctor");
        console.log(req.body);
DoctorDetailslogin.find({ID:req.body.id})
.exec(function(err, resp) {
           if (err) {
           res.send("0");
           console.log(err);
       } 
       else {
        console.log("Doctor Details Found")
         res.send(resp);
        console.log(resp); 
       }
     });
      
}

exports.DoctorloginChangeDetails=function(req,res){
        console.log(" Update details of doctor");
        var newvalues = {
                    $set: {
                        Address: req.body.address,
                        Password: req.body.password,
                        About: req.body.about,
                        Fees: req.body.fees
                    }
              }

DoctorDetailslogin.findOneAndUpdate({Email:req.body.emails},(newvalues))
    .exec(function(err, resp) {
            if (err) {
            res.send("0");
            console.log(err);
    } 
    else {
          res.send(resp);
         console.log(resp); 
         console.log("Doctors details updated");
        }
      });
}
exports.DoctorloginPatDetails=function(req,res){
    console.log("Entered into Patient Details for Doctor login");
   PatientDetailslogin.find({DoctorID:req.body.id})
       .exec(function(err, resp) {
          if (err) {
                   res.send("0");
                   console.log(err);
               } 
        else {
                console.log("Patient Details Found")
                res.send(resp);
                console.log(resp); 
               }
    });
    
}


