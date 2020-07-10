var mongoose=require("mongoose");

var SpecSchema = new mongoose.Schema({
    Id: String,
    Type: String,
    Info: String,
    Simage:String
  },
    {collection:"specinfo"}

    );
  
module.exports = mongoose.model("specinfo", SpecSchema);;