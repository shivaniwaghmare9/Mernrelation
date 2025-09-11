
const profileModel=require("../model/profileModel")
const userModel=require("../model/userModel")

const userSave=async(req,res)=>{
    const {username,email,firstname,lastname}=req.body;
    const User=await userModel.create({
        username:username,
        email:email
    })
    console.log(User)
    const Profile=await profileModel.create({
        firstname:firstname,
        lastname:lastname,
        userid:User._id
    })
    res.send("okkk!!")
}

const userDisplay=async(req,res)=>{
      const Data= await profileModel.find().populate("userid")
      res.send(Data);
}

module.exports={
     userSave,
     userDisplay

}