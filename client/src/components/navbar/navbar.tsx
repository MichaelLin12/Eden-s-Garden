import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-solid-svg-icons"
import logo from '../../images/EdensGarden.png'


export default function Navbar() {
  return (
    <header className='header'>
      <span className='logo'><img src={logo} alt="Eden's Garden" height={50} width={50}/></span>
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
