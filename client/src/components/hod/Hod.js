import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Hod = () => {
    const navigate=useNavigate();
useEffect(() => {
  if(!localStorage.getItem('Hod')){
    navigate('/Hod/Login')

  }
})
    const finedata=()=>{
        navigate('/Hod/finedata')
    }
    const reg=()=>{
      navigate('/Hod/CashierRegisteration')
  }
  const bulk=()=>{
   
    navigate('/Hod/addAll')
  }
  const Status=()=>{
   
    navigate('/Hod/Status')
  }
    const logout=()=>{
        localStorage.clear()
        navigate('/')
    }
    
  return (
    <div className="para">
    <h1>FINE-MANAGEMENT</h1><br /><br />
    <button onClick={reg} className="std"><span></span>Cashier-Register</button><br /><br />
    <button onClick={finedata} className="std"><span></span>FineData</button><br /><br />
    <button onClick={bulk} className="std"><span></span>Fine-For-All</button><br /><br />
    <button onClick={Status} className="std"><span></span>Status</button><br /><br />
    <button onClick={logout} className="std"><span></span>logOut</button><br /><br />
  </div>
  )
}

export default Hod