import React, {useState} from 'react'
import './support.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/sidebar'

export default function Support() {
  const [page, setPage]:[String,Function] = useState('Donate');

  const onClick:Function = (e:any)=>{
    console.log(e.target.text,typeof(e));
    if(e.target.text === 'Donate'){
      setPage('Donate')
    }else if(e.target.text === 'Volunteer'){
      setPage('Volunteer');
    }else if(e.target.text === 'Apply for Internship'){
      setPage('Internship')
    }else if(e.target.text === 'Apply for Job'){
      setPage('Job')
    }
  }

  return (
    <div>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className='support'>
        <div className='ele1'>
          <Sidebar handleClick={(e:any)=>{onClick(e)}}/>
        </div>
        <div className='ele2'>
          Hello
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
