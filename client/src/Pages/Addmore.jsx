
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Addmore=()=>{
    const {id}=useParams();
    const[name,setName]=useState("");
    const[price,setPrice]=useState("")
    const handleSubmit=async()=>{
        let api=`http://localhost:8000/booksave`
        const response=await axios.post(api,{bookname:name,price:price,id:id})
        console.log(response.data);
    }
    return(
        <>
         <h3 className="h33">Add Books</h3>
         Enter Bookname: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
         Enter Price:   <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/><br/>
         <button onClick={handleSubmit}>Save!</button>
        </>
    )
}
export default Addmore;