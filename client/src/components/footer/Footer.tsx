import React from 'react'
import './footer.css'
import { FaTwitter,FaSnapchat,FaFacebook,FaInstagram,FaYoutube,FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='footer'>
        <div className='links'>
            <div className='list-one'>
                <div><a href={'/support'} style={{textDecoration:'none',color:'#ffffff'}}>Donate</a></div>
                <div><a href={'/events'} style={{textDecoration:'none',color:'#ffffff'}}>Events</a></div>
                <div><a href={'/learn'} style={{textDecoration:'none',color:'#ffffff'}}>Our Story</a></div>
                <div><a href={'/learn'} style={{textDecoration:'none',color:'#ffffff'}}>Our Mission</a></div>
            </div>
            <div className='list-two'>
                <div><a href={'/learn'} style={{textDecoration:'none',color:'#ffffff'}}>Our Work</a></div>
                <div><a href={'/support'} style={{textDecoration:'none',color:'#ffffff'}}>Volunteer</a></div>
                <div><a href={'/support'} style={{textDecoration:'none',color:'#ffffff'}}>Intern</a></div>
                <div><a href={'/support'} style={{textDecoration:'none',color:'#ffffff'}}>Apply for Job</a></div>
            </div>
            <div className='list-three'>
            <h3>Stay up to date</h3>
            <label className="form">
                <input type="email" placeholder="&nbsp;"/>
                <span className="placeholder">Email</span>
            </label><br/>
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
                <span><FaLinkedin size={28}/></span>
            </div>
        </div>
    </div>
  )
}
