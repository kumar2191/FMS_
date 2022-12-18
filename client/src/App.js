import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import StudentLogin from './components/Students/Login';
import StudentRegister from './components/Students/Register';
import StudentUpdate from './components/Students/StudentUpdate'
import Password from './components/Students/Changepassword'
import Profile from './components/Students/Profile'
import Stfinedata from './components/Students/fineList'
import Home from './homePage'
import Login from './login'
import CashierLog from './components/Cashier/cashierLogin'
import Addfine from './components/Cashier/Addfine'
import Finedata from './components/Cashier/NewFineData'
import FineUpdate from './components/Cashier/FineUpdate'
import FinePage from './components/Cashier/FinePage'

import HOD from './components/hod/Login.js'
import HodProfile from './components/hod/Hod.js'
import CashierRegisteration from './components/hod/CashierRegister'
import BulkFine from './components/hod/BulkFine' 
import HodFineData from './components/hod/FineData'
import Status from './components/hod/Status'

function App() {
  return (
    <div className="App">
      {/* <h1>skxnkcnjn</h1> */}
     <BrowserRouter>
   
     <Routes>
     <Route path="/" element={<Home />}  />
      <Route path="/Student/Register" element={<StudentRegister />}  />
      <Route path="/login" element={<Login />}  />
      
      <Route path="/Student/login" element={<StudentLogin />}  />
      <Route path="/Student/Update" element={<StudentUpdate />}  />
      <Route path="/Student/changepassword" element={<Password />}  />
      <Route path="/Student/profile" element={<Profile />}  />
      <Route path="/Student/fine/data" element={<Stfinedata />}  />
      

      <Route path="/cashier/login" element={<CashierLog />}  />
      <Route path="/cashier/Addfine" element={<Addfine />}  />
      <Route path="/cashier/data" element={<Finedata />}  />
      <Route path="/cashier/update/:id" element={<FineUpdate />}  />
      <Route path="/cashier/finepage" element={<FinePage />}  />
    


    <Route path="/Hod/Login" element={<HOD />} />
    <Route path="/Hod/Profile" element={<HodProfile />} />
    <Route path="/Hod/CashierRegisteration" element={<CashierRegisteration />} />
    <Route path="/Hod/finedata" element={<HodFineData />} />
    <Route path="/Hod/addAll" element={<BulkFine />} />
    <Route path="/Hod/Status" element={<Status />} />
    



     </Routes>
     </BrowserRouter>
     {/* <p>&#169;KUMAR&MASANI (MCA)</p> */}
    </div>
  );
}

export default App;
