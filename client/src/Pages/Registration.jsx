
//========================================================ONE-TO-ONE RELATION=======================================================================
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import {ToastContainer,toast} from "react-toastify"
// import { useState } from "react";
// import axios from "axios"
// const Registration=()=>{
//   const [input,setInput]=useState("");
//   const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//      setInput(Values=>({...Values,[name]:value}))
//      console.log(input);  
//   }
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     let api="http://localhost:8000/save";
//     try {
//       const response=await axios.post(api,input);
//     console.log(response);
//     toast.success("user successfully registered")
      
//     } catch (error) {
//       console.log(error)
//     }
    
//   }
//   return(
//     <>
//     <h2 className='h33'>User Data </h2>
//            <Form id="form">
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Username</Form.Label>
//         <Form.Control type="text" name="username" onChange={handleInput} />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Email</Form.Label>
//         <Form.Control type="email" name="email"  onChange={handleInput} />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Firstname</Form.Label>
//         <Form.Control type="text" name="firstname"  onChange={handleInput} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Lastname</Form.Label>
//         <Form.Control type="text" name="lastname"  onChange={handleInput} />
//       </Form.Group>

//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//     <ToastContainer/>
//     </>
//   )
// }
// export default Registration;

//========================================================ONE-TO-MANY RELATION=====================================================


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ToastContainer,toast} from "react-toastify"
import { useState } from "react";
import axios from "axios"
const Registration=()=>{
  const [input,setInput]=useState("");
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
     setInput(Values=>({...Values,[name]:value}))
     console.log(input);  
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/authersave";
    try {
      const response=await axios.post(api,input);
    console.log(response);
    toast.success("auther successfully registered")
      
    } catch (error) {
      console.log(error)
    }
    
  }
  return(
    <>
    <h2 className='h33'>Auther Details</h2>
           <Form id="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Authername</Form.Label>
        <Form.Control type="text" name="authername" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email"  onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Bookname</Form.Label>
        <Form.Control type="text" name="bookname"  onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" name="price"  onChange={handleInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer/>
    </>
  )
}
export default Registration;