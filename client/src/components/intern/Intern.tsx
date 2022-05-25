import React,{useState} from 'react'
import './intern.css'
import img1 from '../../images/istockphoto-1202957601-612x612.jpg'

export default function Intern() {
  return (
    <div className='intern-canvas'>
      <div className='intern-grid'>
        <div className='intern-grid-1'>
          <img src={img1} alt='sensitive' width={400}/>
          <div className='intern-content'>
            Irure laboris incididunt ullamco minim pariatur ea ea. Ea ex et dolore excepteur id pariatur anim laborum proident. Non ut nulla esse aliqua sit adipisicing ea. Reprehenderit consectetur nostrud dolor aliquip ullamco dolor aliquip. Incididunt consectetur id labore duis. Labore elit Lorem sit do cupidatat enim occaecat Lorem velit consectetur labore fugiat reprehenderit. Deserunt quis dolor labore elit sit laborum.
          </div>
        </div>
        <div className='intern-grid-2'>
          <div className='intern-2-title'>Internship</div>
          <div className='intern-other'>
            <label className="intern-form">
              <input type="text" placeholder="&nbsp;"/>
              <span className="intern-placeholder">Name</span>
            </label>
          </div>
          <div className='intern-other'>
            <label className="intern-form">
              <input type="email" placeholder="&nbsp;"/>
              <span className="intern-placeholder">Email</span>
            </label>
          </div>
          <div className='intern-other'>
            <label className="intern-form">
              <input type="text" placeholder="&nbsp;"/>
              <span className="intern-placeholder">Location</span>
            </label>
          </div>
          <div className='intern-other'>
            <label className="intern-form">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="&nbsp;"/>
              <span className="intern-placeholder">Phone Number</span>
            </label>
          </div>
          <div className='intern-file'>
            <label>
              <input type={'file'} className='intern-file-input' onChange={(e)=>{
                let files = e.target.files;
                if(files?.length !== 0){
                  let rfile = files![0].name;
                  console.log(rfile)
                }
                }}/>
              <span className='input-file-label'>Resume</span>
            </label>
          </div>
          <div className='intern-file intern-top'>
            <label>
              <input type={'file'} className='intern-file-input' onChange={(e)=>{
                let files = e.target.files;
                if(files?.length !== 0){
                  let rfile = files![0].name;
                  console.log(rfile)
                }
                }}/>
              <span className='input-file-label'>Cover Letter</span>
            </label>
          </div>
          <div className='intern-next'>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
