
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import {ToastContainer,toast} from "react-toastify"

// const Addmore=()=>{
//     const {id}=useParams();
//     const[name,setName]=useState("");
//     const[price,setPrice]=useState("")
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         let api=`http://localhost:8000/booksave`
//         const response=await axios.post(api,{bookname:name,price:price,id:id})
//         console.log(response.data);
//         toast.info("add successfully!!")
//     }
//     return(
//         <>
//          <h3 className="h33">Add Books</h3>
//          <Form id="form">
     
//        <Form.Group className="mb-3" >
//         <Form.Label>Enter Bookname</Form.Label>
//         <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//       </Form.Group>
//       <Form.Group className="mb-3" >
//         <Form.Label>Enter Price</Form.Label>
//         <Form.Control type="text"value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
//       </Form.Group>

//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//          {/* Enter Bookname: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
//          Enter Price:   <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/><br/>
//          <button onClick={handleSubmit}>Save!</button> */}
//          <ToastContainer/>
//         </>
//     )
// }
// export default Addmore;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify"

const Addmore=()=>{
    const {id}=useParams();
    const[name,setName]=useState("");
    const[price,setPrice]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`http://localhost:8000/booksave`
        const response=await axios.post(api,{bookname:name,price:price,id:id})
        console.log(response.data);
        toast.info("add successfully!!")
    }
    return(
        <>
         <h3 className="h33">Add Books</h3>
         <Form id="form">
     
       <Form.Group className="mb-3" >
        <Form.Label>Enter Bookname</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text"value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
         {/* Enter Bookname: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
         Enter Price:   <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/><br/>
         <button onClick={handleSubmit}>Save!</button> */}
         <ToastContainer/>
        </>
    )
}
export default Addmore;