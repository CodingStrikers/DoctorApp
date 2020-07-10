var PatientDetailsDelete=require("../models/appdetails");

exports.DeletePatDetails=function(req,res){
        console.log("The appointment details will  get cancelled");
        console.log(req.body.email);

PatientDetailsDelete.findOneAndDelete({CEmail:req.body.email})
    .exec(function(err, resp) {
           if (err) {
                    res.send("0");
                    console.log(err);
                } 
         else {
                 console.log("1 Document deleted")
                 res.send(resp);
                 console.log(resp); 
                }
     });

}