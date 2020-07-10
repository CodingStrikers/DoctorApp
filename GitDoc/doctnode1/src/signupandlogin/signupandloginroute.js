var LoginDetails=require("./logindata");
var SignUpDetails=require("./signupdata");

module.exports=function(app){
    app
    .route("/dataloginp")
    .post(LoginDetails.LoginPatient);    
    
    app
    .route("/datalogind")
    .post(LoginDetails.LoginDoctor);

    app
    .route("/datasign")
    .post(SignUpDetails.Signup);
}