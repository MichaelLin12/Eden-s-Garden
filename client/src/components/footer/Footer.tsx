import React from 'react'
import './footer.css'
import { FaTwitter,FaSnapchat,FaFacebook,FaInstagram,FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='links'>
            <div className='list-one'>
                <div><Link to={'/home'} style={{textDecoration:'none',color:'#ffffff'}}>Donate</Link></div>
                <div><Link to={'/home'} style={{textDecoration:'none',color:'#ffffff'}}>Events</Link></div>
                <div><Link to={'/home'} style={{textDecoration:'none',color:'#ffffff'}}>Our Story</Link></div>
                <div><Link to={'/home'} style={{textDecoration:'none',color:'#ffffff'}}>Mission</Link></div>
            </div>
            <div className='list-two'>
                <div><Link to={'/home'} style={{textDecoration:'none',color:'#ffffff'}}>Learn More</Link></div>
                <div><Link to={'/home'} style={{textDecoration:'none',color:'#ffffff'}}>Volunteer</Link></div>
                <div><Link to={'/home'} style={{textDecoration:'none',color:'#ffffff'}}>Intern</Link></div>
                <div><Link to={'/home'} style={{textDecoration:'none',color:'#ffffff'}}>Apply for Job</Link></div>
            </div>
            <div className='list-three'>
                <h3>Stay up to date</h3>
                <div className='form'>
                    <input type={'email'} required/>
                    <label>Email</label>
                </div>
                <button className='subscribe'>Subscribe</button>
            </div>
        </div>
        <div className='socials'>
            <div className='images'>
                <span><FaSnapchat size={28}/></span>
                <span><FaTwitter size={28}/></span>
                <span><FaInstagram size={28}/></span>
                <span><FaFacebook size={28}/></span>
                <span><FaYoutube size={28}/></span>
            </div>
        </div>
    </div>
  )
}
