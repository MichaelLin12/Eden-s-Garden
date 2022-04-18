import React,{useState} from 'react'
import './navbar.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
import logo from '../../images/EdensGarden.png'
import { IconButton, Popper, Box } from '@mui/material';
import { FaUserCircle} from 'react-icons/fa';


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
        <IconButton aria-label='login' onClick={handleClick} disableFocusRipple disableRipple sx={{color:'white'}}>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <div className='menu'>
              <Link to='/store' style={{textDecoration:'none',color:'#6290c8'}}>Store</Link>
              <Link to='/learn' style={{textDecoration:'none',color:'#6290c8'}}>Learn</Link>
              <Link to='/events' style={{textDecoration:'none',color:'#6290c8'}}>Events</Link>
              <Link to='/support' style={{textDecoration:'none',color:'#6290c8'}}>Support Us</Link>
              <Link to='/contact' style={{textDecoration:'none',color:'#6290c8'}}>Contact Us</Link>
              <Link to='/login' style={{textDecoration:'none',color:'#6290c8'}}>Login</Link>
            </div>
          </Box>
        </Popper>
      </div>
      <nav className='navbar'>
        <ul>
          <li><Link to='/store' style={{textDecoration:'none',color:'#ffffff'}}>Store</Link></li>
          <li><Link to='/learn' style={{textDecoration:'none',color:'#ffffff'}}>Learn</Link></li>
          <li><Link to='/events' style={{textDecoration:'none',color:'#ffffff'}}>Events</Link></li>
          <li><Link to='/support' style={{textDecoration:'none',color:'#ffffff'}}>Suppport Us</Link></li>
          <li><Link to='/contact' style={{textDecoration:'none',color:'#ffffff'}}>Contact Us</Link></li>
          <li><Link to='/login'><button className='login'><FaUserCircle size={20}/></button></Link></li>
        </ul>
      </nav>
    </header>
  )
}
