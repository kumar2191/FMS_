/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
// import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Finelist() {
    const [Stoken,setSToken]=useState();
    const [data,setData] = useState([{}]);
    // const [paid,setPaid]=useState(0);
    // const [notpaid,setNotPaid]=useState(0)
    const navigate=useNavigate();

    var url="http://localhost:4578"

useEffect(() => {
    if(! localStorage.getItem('token')){
        navigate('/Student/login')
    }else{
       setSToken( localStorage.getItem('token'))
       
    colectData()
}
},[Stoken])
const colectData=async() =>{
    let result=await fetch(url+'/api/fine/ger',{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            token:Stoken
        }
    });
    result=await result.json();
    setData(result)
}


    const da=data.length>0? data.map((item,i)=>{
        return( 
        // <ul key={item._id}>
            <ul>
         {/* <li>{i+1}</li> */}
        <li>{item.reason}</li>
         <li>{item.RegNo}</li>
         <li>{item.status}</li>
         <li>{item.amount}</li>
         
         </ul>)
       }):<h1>YOU HAVE NO FINE</h1>


const back=()=>{
    navigate('/Student/profile')
}

  return (
    <div className="fine-list" >
        <h1>fine-List</h1>
<ul>
             {/* <li>S.No</li>  */}
            <li>reason</li>
            <li>RegNo</li>
            <li>status</li>
            <li>amount</li>
          
            
        </ul>

{da}

       <button onClick={back} >Back</button>
    </div>
  )
}

export default Finelist