//========================================================ONE-TO-MANY RELATION=====================================================


const autherModel=require("../model/autherModel")
const bookModel=require("../model/bookModel")

const addAuther=async(req,res)=>{
     const {authername,email,bookname,price}=req.body;
    const book=await bookModel.create({
        bookname:bookname,
        price:price,
       
    })
    console.log(auther)
    const auther=await autherModel.create({
        authername:authername,
        email:email,
         //booksid:[]
    })
  await autherModel.findByIdAndUpdate(auther._id,{$push:{booksid:book._id}})
    res.send("data save!!")
}
const autherDisplay=async(req,res)=>{
      const auther= await autherModel.find().populate("booksid")
      res.send(auther);
}

module.exports={
    addAuther,
    autherDisplay
}