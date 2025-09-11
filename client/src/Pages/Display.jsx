
//========================================================ONE-TO-ONE RELATION================================================================
import  Table from "react-bootstrap/Table"
import axios from "axios"
import { useState,useEffect } from "react"
const Display=()=>{
    const [myData,setMydata]=useState([]);

    const loadData=async()=>{
        let api="http://localhost:8000/display";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }

    useEffect(()=>{
        loadData();
    },[])

    const ans=myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.firstname}</td>
                <td>{key.lastname}</td>
                <td>{key.userid.email}</td>
                <td>{key.userid.username}</td>
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
                <th>FIRSTNAME</th>
                <th>LASTNAME</th>
                <th>EMAIL</th>
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