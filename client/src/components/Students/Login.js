import React,{useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import "./style.css"
import {Button} from "reactstrap";
function Login() {
    const[email,setEmail] = useState();
    const[password,setPassword] = useState(); 
    const [token,setToken]= useState(); 
    var url="http://localhost:4578"
//     useEffect(()=>{
// Login()
//     },[token])
const navigate=useNavigate();
  const Login=async() =>{
       await axios.post(url+'/api/student/login',{
            email:email,
            password:password
        })
        .then(response=>{
            setToken(response.data)
          localStorage.setItem('token',response.data)
          // console.log(token);
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
            // navigate('/Student/profile')
        }).catch(
          error=>{
            console.log(error);
            toast.error("email & password not maching")
          }
          
          )

    

    }

const navi=()=>{
  navigate('/Student/profile')
}
  return (
    <center>
<br /><br /><br /><br />
    <div className="log">
      <h1>Login</h1>
        <form><br /><br />
        <label>Email</label>
        <input type="email" name="email" placeholder="enter your email" onChange={e=>setEmail(e.target.value)} required /><br /><br />


        <label>Password</label>
        <input type="password" name="password" placeholder="enter your passwprd" onChange={e=>setPassword(e.target.value)} required/><br /><br />
        
        </form>
        {/* <button className="btn" onClick={Login} >Login</button> */}
        <div className="text-center">
        <Button color="success"
    outline onClick={Login} >
    Sign in
  </Button>
</div>
        <br /><br />
        {/* {token} */}
{
  token?(
    // <button className="btn" onClick={navi} >profile</button>
    <Button color="danger"
    outline
   onClick={navi} >
    Profile
  </Button>
    ):null
}
        <ToastContainer />
    </div>
    </center>
  )
}

export default Login