import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


const BulkFine = () => {
  const [amount,setAmount]=React.useState(0)
  const [reason,setReason] = React.useState()
    const navigate=useNavigate();
    const back=()=>{
        navigate('/Hod/Profile')
      }
    // const formik=useFormik({

    //     initialValues:{
    //       amount:'',reason:''
    //     },
    //     onSubmit:values=>{
    //           handle()
    //     },
    //     validate:(values)=>{
    //       let errors={}

    //       if(!values.amount) errors.amount="required"
    //       if(!values.reason) errors.reason="required"
    //       return errors
    //     }
    //   })
      async  function handle(){
        
        // const url='https://fsmserver.herokuapp.com/api/fine/all'
        axios.post("https://fsmserver.herokuapp.com/api/fine/all",{ 
          amount:amount,
          reason:reason,
      })
      .then(res=>{
          if(res.status===400){
          console.log('Something went wrong');
            }
            else{
            //   console.log(res.data)
            //   alert(res.data)
              toast.success(res.data+"🦄 ", {
                className:"toast-success",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            } 
      })
      .catch(error=>{
          alert(error.response.data)
      })  
      }

  return (
    <>
<main className="cointainer">
        <center>

            <h1>Cashier-Registration</h1>
        </center>
        <div className="card">
    <form  >
            <input type="number" name="amount" placeholder="Amount"
             className="card_name" onChange={e=>setAmount(e.target.value)}  /><br />
       
            {/* {formik.errors.amount ? (<span style={{color:"red"}}>{formik.errors.amount}</span>) : null}<br /><br /> */}
       
        <input type="text" placeholder="reason" name="reason" 
        className="card_name" onChange={e=>setReason(e.target.value)}  /><br />

        {/* {formik.errors.reason ? (<span style={{color:"red"}} >{formik.errors.reason}</span>) : null}<br /><br /> */}
             <input type="button" onClick={handle}   id="hodid" value="Add" />
          
          <br />
          
    </form>
<input type="submit" onClick={back}  id="backhid" value="Back" />
        </div>
        <ToastContainer />
    </main>
             </>
  )
}

export default BulkFine