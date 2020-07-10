var DoctorProfileDetails=require("../../models/doctor");

exports.doctorprofile=function(req,res){
	console.log("Entered into doctor Information Panel");
	console.log("Body request " +req);
	console.log(req.body);

	//console.log("DoctorDetailsare1",DoctorDet);

	DoctorDet=new DoctorProfileDetails();
	console.log("DoctorDetailsare1",DoctorDet);

	DoctorDet.Locality=req.body.locations;
	DoctorDet.Speciality=req.body.specialisations;

	console.log("DoctorDetailsare2",DoctorDet);

DoctorProfileDetails.find({Locality:req.body.locations,
		Speciality:req.body.specialisations
	}).exec(function(err, resp) {
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
