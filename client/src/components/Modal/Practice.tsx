import React,{useState} from 'react'
import Modal from './Modal'
import './modal.css'

export default function Practice(props:any) {
  let [showInfo1, setShowInfo1] = useState(false);
  return (
  <div className="container">
    <div className="info-box-wrapper">
      <button onClick={() => {setShowInfo1(true)}}>Show InfoBox Functional</button>
      <Modal show={showInfo1} onClickOutside={() => {setShowInfo1(false)}} message="Click outside to close this"/>
    </div>
  </div>
  )
}
