import React from 'react'
import './contact.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'

export default function Contact() {
  return (
    <div>
        <div className='top'>
            <Navbar/>
        </div>
        <div className='contact'>
            <div className='sub'>
                <div>
                    <span>Contact Us</span><br/>
                    <span>We'd love to help!</span><br/>
                    <span>We love to create things with fun open minded people. Feel free to say hello.</span><br/><br/>
                    <hr/>
                </div>
            </div>
            <div className='body'>
                <div className='email'>
                    <div>
                        Hello
                    </div>
                </div>
                <div className='other'>
                    Other Info
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
