
const mongoose=require("mongoose");
const profileModel=new mongoose.Schema({
    firstname:String,
    lastname:String,
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})
module.exports=mongoose.model("profile",profileModel)