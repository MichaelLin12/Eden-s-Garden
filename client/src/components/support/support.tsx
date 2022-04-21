import React, {useState} from 'react'
import './support.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/sidebar'

export default function Support() {
  const [page, setPage] = useState('Donate');
  return (
    <div>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className='support'>
        <div className='sidebar'>
          <Sidebar handleClick={(e:any)=>{console.log(e.target.value)}}/>
        </div>
        <div className='page'>
          Hello
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
