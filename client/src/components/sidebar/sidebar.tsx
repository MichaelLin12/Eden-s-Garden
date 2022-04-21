import React from 'react'
import './sidebar.css'

export default function Sidebar(props:{handleClick:Function}) {
  return (
    <div className='items'>
        <button value={'Donate'} onClick={(e)=>{props.handleClick(e)}}>Donate</button>
        <button value={'Volunteer'} onClick={(e)=>{props.handleClick(e)}}>Volunteer</button>
        <button value={'Internship'} onClick={(e)=>{props.handleClick(e)}}>Apply for Internship</button>
        <button value={'Job'} onClick={(e)=>{props.handleClick(e)}}>Apply for Job</button>
    </div>
  )
}
