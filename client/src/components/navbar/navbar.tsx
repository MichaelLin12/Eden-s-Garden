import React,{useState} from 'react'
import './navbar.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faBars} from "@fortawesome/free-solid-svg-icons"
import logo from '../../images/EdensGarden.png'
import {Popover} from '@mui/material';


export default function Navbar() {
  const [displayHamburger, setDisplayHamburger] = useState(false);
  return (
    <header className='header'>
      <span className='logo'><img src={logo} alt="Eden's Garden" height={50} width={50}/></span>
      <div className='parent'>
        <button className='hamburger' onClick={()=>{displayHamburger? setDisplayHamburger(false): setDisplayHamburger(true)}}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
        <div className='menu' style={{display: displayHamburger? 'block':'none'}}>
          Hello
        </div>
      </div>
      <nav className='navbar'>
        <ul>
          <li><Link to='/store'>Store</Link></li>
          <li><Link to='/learn'>Learn</Link></li>
          <li><Link to='/events'>Events</Link></li>
          <li><Link to='/support'>Suppport Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/login'><button className='login'><FontAwesomeIcon icon={faUser} size='lg' /></button></Link></li>
        </ul>
      </nav>
    </header>
  )
}
