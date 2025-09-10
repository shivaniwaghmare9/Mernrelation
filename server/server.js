
   const express=require("express")
   const app=express();
   const bodyparser=require("body-parser")
   const cors=require("cors")
 
   const mongoose=require("mongoose")

   //Body Parser
   app.use(bodyparser.urlencoded({extended:true});
   app.use(bodyparser.json());
   app.use(cors());

  const Port=process.env.PORT ||8000
   app.listen(Port,()=>{
    console.log(`Server run on port$(Port)`)
   })
   