//========================================================ONE-TO-MANY RELATION=====================================================
const express=require("express")
const route=express.Router();
const autherController=require("../controller/autherController")

route.post("/save",autherController.userSave);
route.get("/display",autherController.userDisplay);
module.exports=route;