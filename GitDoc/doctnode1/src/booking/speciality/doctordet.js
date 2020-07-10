var SpecialityDoctorDetails=require("../../models/doctor");

exports.doctorprofile=function(req,res){
console.log("Entered into doctor Profile for Speciality Section");

SpecialityDoctorDetails.find({ID:req.body.profileinfo})
.exec(function(err, resp) {
	if (err) {
				 res.send("0");
				 console.log(err);
			 } 
	  else {
			  console.log("Doctor Profile Page Data Found")
			  res.send(resp);
			  console.log(resp); 
			 }
  });
}