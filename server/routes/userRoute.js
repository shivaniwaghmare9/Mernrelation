
const express=require("express")
const route=express.Router();
const userController=require("../controller/userController")

route.get("/usersave",userController.userSave);
module.exports=route;