
// //========================================================ONE-TO-ONE RELATION================================================================
// import  Table from "react-bootstrap/Table"
// import axios from "axios"
// import { useState,useEffect } from "react"
// const Display=()=>{
//     const [myData,setMydata]=useState([]);

//     const loadData=async()=>{
//         let api="http://localhost:8000/display";
//         const response=await axios.get(api);
//         console.log(response.data);
//         setMydata(response.data)
//     }

//     useEffect(()=>{
//         loadData();
//     },[])

//     const ans=myData.map((key)=>{
//         return(
//             <>
//             <tr>
//                 <td>{key.firstname}</td>
//                 <td>{key.lastname}</td>
//                 <td>{key.userid.email}</td>
//                 <td>{key.userid.username}</td>
//             </tr>
//             </>
//         )
//     })
//     return(
//         <>
//        <h3 className="h33">User data</h3>
//        <Table striped bordered hover align="center">
//            <thead>
//             <tr>
//                 <th>FIRSTNAME</th>
//                 <th>LASTNAME</th>
//                 <th>EMAIL</th>
//                 <th>USERNAME</th>
//             </tr>
//            </thead>
//            <tbody>
//             {ans}
//            </tbody>
//        </Table>
//        </>
//     )
// }
// export default Display;















//========================================================ONE-TO-MANY RELATION================================================================
import  Table from "react-bootstrap/Table"
import axios from "axios"
import { useState,useEffect } from "react"
import {useNavigate} from "react-router-dom"
const Display=()=>{
    const [myData,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=async()=>{
        let api="http://localhost:8000/autherdisplay";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }

    useEffect(()=>{
        loadData();
    },[])

    const addBook=(id)=>{
      navigate(`/addmore/${id}`)
    }
    const ans=myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.authername}</td>
                <td>{key.email}</td>
                <td>
                    {key.booksid.map((item)=>{
                        return(
                            <>
                            <p>
                                <span>{item.bookname}/{item.price}</span>
                            </p>
                            </>
                        )
                    })}
                </td>
                <td>
                    <button onClick={()=>{addBook(key._id)}}>Add</button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
       <h3 className="h33">User data</h3>
       <Table striped bordered hover align="center">
           <thead>
            <tr>
                <th>AUTHERNAME</th>
                <th>EMAIL</th>
                <th>BOOKS DETAILS/PRICE</th>
                <th>USERNAME</th>
            </tr>
           </thead>
           <tbody>
            {ans}
           </tbody>
       </Table>
       </>
    )
}
export default Display;