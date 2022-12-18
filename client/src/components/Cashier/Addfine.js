import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addfine() {
    const [regno,setRegno]= useState();
    const [amount,setAmount]= useState();
    const [reason,setReason]= useState();
    const [Name,setName]=useState("");
    const [batch,setBatch] = useState();
    var url="http://localhost:4578"

    const navigate=useNavigate()

    useEffect(()=>{
      (() => {
      
        switch (Name) {
           case 'ABHIJITH K':
               return setRegno("1P21MC001")
           case 'ANAKHA':
               return (
                setRegno("1P21MC002")
               )
               case 'ANANTH S':
               return (
                setRegno("1P21MC003")
               )
               case 'ANANTHI':
                return setRegno("1P21MC004")
            case 'ANTONY MERCY E':
                return (
                 setRegno("1P21MC005")
                )
                case 'ARVINDH KRISSHNA R S':
                return (
                 setRegno("1P21MC006")
                )
                case 'ASHOK':
                  return setRegno("1P21MC007")
              case 'DASS FERNICK S':
                  return (
                   setRegno("1P21MC008")
                  )
                  case 'DEVANTHIRAN S T':
                  return (
                   setRegno("1P21MC009")
                  )
                  case 'DHARANI P':
                   return setRegno("1P21MC010")
               case 'DINU':
                   return (
                    setRegno("1P21MC011")
                   )
                   case 'GITTO GEORGE THOMAS':
                   return (
                    setRegno("1P21MC012")
                   )
                   case 'GOKILAVANI M':
                    return setRegno("1P21MC013")
                case 'GOWRISANKAR E':
                    return (
                     setRegno("1P21MC014")
                    )
                    case 'GOWSALYA A':
                    return (
                     setRegno("1P21MC015")
                    )
                    case 'HEPSIPRIYANKA S':
                     return setRegno("1P21MC016")
                 case 'JAMUNA GAYATHRI S':
                     return (
                      setRegno("1P21MC017")
                     )
                     case 'JASPER':
                     return (
                      setRegno("1P21MC018")
                     )
                     case 'JENOFAR NISHA':
                       return setRegno("1P21MC019")
                   case 'JOY CAROLIN M':
                       return (
                        setRegno("1P21MC020")
                       )
                       case 'KARAN R':
                       return (
                        setRegno("1P21MC021")
                       )
                       case 'KARTHIKEYAN S':
                        return setRegno("1P21MC022")
                    case 'KATHIRESAN K':
                        return (
                         setRegno("1P21MC023")
                        )
                        case 'KAVIYA B':
                        return (
                         setRegno("1P21MC024")
                        )
                        case 'KUBERAN J':
                          return setRegno("1P21MC025")
                      case 'KUMAR M':
                          return (
                           setRegno("1P21MC026")
                          )
                          case 'LOGESHWARAN K':
                          return (
                           setRegno("1P21MC027")
                          )
                          case 'MAHESWARAN G':
                           return setRegno("1P21MC028")
                       case 'MANI MARAN R':
                           return (
                            setRegno("1P21MC029")
                           )
                           case 'MASANIPRAKASH M':
                           return (
                            setRegno("1P21MC030")
                           )
                           case 'MATHI KUMAR':
                             return setRegno("1P21MC031")
                         case 'MUHAMMED SIRAJ T':
                             return (
                              setRegno("1P21MC032")
                             )
                             case 'NANDHAKUMAR M':
                             return (
                              setRegno("1P21MC033")
                             )
                             case 'NITHRUJA S':
                              return setRegno("1P21MC034")
                          case 'PARVAN S':
                              return (
                               setRegno("1P21MC035")
                              )
                              case 'PAVITHRAN E':
                              return (
                               setRegno("1P21MC036")
                              )
                              case 'RAMANATHAN R':
                               return setRegno("1P21MC037")
                           case 'ROSELINE JENIFER E':
                               return (
                                setRegno("1P21MC038")
                               )
                               case 'RUKMANUL HUQ Z':
                               return (
                                setRegno("1P21MC039")
                               )
                               case 'SANJAY S':
                                return setRegno("1P21MC040")
                            case 'SANTHOSH KUMAR S':
                                return (
                                 setRegno("1P21MC041")
                                )
                                case 'SELVAKUMAR S':
                                return (
                                 setRegno("1P21MC042")
                                )
                                case 'SETHURAMAN A':
                                  return setRegno("1P21MC043")
                              case 'SHAJITH NAZEER':
                                  return (
                                   setRegno("1P21MC044")
                                  )
                                  case 'SHANMUGAVEL P':
                                  return (
                                   setRegno("1P21MC045")
                                  )
                                  case 'SIVAKUMAR P':
                                   return setRegno("1P21MC046")
                               case 'SREEJITH C':
                                   return (
                                    setRegno("1P21MC047")
                                   )
                                   case 'SUBHASHINI R':
                                   return (
                                    setRegno("1P21MC048")
                                   )
                                   case 'SWETHA  A':
                                return (
                                 setRegno("1P21MC049")
                                )
                                case 'THAMIL SELVAM M':
                                return (
                                 setRegno("1P21MC050")
                                )
                                case 'UDHAYAKUMAR S':
                                  return setRegno("1P21MC051")
                              case 'UNNIKRISHNAN G':
                                  return (
                                   setRegno("1P21MC052")
                                  )
                                  case 'UTHAYASANMUGAM P':
                                  return (
                                   setRegno("1P21MC053")
                                  )
                                  case 'VASANTHA KUMAR T':
                                   return (setRegno("1P21MC054"))
                               case 'VELAVA L':
                                   return (
                                    setRegno("1P21MC055")
                                   )
                                   case 'VIDHYA R':
                                   return (
                                    setRegno("1P21MC056")
                                   )
                                   case 'VIGNESH KUMAR S':
                                    return setRegno("1P21MC057")
                                case 'VINOTH S':
                                    return (
                                     setRegno("1P21MC058")
                                    )
                                    case 'VISHNU P':
                                    return (
                                     setRegno("1P21MC059")
                                    )
                                    case 'YOGESH D':
                                     return (setRegno("1P21MC060"))
           default:
               return (
                setRegno()
               )
        }
    
     })()
  
  
    })




    
    useEffect(()=>{
      if(! localStorage.getItem('Cashier')){
        navigate('/cashier/login')
      }
        (() => {
          switch (reason) {
             case 'Assingment':
                 return setAmount(10)
             case 'dress-code':
                 return (
                  setAmount(5)
                 )
                 case 'late-for class':
                 return (
                  setAmount(20)
                 )
                 case 'ID-Card':
                  return (
                   setAmount(5)
                  )
                  case 'Leave-Letter':
                  return (
                   setAmount(10)
                  )
             default:
                 return (
                   setAmount()
                 )
          }
      
       })()
      })
      const Addfine=async() =>{
        axios.post(url+"/api/fine/add",{
            RegNo:regno,
            amount:amount,
            reason:reason,
            Batch:batch
}).then(response=>{
  toast.success('🦄 successfully Added!!!', {
    className:"toast-success",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

}).catch(err=>{console.log(err.message);})
      }

const back=()=>{
  navigate('/cashier/finepage')
}


  return (
    <center>
<br /><br /><br /><br />
    <div className="log">
      <br /><br />
      <label>Name: </label>
      <select value={Name} onChange={(e)=>{setName(e.target.value)}} id="format">
         <option></option>
          <option value="ABHIJITH K">ABHIJITH K</option>
          <option value="ANAKHA">ANAKHA</option>
          <option value="ANANTH S">ANANTH S</option>
          <option value="ANANTHI">ANANTHI</option>
          <option value="ANTONY MERCY E">ANTONY MERCY E</option>
          <option value="ARVINDH KRISSHNA R S">ARVINDH KRISSHNA R S</option>
          <option value="ASHOK">ASHOK</option>
          <option value="DASS FERNICK S">DASS FERNICK S</option>
          <option value="DEVANTHIRAN S T">DEVANTHIRAN S T</option>
          <option value="DHARANI P">DHARANI P</option>
          <option value="DINU">DINU</option>
          <option value="GITTO GEORGE THOMAS">GITTO GEORGE THOMAS</option>
          <option value="GOKILAVANI M">GOKILAVANI M</option>
          <option value="GOWRISANKAR E">GOWRISANKAR E</option>
          <option value="GOWSALYA A">GOWSALYA A</option>
          <option value="HEPSIPRIYANKA S">HEPSIPRIYANKA S</option>
          <option value="JAMUNA GAYATHRI S">JAMUNA GAYATHRI S</option>
          <option value="JASPER">JASPER</option>
          <option value="JENOFAR NISHA">JENOFAR NISHA</option>
          <option value="JOY CAROLIN M">JOY CAROLIN M</option>
          <option value="KARAN R">KARAN R</option>
          <option value="KARTHIKEYAN S">KARTHIKEYAN S</option>
          <option value="KATHIRESAN K">KATHIRESAN K</option>
          <option value="KAVIYA B">KAVIYA B</option>
          <option value="KUBERAN J">KUBERAN J</option>
          <option value="KUMAR M">KUMAR M</option>
          <option value="LOGESHWARAN K">LOGESHWARAN K</option>
          <option value="MAHESWARAN G">MAHESWARAN G</option>
          <option value="MANI MARAN R">MANI MARAN R</option>
          <option value="MASANIPRAKASH M">MASANIPRAKASH M</option>
          <option value="MATHI KUMAR">MATHI KUMAR</option>
          <option value="MUHAMMED SIRAJ T">MUHAMMED SIRAJ T</option>
          <option value="NANDHAKUMAR M">NANDHAKUMAR M</option>
          <option value="NITHRUJA S">NITHRUJA S</option>
          <option value="PARVAN S">PARVAN S</option>
          <option value="PAVITHRAN E">PAVITHRAN E</option>
          <option value="RAMANATHAN R">RAMANATHAN R</option>
          <option value="ROSELINE JENIFER E">ROSELINE JENIFER E</option>
          <option value="RUKMANUL HUQ Z">RUKMANUL HUQ Z</option>
          <option value="SANJAY S">SANJAY S</option>
          <option value="SANTHOSH KUMAR S">SANTHOSH KUMAR S</option>
          <option value="SELVAKUMAR S">SELVAKUMAR S</option>
          <option value="SETHURAMAN A">SETHURAMAN A</option>
          <option value="SHAJITH NAZEER">SHAJITH NAZEER</option>
          <option value="SHANMUGAVEL P">SHANMUGAVEL P</option>
          <option value="SIVAKUMAR P">SIVAKUMAR P</option>
          <option value="SUBHASHINI R">SUBHASHINI R</option>
          <option value="SWETHA  A">SWETHA  A</option>
          <option value="THAMIL SELVAM M">THAMIL SELVAM M</option>
          <option value="UDHAYAKUMAR S">UDHAYAKUMAR S</option>
          <option value="UNNIKRISHNAN G">UNNIKRISHNAN G</option>
          <option value="UTHAYASANMUGAM P">UTHAYASANMUGAM P</option>
          <option value="VASANTHA KUMAR T">VASANTHA KUMAR T</option>
          <option value="VELAVA L">VELAVA L</option>
          <option value="VIDHYA R">VIDHYA R</option>
          <option value="VIGNESH KUMAR S">VIGNESH KUMAR S</option>
          <option value="VISHNU P">VISHNU P</option>
          <option value="YOGESH D">YOGESH D</option>
        </select>
      <br /><br />
        <label>RegNo:</label>
        <input type="text" name="regno" className="r" placeholder="Enter Regno" onChange={e=>setRegno(e.target.value)} value={regno}  /><br /><br />
        <label>Reason:</label>
        <select value={reason} onChange={(e)=>{setReason(e.target.value)}} id="format">
          <option></option>
          <option value="Assingment">Assignment</option>
          <option value="dress-code">dress-code</option>
          <option value="late-for class">late-for class</option>
          <option value="ID-Card">ID-Card</option>
          <option value="Leave-Letter">Leave-Letter</option>
        </select><br /><br />
        <label>Amount</label>
        <input type="number" placeholder="Enter the amount to add" className="inputBox" value={amount} onChange={(e)=>{setAmount(e.target.value)}}   />
        <br /><br />
       <label>Batch</label>
        <input type="number" placeholder="Enter the Batch" className="inputBox"  onChange={(e)=>{setBatch(e.target.value)}}   />
        <br /><br />
        <button onClick={Addfine}>Add Fine</button>
        <br /><br />
        <button onClick={back}>Back</button>
        <ToastContainer />
    </div>
    </center>
  )
}

export default Addfine