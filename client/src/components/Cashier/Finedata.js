import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './fine.css'
import {Link,useNavigate}from "react-router-dom"


function Finedata() {
  const [data,setData]=useState([])
  const [token,setToken] = useState()
  const[paid,setPaid] = useState([])
  const[notpaid,setNotPaid] = useState([])
  // const[pAmount,setPamount] = useState(0)
  // const[uAmount,setUamount] = useState(0)

  const navigate=useNavigate()

    var url="http://localhost:4578"

  useEffect(() => {
    if(! localStorage.getItem('Cashier')){
      navigate('/')
    }else{
      setToken(localStorage.getItem('Cashier'))
    }
    console.log(token);
    axios({
      method:"get",
      url:url+"/api/fine/get",
      headers:{
          accept: 'application/json',
          token:token
      }
  }).then(response=>{
    setData(response.data);
  }).catch(err =>console.log(err.message))
  },[navigate, notpaid, token, url])

useEffect(() => {
  const getData=async()=>{
    let result= await fetch(url+"/api/fine/notpaid")
         result=await result.json()
         setNotPaid(result)
   
        //  console.log(notpaid);
   }
   getData()
},[notpaid, url])
useEffect(() => {
  const getData=async()=>{
    let result= await fetch(url+"/api/fine/paid")
         result=await result.json()
         setPaid(result)
          // setPamount(result)
        //  console.log(paid);
   }
   getData()
},[notpaid, url])



  // console.log(data);
  const back=()=>{
    navigate('/cashier/finepage')
  }

//   const search=async (e)=>{
//     let val=e.target.value
// // val=dhjh
//     // console.log(val);
//     let result=await fetch(`http://localhost:5000/api/fine/search/${val}`);
//     result=await result.json()
//     console.warn(result);
//     if (result) {
//         setData(result)
//     }else{
//       //  getData()
//     }
// }  

const Value=data ? data.map((item,i)=>{
  return( <ul key={item._id}>
   <li>{i+1}</li>
     <li>{item.reason}</li>
   <li>{item.RegNo}</li>
   {/* <li>{item.date}</li> */}
   <li>{item.status}</li>
   <li>{item.amount}</li>
   {/* <li>{item.Datepayment}</li> */}
   {/* <li>{item._id}</li> */}
   <li><Link to={"/cashier/update/"+item._id}>Update</Link></li>
   </ul>)
 }):<h1>No result found</h1>

  return (
    <div className="fine-list" >
    <h1>Fine-List</h1>
    {/* <input type="text" placeholder="Enter the value" onChange={search} className="search-box" /> */}
        <ul className="th">
           <li>S.No</li> 
          <li>reason</li>
          {/* <li>reason</li> */}
          <li>RegNo</li>
          {/* <li>date</li> */}
          <li>status</li>
          <li>amount</li>
          {/* <li>Delete</li> */}
          <li>update</li>
          {/* <li>Datepayment</li> */}
          {/* <li>amount</li> */}
      </ul>
      {
       Value
      }
{
notpaid.map((item,i)=>{
  // setUamount(item.total)
 return(
  <h2 key={i} >not-paid:<span className="tot">{item.total}</span></h2>
 )
})
}
{
paid.map((item,i)=>{
// setPamount(item.total)
 return(
  <h2 key={i} >Paid:<span className="tott">{item.total}</span></h2>
 )
})

}


{/* <h1>Total:{uAmount+pAmount}</h1> */}
      <button onClick={back}>Back</button>
  </div>
  )
}

export default Finedata