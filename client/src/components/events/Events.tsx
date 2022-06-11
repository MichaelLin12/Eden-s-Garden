import React,{useState} from 'react'
import './events.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import Event from '../Event/Events'

export default function Events(props:{supportPage:string,change:any}) {
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
        <Footer supportPage={props.supportPage} change={props.change}/>
      </div>
    </div>
  )
}
