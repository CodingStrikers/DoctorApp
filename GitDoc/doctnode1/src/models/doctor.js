var mongoose=require("mongoose");

var DocSchema = new mongoose.Schema({
    ID:String,
    Image:String,
    Name: String,
    Address:String,
    Email:String,
    Password:String,
    MobileNo:String,
    Speciality:String,
    Locality:String,
    Experience:String,
    Availability:String,
    About:String,
    Fees:Number,
    Cases:Number,
    Rating:String
  },
    {collection:"docdata"}
    
    );
  
module.exports = mongoose.model("docdata", DocSchema);;