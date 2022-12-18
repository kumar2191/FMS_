import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function FinePage() {
    const navigate=useNavigate()

useEffect(() => {
    if(! localStorage.getItem('Cashier')){
        navigate('/cashier/login')
      }
})


const addfine=()=>{
    navigate('/cashier/Addfine')
}
const finedata=()=>{
    navigate('/cashier/data')
}
const logout=()=>{
    localStorage.clear()
    navigate('/')
}
  return (
    <div className="para">
      <h1>FINE-MANAGEMENT</h1><br /><br />
      <button onClick={addfine} className="std"><span></span>Addfine</button><br /><br />
      <button onClick={finedata} className="std"><span></span>FineData</button><br /><br />
      <button onClick={logout} className="std"><span></span>logOut</button><br /><br />
    </div>
  )
}

export default FinePage