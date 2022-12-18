import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
function Nav() {

  return (
    <div>
        {/* <h1>dknkdcnhk</h1> */}

    <ul className="nav-ul">
    <li><Link to="/Student/Register">Student-Register</Link></li>
    <li><Link to="/login">Student-Login</Link></li>
    </ul>

    </div>
  )
}

export default Nav