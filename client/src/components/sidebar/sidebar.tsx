import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar(props:{handleClick:Function,buttons:string[]}) {

  const links = props.buttons.map(element => {
    return(<Link to="#" onClick={(e)=>{props.handleClick(e)}}>{element}</Link>)
  });

  return (
    <div className="sidebar">
      {links}
    </div>
  )
}
