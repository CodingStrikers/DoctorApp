var nodemailer = require('nodemailer');

exports.Acceptappoint=function(req,res){
        console.log("success mail to the patient")
        console.log(req.body);
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mvishnumehta97@gmail.com',
                pass: 'ctxsrzdajxumslgg'
            }
        });
        var mailOptions = {
            from: 'mvishnumehta97@gmail.com',
            to: `${req.body.email}`,
            subject: `Congratulations ${req.body.email}`,
            text: `Your appointment has been booked with  ${req.body.dname} for the date ${req.body.date} and time ${req.body.time}
                  Please be punctual as time matters the most`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send("0");
            } else {
                console.log(`Email sent to ${req.body.email}`);
                res.send("1");
            }
        });
};

exports.Rejectappoint=function(req,res){
        console.log("reject mail to the patient")
        console.log(req.body);
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mvishnumehta97@gmail.com',
                pass: 'ctxsrzdajxumslgg'
            }
        });
        var mailOptions = {
            from: 'mvishnumehta97@gmail.com',
            to: `${req.body.email}`,
            subject: `Appointment Rejected @${req.body.email}`,
            text: `Your appointment has been REJECTED with  ${req.body.dname} for the date ${req.body.date} and time ${req.body.time}
                  as the doctor is bit busy so please try for some other slot`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send("0");
            } else {
                console.log(`Email sent to ${req.body.email}`);
                res.send("1");
            }
        });    
}