import React,{useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const[email,setEmail] = useState();
    const[password,setPassword] = useState(); 
    const [token,setToken]= useState(); 
    const navigate=useNavigate();
   


    const HODLogin=async()=>{
        await axios.post("https://fsmserver.herokuapp.com/api/hod/login",{
            email:email,
            password:password
        })
        .then(response=>{
           setToken(response.data);
           localStorage.setItem('Hod',response.data);
   
           toast.success('🦄 successfully logedin!!!', {
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
                console.warn(error.message);
                // toast.error("email & password not maching")
            }
        )
    }


    const navi=()=>{
        navigate('/Hod/Profile')
    }

  return (
    <center>
    <br /><br /><br /><br />
        <div className="log">
          <h1>Login</h1>
            <form><br /><br />
            <label>Email</label>
            <input type="email"  name="email" placeholder="enter your email" onChange={e=>setEmail(e.target.value)} required /><br /><br />
    
    
            <label>Password</label>
            <input type="password" name="password" placeholder="enter your passwprd" onChange={e=>setPassword(e.target.value)} required/><br /><br />
            
            </form>
            <button className="btn" onClick={HODLogin} >Login</button>
            <br /><br />
            {/* {token} */}
    {
      token?(
        <button className="btn" onClick={navi} >profile</button>
        ):null
    }
            <ToastContainer />
        </div>
        </center>
    
      )
  
}

export default Login