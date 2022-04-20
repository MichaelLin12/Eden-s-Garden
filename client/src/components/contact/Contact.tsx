import React from 'react'
import './contact.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import { FaTwitter,FaSnapchat,FaFacebook,FaInstagram,FaYoutube,FaLinkedin,FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
        <div className='top'>
            <Navbar/>
        </div>
        <div className='contact'>
            <div className='sub'>
                <div>
                    <span className='big'>Contact Us</span><br/>
                    <span className='medium'>We'd love to help!</span><br/>
                    <span className='small'>We love to create things with fun openminded people. Feel free to say hello.</span><br/><br/>
                    <hr/>
                </div>
            </div>
            <div className='body'>
                <div className='email'>
                    <div>
                        <label className='beam'>
                            <input type='text' placeholder='Name'/>
                        </label><br/><br/>
                        <label className='beam'>
                            <input type='email' placeholder='Email'/>
                        </label><br/><br/>
                        <label>
                            <textarea className='textarea' placeholder='Content'></textarea>
                        </label><br/>
                        <button className='send'>Send</button>
                    </div>
                </div>
                <div className='other'>
                    <ul>
                        <li><FaPhoneAlt size={14}/>   (551) 683-8600 </li>
                        <li>3330 Abner Road, Barron, WI, 54812</li>
                        <li>
                            <span><FaSnapchat size={28}/></span>
                            <span><FaTwitter size={28}/></span>
                            <span><FaInstagram size={28}/></span>
                            <span><FaFacebook size={28}/></span>
                            <span><FaYoutube size={28}/></span>
                            <span><FaLinkedin size={28}/></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
