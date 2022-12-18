import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/StdReg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Label,
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Input
  } from "reactstrap";
function Register() {

    const[name,setName] = useState();
    const[RegNO,setRegNO] = useState();
    const[department,setDepartment] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const [batch,setBatch] = useState();
    var url="http://localhost:4578"

    const navigate=useNavigate();
const Reg=async()=>{
    axios.post(url+"/api/student/register",{
        name:name,
        RegNo:RegNO,
        Dept:department,
        // Section:section,
        email:email,
        password:password,
        Batch:batch,
}).then(response=>{
    // console.log("success",response);
    toast.success('🦄 successfully registered', {
        className:"toast-success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        navigate('/Student/login')
}).catch(error=>{
    console.log(error)
    toast.error("🎆 somthing Wrong")
})
};
const back=()=>{
  navigate('/')
}
// const nav=()=>{
//   navigate('/Student/login')
// }

  return (

    <center>
<br /><br />
    <h1>Register_Form </h1>
    <div className="create">
    <Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
          onChange={e=>setEmail(e.target.value)}
          />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          onChange={e=>setPassword(e.target.value)}
          placeholder="password placeholder"
          type="password"
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
  <FormGroup>
    <Label for="exampleAddress2">
       RegNO
    </Label>
    <Input
    className='r'
      id="regNo"
      name="regno"
      placeholder="Enter your regno"
     onChange={e=>setRegNO(e.target.value)} 
      />
  </FormGroup>
  <Row>

    <center>
    <Col md={6}>
      <FormGroup>
        <Label >
          Department
        </Label>
        <Input
          id="department"
          name="department"
          placeholder="Enter your department"
          onChange={e=>setDepartment(e.target.value)} 
          />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label >
          Batch
        </Label>
        <Input
        maxlength="4"
        type="number"
          id="batch"
          name="batch"
          placeholder="Enter your batch"
          onChange={e=>setBatch(e.target.value)} 
          />
      </FormGroup>
    </Col>
    </center>
  </Row>
  
  <Button color="success"
    outline onClick={Reg} >
    Sign in
  </Button>
  <br />
  {/* <a className="navLog" onClick={nav}><p>You have all ready an Account ?</p></a> */}
  <br />
  <Button color="danger"
    outline onClick={back} >
  back
  </Button>
</Form>
<ToastContainer />
        </div>
          </center>
  )
}

export default Register