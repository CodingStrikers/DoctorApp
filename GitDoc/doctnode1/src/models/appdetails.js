var mongoose=require("mongoose");

var AppSchema = new mongoose.Schema({
    Date: String,
    Time: String,
    Message: String,
    CEmail:String,
    DoctorID:String
  });

module.exports = mongoose.model("Appdetails", AppSchema);

  