var Appoint=require("../models/appdetails");
var Customer=require("../models/culogdetails");

exports.bookappointment = function(req, res) {
    console.log("Into Appointment Details section ");
    console.log(req.body);

    let appoint=new Appoint({
        Date:req.body.bdata,
        Time:req.body.btim,
        Message:req.body.btext,
        CEmail:req.body.bemail,
        DoctorID:req.body.bid
    })

appoint.save()
    .then(data=>{
        console.log("appointment booked");
        console.log(data);
        res.send(data);
      // db.close();
    })
    .catch(err=>{
        console.log(err);
        res.send("0");
    })
    
};
 
exports.localstoragedata=function(req,res){
        console.log("Into localstorage section");
        console.log(req.body);

     var customer=new Customer();
     customer.cEmail=req.body.emaillocal;
     customer.cPassword=req.body.passwlocal;

Customer.find((customer))
     .exec(function(err, resp) {
       if (err) {
           res.send("0");
           console.log(err);
      //   res.status(500).json(err);
       } else {

        res.send("1");
        console.log(resp); 
     //    res.status(200).json();
       }
     });

    } 
        
