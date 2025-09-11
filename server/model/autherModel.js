//========================================================ONE-TO-MANY RELATION=====================================================


const mongoose=require("mongoose");
const autherSchema=new mongoose.Schema({
    authername:String,
    email:String,
    booksid:[{type:mongoose.Schema.Types.ObjectId,ref:"book"}]
})
module.exports=mongoose.model("user",autherSchema)