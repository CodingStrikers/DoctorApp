var DocDetails=require("./profile/profile");
var SpecDetails=require("./speciality/specialitydet")
var DocSpecDetails=require("./speciality/doctordet");

module.exports=function(app){
    app
    .route("/doc")
    .post(DocDetails.doctorprofile);

    app
    .route("/specdata")
    .post(SpecDetails.special);

    app
    .route("/prof")
    .post(DocSpecDetails.doctorprofile);

}