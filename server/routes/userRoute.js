
const express=require("express")
const route=express.Router();
const userController=require("../controller/userController")

route.post("/save",userController.userSave);
route.get("/display",userController.userDisplay);
module.exports=route;