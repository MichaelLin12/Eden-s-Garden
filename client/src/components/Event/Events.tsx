import React,{useState} from 'react'
import './event.css'
import img1 from '../../images/istockphoto-1282354411-612x612.jpg'
import {MdLocationOn} from 'react-icons/md'
import {AiFillCalendar} from 'react-icons/ai'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import Modal from '../Modal/Modal'
import { useNavigate } from "react-router-dom";

export default function Event() {
  const [showInfoLocation, setShowInfoLocation] = useState(false);
  const [showInfoCalendar, setShowInfoCalendar] = useState(false);
  const [showInfoMore, setShowInfoMore] = useState(false);
  let navigate = useNavigate();
  return (
    <div className='item'>
      <div className='name'>
        Event
      </div>
      <div className='img'>
        <img src={img1} alt='event' height={208}/>
      </div>
      <div className='buttons'>
        <div className='buttons-div'>
          <div className='info-box-wrapper'>
            <button className='event-modal' onClick={() => {setShowInfoLocation(true)}}><MdLocationOn size={28}/></button>
            <Modal show={showInfoLocation} onClickOutside={() => {setShowInfoLocation(false)}} message={'location'} top={'27px'} background='#ffffff'/>
          </div>
        </div>
        <div className='buttons-div'>
          <div className='info-box-wrapper'>
            <button className='event-modal' onClick={() => {setShowInfoCalendar(true)}}><AiFillCalendar size={28}/></button>
            <Modal show={showInfoCalendar} onClickOutside={() => {setShowInfoCalendar(false)}} message={'calendar'} top={'34px'} background='#ffffff'/>
          </div>
        </div>
        <div className='buttons-div'>
          <div className='info-box-wrapper'>
            <button className='event-modal' onClick={() => {navigate('/support')}}><RiMoneyDollarCircleFill size={28}/></button>
          </div>
        </div>
        <div className='buttons-div'>
          <div className='info-box-wrapper'>
            <button className='event-modal' onClick={() => {setShowInfoMore(true)}}><FiMoreVertical size={28}/></button>
            <Modal show={showInfoMore} onClickOutside={() => {setShowInfoMore(false)}} message={'more'} top={'34px'} background='#ffffff'/>
          </div>
        </div>
      </div>
    </div>
  )
}
