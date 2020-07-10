var appDetails=require("./appointmentdetails");

module.exports=function(app){

    app
    .route("/lcheck")
    .post(appDetails.localstoragedata);
    
    app
    .route("/appodata")
    .post(appDetails.bookappointment);


}
