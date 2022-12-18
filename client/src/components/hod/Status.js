 import axios from 'axios'
 import { useState } from 'react';
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function PaidSts(){


       

        const[values,setValues]=useState({status:""})
        const [result,setResult]=useState([])
        const[click,setClick]=useState(false)
        const[total,setTotal]=useState()       
        const [token,setToken]= useState()
        const navigate=useNavigate();


        useEffect(() => {
            if(! localStorage.getItem('Hod')){
                navigate('/')
              }else{
                setToken( localStorage.getItem('Hod'));
              }
                
        },[])


      async  function handle(e){
          e.preventDefault()
          // console.log(JSON.stringify(values))
          const url=`https://fsmserver.herokuapp.com/api/status/${values.status}`
          const headers = {
            'Content-Type': 'application/json',
            'token':token
          }
        
          await axios.get(url, {
            headers: headers
          })
       
        .then(res=>{
          console.warn("skhc");
            console.log(res.data);
                setResult(res.data)
                setClick(true)
                // console.log(res.data);
                let amount=0
                for (let index = 0; index < result.length; index++) {
                  amount+=result[index].total;
                  setTotal(amount) 
                }
              
        })
        .catch(error=>{
            alert(error.response)
        })  
        }

const da=result.length>0? result.map((item,i)=>{
            return( 
            // <ul key={item._id}>
                <ul key={i} >
             <li>{i+1}</li>
            <li>{item._id.RegNo}</li>
             <li>{item._id.status}</li>
             <li>{item.total}</li>
             {/* <li>{item.amount}</li> */}
             
             </ul>)
           }):<h1>YOU HAVE NO FINE</h1>
    
    


return(

 <>
 <h3>View Fund</h3>
 <p>{total}</p>
  <form className="fund-form">
  <div class="form-group">
    <label>Search :</label>
            <input type="text"    placeholder="Enter Status"
             onChange={(e) => setValues({...values, status: e.target.value})} ></input>
          </div><br></br>
          <button type="submit" class="btn btn-primary" onClick={handle} >Submit</button>
        
        </form>

{click===false?(null):(
  <div>
<h2>Student List </h2>
        <div className="fine-list" >
  
          <ul>    
                  <li>S.No</li>
                  <li>Register No</li>
                  <li>Status</li>
                  <li>Amount</li>
                </ul>
          
            {/* <tbody>
                {result.map((emp,id)=> (
                      <tr key={id}>
                      <td>{id+1}</td>
                       <td>{emp._id.RegNo}</td>
                       <td>{emp._id.status}</td>
                       <td>{emp.total}</td>
                    </tr>
                ))
               }
            </tbody> */}

            {da}
        </div>
        </div>
)}
    </>
    
)
}