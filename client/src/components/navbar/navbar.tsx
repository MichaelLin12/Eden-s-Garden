import React,{useState} from 'react'
import './navbar.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faBars} from "@fortawesome/free-solid-svg-icons"
import logo from '../../images/EdensGarden.png'
import { IconButton, Popper, Box } from '@mui/material';


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: { currentTarget: any; }) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <header className='header'>
      <span className='logo'><img src={logo} alt="Eden's Garden" height={50} width={50}/></span>
      <div className='hamburger'>
        <IconButton aria-label='login' onClick={handleClick} disableFocusRipple disableRipple>
          <FontAwesomeIcon icon={faBars}/>
        </IconButton>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <div className='menu'>
              <Link to='/store'>Store</Link>
              <Link to='/learn'>Learn</Link>
              <Link to='/events'>Events</Link>
              <Link to='/support'>Support Us</Link>
              <Link to='/contact'>Contact Us</Link>
              <Link to='/login'>Login</Link>
            </div>
          </Box>
        </Popper>
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
