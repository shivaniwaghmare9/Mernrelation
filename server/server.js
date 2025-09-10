
   const express=require("express")
   const app=express();
   const bodyparser=require("body-parser");
   const cors=require("cors");
 
   const mongoose=require("mongoose");

   //Body Parser
   app.use(bodyparser.urlencoded({extended:true}))
   app.use(bodyparser.json())
   app.use(cors());
   mongoose.connect(process.env.DBCON).then(()=>{
      console.log("database connected succesfully!!")
   })

  const Port=process.env.PORT ||8000
   app.listen(Port,()=>{
    console.log(`Server run on port$(Port)`)
   })
   