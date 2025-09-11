//========================================================ONE-TO-MANY RELATION=====================================================
const express=require("express")
const route=express.Router();
const autherController=require("../controller/autherController")

route.post("/authersave",autherController.addAuther);
route.get("/display",autherController.autherDisplay);
module.exports=route;