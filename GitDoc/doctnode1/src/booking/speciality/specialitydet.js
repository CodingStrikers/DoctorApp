var SpecialityInfo=require("../../models/specinfo");

exports.special=function(req,res){
	console.log("Entered into Speciality Section");
	console.log(req.body);
	
	SpecialityInfo.find({
		Type:req.body.speciality
	})
	.exec(function(err, resp) {
		if (err) {
				 res.send("0");
				 console.log(err);
			 } 
	  else {
			  console.log(" Speciality Details Found");
			  console.log("no of records found for the speciality are" + resp.length);
			  res.send(resp);
			  console.log(resp); 
			 }
  });
}

