import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ChangePassword() {
    const [Stoken,setSToken]= useState();
    const [password,setPassword]= useState();


    const navigate=useNavigate();
    var url="http://localhost:4578"
    useEffect(() => {
        setSToken( localStorage.getItem('token'));
        // console.error(Stoken);
        },[Stoken]);


        useEffect(() => {
         if(! localStorage.getItem('token')){
             navigate('/Student/login')
           }
          },[navigate])
const ChangePassword=async()=>{
    axios({
        method: 'post',
        url: url+'/api/student/changePassword',
        data: {
          password:password 
        },
        headers: {
            accept: 'application/json',
            token:Stoken
            }
      });
      toast.success('🦄 successfull!!!', {
        className:"toast-success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}         
const back=()=>{
  navigate('/Student/profile')
}

  return (
    <center>
<br /><br />
    <div className="log" ><br /><br />
    <center>
      <label>New Password</label></center>
      <br />
        <input type="password" name="password" placeholder="Enter your new password" onChange={e=>setPassword(e.target.value) } required/><br /><br /><br />
        <button  onClick={ChangePassword}><span></span>submit</button>
   <br /><br />
   <button onClick={back} >Back</button>
        <ToastContainer />
    </div>
    </center>
  )
}

export default ChangePassword