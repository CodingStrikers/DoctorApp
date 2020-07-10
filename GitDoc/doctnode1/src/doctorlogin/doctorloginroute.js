var AcceptorRejectDetails=require("./accorrej");
var DoctorProfileLoginDetails=require("./docpatdetails");
var DoctorDeleteDetails=require("./deleteapp");


module.exports=function(app){
   
    app
    .route("/accept")
    .post(AcceptorRejectDetails.Acceptappoint);

    app
    .route("/reject")
    .post(AcceptorRejectDetails.Rejectappoint);

    app
    .route("/docdetail")
    .post(DoctorProfileLoginDetails.DoctorloginDoctorDetails);

    app
    .route("/chandoc")
    .post(DoctorProfileLoginDetails.DoctorloginChangeDetails);

    app
    .route("/doclogpat")
    .post(DoctorProfileLoginDetails.DoctorloginPatDetails);

    app
    .route("/delapp")
    .post(DoctorDeleteDetails.DeletePatDetails);


}