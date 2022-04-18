import React from 'react'
import Navbar from '../navbar/navbar'
import './home.css'
import Footer from '../footer/Footer'

export default function Home() {
  return (
    <div>
      <div className='landing'>
          <div className='nav'>
              <Navbar/>
          </div>
          <div className='space'>
              Hello<br/>
              Hello<br/>
              Hello<br/>
          </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
