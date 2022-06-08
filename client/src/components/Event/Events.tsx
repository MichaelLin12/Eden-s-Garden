import React,{useState} from 'react'
import './event.css'
import img1 from '../../images/istockphoto-1282354411-612x612.jpg'
import {MdLocationOn} from 'react-icons/md'
import {AiFillCalendar} from 'react-icons/ai'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import Modal from '../Modal/Modal'

export default function Event() {
  const [showInfoLocation, setShowInfoLocation] = useState(false);
  const [showInfoCalendar, setShowInfoCalendar] = useState(false);
  const [showInfoDonation, setShowInfoDonation] = useState(false);
  const [showInfoMore, setShowInfoMore] = useState(false);

  return (
    <div className='item'>
        <div className='name'>
        Event
        </div>
        <div className='img'>
        <img src={img1} alt='event' height={208}/>
        </div>
        <div className='buttons'>
          <div>
            <div className='info-box-wrapper'>
              <button className='event-modal' onClick={() => {setShowInfoLocation(true)}}><MdLocationOn size={28}/></button>
              <Modal show={showInfoLocation} onClickOutside={() => {setShowInfoLocation(false)}} message="Click outside to close this"/>
            </div>
          </div>
          <div className='info-box-wrapper'>
            <button className='event-modal' onClick={() => {setShowInfoCalendar(true)}}><AiFillCalendar size={28}/></button>
            <Modal show={showInfoCalendar} onClickOutside={() => {setShowInfoCalendar(false)}} message="Click outside to close this"/>
          </div>
          <div className='info-box-wrapper'>
            <button className='event-modal' onClick={() => {setShowInfoDonation(true)}}><RiMoneyDollarCircleFill size={28}/></button>
            <Modal show={showInfoDonation} onClickOutside={() => {setShowInfoDonation(false)}} message="Click outside to close this"/>
          </div>
          <div className='info-box-wrapper'>
            <button className='event-modal' onClick={() => {setShowInfoMore(true)}}><FiMoreVertical size={28}/></button>
            <Modal show={showInfoMore} onClickOutside={() => {setShowInfoMore(false)}} message="Click outside to close this"/>
          </div>
        </div>
    </div>
  )
}
