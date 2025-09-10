
   const express=require("express")
   const app=express();
   const body

  const Port=process.env.PORT ||8000
   app.listen(Port,()=>{
    console.log(`Server run on port$(Port)`)
   })
   const bodyparser=require("body-parser")
   const cors=require("cors")
 
   const mongoose=require("mongoose")