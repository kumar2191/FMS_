import React from 'react'
import {useNavigate} from 'react-router-dom'
import './home.css'
import Footer from './Footer/footer'
function Homepage() {
    const navigate=useNavigate()
    const stdReg=()=>{
        navigate('/Student/Register')
    }
    const stdlog=()=>{
        navigate('/Student/login')
    }
    const cashier=()=>{
      navigate('/cashier/login')
    }
    const Hod=()=>{
      navigate('/Hod/Login')
    }
  return (
    <div>

        <div className="para">
      
      <h1>Fine-Management System</h1>
                 <h3>For-Students</h3>
         <button className="std"  onClick={stdReg} ><span></span>Register</button>
         <button className="std"  onClick={stdlog} ><span></span>Login</button>
            <h3>For-Cashier</h3>
         <button className="cashier" onClick={cashier} ><span></span>Login</button>
         <h3>Hod</h3>
         <button className="cashier" onClick={Hod} ><span></span>Login</button>
     
         
    </div>
    <Footer />
    </div>
  )
}

export default Homepage