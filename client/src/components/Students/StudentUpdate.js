import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Label,
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Input
  } from "reactstrap";
function StudentUpdate() {
    const[name,setName] = useState();
    const[department,setDepartment] = useState();
    const[section,setSection] = useState();
   const [Stoken,setSToken] =useState();
   
const navigate=useNavigate();
  
var url="http://localhost:4578"

   useEffect(() => {
   setSToken( localStorage.getItem('token'));
  //  console.error(Stoken);
   },[Stoken]);
   useEffect(() => {
    if(! localStorage.getItem('token')){
        navigate('/Student/login')
      }
     },[navigate])
    const Update=async() =>{
    axios({
        method: 'post',
        url: url+'/api/student/update',
        data: {
            name:name,
            Dept:department,
            Section:section,
        },
        headers: {
            accept: 'application/json',
            token:Stoken
            }
      });
      toast.success('🦄 successfully UPDATED!!!', {
        className:"toast-success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    };
   const pass=() =>{
    navigate('/Student/changepassword')
   }
    
  return (
    <center>
<br /><br /><br />
 
          <h1>Profile-Edit</h1>
         <div className="create">

 <Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Department 
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Department"
          type="email"
          onChange={e=>setDepartment(e.target.value)}
          />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          section
        </Label>
        <Input
          id="Section"
          name="password"
          onChange={e=>setSection(e.target.value)}
          placeholder="Section"
          type="text"
          />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
        Name
    </Label>
    <Input
      id="name"
      name="Name"
      placeholder="Enter Your Name"
      onChange={e=>setName(e.target.value)} 
      />
  </FormGroup>
  <Button color="success"
    outline onClick={Update} >
    Update
  </Button>
<br /><br />
<button onClick={pass} outline>
    ChangePassword
  </button>
  
  </Form>
      </div>
        <ToastContainer />
    {/* </div> */}
    </center>
  )
}

export default StudentUpdate