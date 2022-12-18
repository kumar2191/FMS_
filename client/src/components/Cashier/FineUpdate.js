import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FineUpdate() {
    const[Reg,setReg]=useState();
    const[status,setStatus] = useState()
    // const[reason,setReason] = useState();
    // const[amount,setAmount] = useState();

    const navigate=useNavigate()
    var url="http://localhost:4578"


    const params=useParams()
    useEffect(()=>{
      if(! localStorage.getItem('Cashier')){
        navigate('/cashier/login')
      }
        getfineDetails()
    })
    const getfineDetails=async()=>{
        // console.warn(params);
        let result=await fetch(url+`/api/fine/find/${params.id}`);
        result =await result.json();
        setReg(result.RegNo)
        // setReason(result.reason)
        // setStatus(result.status)
        // setAmount(result.amount)
        // console.warn(Reg);
}

      const update=async() =>{
        axios({
            method: 'put',
            url: url+`/api/fine/update-fine/${params.id}`,
            data: {
                status:status
            },
            headers: {
                accept: 'application/json',
                // token:Stoken
                }
          }).then(response =>{
            console.log(response);
            toast.success('🦄 successfully updated', {
              className:"toast-success",
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          }).catch(err =>{
            console.log(err);
          })
      }
      
      const nav=()=>{
        navigate('/cashier/data')
      }
  return (
    <center>
<br /><br /><br /><br />
    <div className="log">
      <center>
<br /><br />
        <label>Reg_No</label>
        <input type="text" value={Reg} id="reg_no" name="reg_no" onChange={e=>setReg(e.target.value)}/><br /><br />
        <label>status</label>
        <select  onChange={e=>{setStatus(e.target.value)}}>
          <option></option>
        <option value="Not paid">Not paid</option>
          <option value="paid">paid</option>
        </select><br /><br /><br /><br />
       <button onClick={update} >Update</button>
       <br /><br />
       <button onClick={nav} >back</button>
      </center>
       <ToastContainer />
    </div>
    </center>
  )
}

export default FineUpdate