
// //========================================================ONE-TO-ONE RELATION=======================================================================
// //    const express=require("express")
// //    const app=express();
// //    const bodyparser=require("body-parser");
// //    const cors=require("cors");
// //    const userRoute=require("./routes/userRoute")
// //    const mongoose=require("mongoose");
// //    require("dotenv").config();

// //    //Body Parser
// //    app.use(bodyparser.urlencoded({extended:true}))
// //    app.use(bodyparser.json())
// //    app.use(cors());
// //    mongoose.connect(process.env.DBCON).then(()=>{
// //       console.log("database connected succesfully!!")
// //    })

// //    app.use("/",userRoute)
// //   const Port=process.env.PORT ||8000
// //    app.listen(Port,()=>{
// //     console.log(`Server run on port ${Port}`)
// //    })
   

// //========================================================ONE-TO-MANY RELATION=======================================================================


//    const express=require("express")
//    const app=express();
//    const bodyparser=require("body-parser");
//    const cors=require("cors");
//    const autherRoute=require("./routes/autherRoute")
//    const mongoose=require("mongoose");
//    require("dotenv").config();

//    //Body Parser
//    app.use(bodyparser.urlencoded({extended:true}))
//    app.use(bodyparser.json())
//    app.use(cors());
//    mongoose.connect(process.env.DBCON).then(()=>{
//       console.log("database connected succesfully!!")
//    })

//    app.use("/",autherRoute)
//   const Port=process.env.PORT ||8000
//    app.listen(Port,()=>{
//     console.log(`Server run on port ${Port}`)
//    })
   
//========================================================ONE-TO-ONE RELATION=======================================================================
//    const express=require("express")
//    const app=express();
//    const bodyparser=require("body-parser");
//    const cors=require("cors");
//    const userRoute=require("./routes/userRoute")
//    const mongoose=require("mongoose");
//    require("dotenv").config();

//    //Body Parser
//    app.use(bodyparser.urlencoded({extended:true}))
//    app.use(bodyparser.json())
//    app.use(cors());
//    mongoose.connect(process.env.DBCON).then(()=>{
//       console.log("database connected succesfully!!")
//    })

//    app.use("/",userRoute)
//   const Port=process.env.PORT ||8000
//    app.listen(Port,()=>{
//     console.log(`Server run on port ${Port}`)
//    })
   

//========================================================ONE-TO-MANY RELATION=======================================================================


   const express=require("express")
   const app=express();
   const bodyparser=require("body-parser");
   const cors=require("cors");
   const autherRoute=require("./routes/autherRoute")
   const mongoose=require("mongoose");
   require("dotenv").config();

   //Body Parser
   app.use(bodyparser.urlencoded({extended:true}))
   app.use(bodyparser.json())
   app.use(cors());
   mongoose.connect(process.env.DBCON).then(()=>{
      console.log("database connected succesfully!!")
   })

   app.use("/",autherRoute)
  const Port=process.env.PORT ||8000
   app.listen(Port,()=>{
    console.log(`Server run on port ${Port}`)
   })
   