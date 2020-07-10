var SignupPatient=require("../models/culogdetails");

exports.Signup=function(req,res){
        console.log("Into sign up ");
        console.log(req.body);

        let signupdetails=new SignupPatient({
            cName: req.body.signupFormModalName,
            cEmail: req.body.signupFormModalEmail,
            cPassword: req.body.signupFormModalPassword
        })

signupdetails.save()
    .then(data=>{
        console.log("patient signup successful");
        console.log(data);
        console.log("1 doc inserted");
        res.send(data);
      // db.close();
    })
    .catch(err=>{
        console.log(err);
        res.send("0");
    })        

}
