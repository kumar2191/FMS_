import React,{useState,useEffect}  from 'react'
import axios from 'axios'
import {Link,useNavigate}from "react-router-dom"
const NewFineData = () => {
    const [data,setData]=useState([])
    const [token,setToken] = useState()
    const navigate=useNavigate()
const GetToken=async()=>{
    if(! localStorage.getItem('Cashier')){
        navigate('/')
      }else{
        await setToken(localStorage.getItem('Cashier'))
        // console.log(token);
      }

  }
      var url="http://localhost:4578"

const FetchData=async()=>{
   try {
   const data=await axios({
        method: 'GET',
        url:url+"/api/fine/get",
        headers:{
            accept: 'application/json',
            token:token
        }
    })
    setData(data.data);
} catch (error) {
    alert('error')
}
}
console.log(data);
// console.log(data.length);
console.log(data);
useEffect(() => {
    GetToken()
    FetchData()
},[token])


const Result=data.length>0?Object.values(data).map((item,i)=>{
  return(
    <ul>
    {/* <li>{i+1}</li> */}
   <li>{item.reason}</li>
    <li>{item.RegNo}</li>
    <li>{item.status}</li>
    <li>{item.amount}</li>
    <li><Link to={"/cashier/update/"+item._id}>Update</Link></li>
    </ul>
  )
})
 :<h1>No result found</h1>
 const back=()=>{
    navigate('/cashier/finepage')
  }

  return (
    <div  className="fine-list">
        <ul>
             {/* <li>S.No</li>  */}
            <li><b>reason</b></li>
            <li><b>RegNo</b></li>
            <li><b>status</b></li>
            <li><b>amount</b></li>
            <li><b>update</b></li>
            
        </ul>
        {
            Result
        }
          <button onClick={back}>Back</button>
    </div>
  )
}

export default NewFineData