import React,{useState} from 'react'
import './reg.css'
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const CashierRegister = () => {
  const[email,setEmail] = useState();
  const[password,setPassword] = useState(); 
  const [name,setName]= useState();
  const [batch,setBatch] = useState();
  var url="https://fsmserver.herokuapp.com/api/staff/register";

  const navigate=useNavigate();

    const Register=async()=>{
      await axios.post(url,{
        name:name,
        email:email,
        password:password,
        Batch:batch,
    })
    .then(response=>{
    toast.success('🦄 successfully Registered!!!', {
      className:"toast-success",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }).catch(
    error=>{
      console.log(error);
      toast.error("email id already exists")
    }
    
    )
    }
    const nav=()=>{
      navigate('/Hod/Profile')
    }

  return (
 

    <main className="cointainer">
        <center>

            <h1>Cashier-Registration</h1>
        </center>
        <div className="card">
        <input type="text" placeholder=" name" className="card_name" onChange={e=>setName(e.target.value)}  /><br />
            <input type="email" placeholder="email" className="card_name" onChange={e=>setEmail(e.target.value)}  /><br />
            <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} className="card_name"  /><br />
            <input type="number" placeholder="Batch" onChange={e=>setBatch(e.target.value)} className="card_name"  /><br />
          
                 <input type="submit" onClick={Register} id="submitid" value="Register" />
          
          <br />
            <input type="submit" onClick={nav} id="backid" value="Back" />
          
        </div>
        <ToastContainer />
    </main>
 
  )
}

export default CashierRegister