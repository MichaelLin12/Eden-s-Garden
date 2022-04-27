import React from 'react'
import './event.css'
import img1 from '../../images/istockphoto-1282354411-612x612.jpg'
import {MdLocationOn} from 'react-icons/md'
import {AiFillCalendar} from 'react-icons/ai'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'

export default function Event() {
  return (
    <div className='item'>
        <div className='name'>
        Event
        </div>
        <div className='img'>
        <img src={img1} alt='event' height={208}/>
        </div>
        <div className='buttons'>
            <button disabled><MdLocationOn size={24}/></button>
            <button disabled><AiFillCalendar size={24}/></button>
            <button disabled><RiMoneyDollarCircleFill size={24}/></button>
            <button disabled><FiMoreVertical size={24}/></button>
        </div>
    </div>
  )
}
