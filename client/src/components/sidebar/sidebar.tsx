import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar(props:{handleClick:Function}) {
  return (
    <div className="sidebar">
      <Link to="#" onClick={(e)=>{props.handleClick(e)}}>Donate</Link>
      <Link to="#" onClick={(e)=>{props.handleClick(e)}}>Volunteer</Link>
      <Link to="#" onClick={(e)=>{props.handleClick(e)}}>Contact</Link>
      <Link to="#" onClick={(e)=>{props.handleClick(e)}}>About</Link>
    </div>
  )
}
