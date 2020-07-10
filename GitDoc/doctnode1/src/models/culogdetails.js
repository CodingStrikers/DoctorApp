var mongoose=require("mongoose");

var CustSchema = new mongoose.Schema({
    cName: String,
    cEmail: String,
    cPassword: String
  },
    {collection:"culogdata"}

    );
  
module.exports = mongoose.model("culogdata", CustSchema);