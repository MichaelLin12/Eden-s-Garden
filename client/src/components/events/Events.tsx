import React,{useState} from 'react'
import './events.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import img1 from '../../images/istockphoto-1282354411-612x612.jpg'
import {MdLocationOn} from 'react-icons/md'
import {AiFillCalendar} from 'react-icons/ai'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import Event from '../Event/Events'
import Modal from '../Modal/Modal'

export default function Events() {
  const [showInfo,setShowInfo] = useState(false)
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='events'>
        <input type={'text'} placeholder='Search' className='searchbar'/>
      </div>
      <div className='space1'/>
      <div className='cards'>
        <div className='grid'>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
          <Event/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
