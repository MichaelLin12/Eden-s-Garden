import React from 'react'
import './volunteer.css';
import img1 from '../../images/istockphoto-1202957601-612x612.jpg'

export default function Volunteer() {
  return (
    <div className='volunteer-canvas'>
      <div className='volunteer-grid'>
        <div className='volunteer-grid-1'>
          <img src={img1} alt='sensitive' width={400}/>
          <div className='volunteer-content'>
            Irure laboris incididunt ullamco minim pariatur ea ea. Ea ex et dolore excepteur id pariatur anim laborum proident. Non ut nulla esse aliqua sit adipisicing ea. Reprehenderit consectetur nostrud dolor aliquip ullamco dolor aliquip. Incididunt consectetur id labore duis. Labore elit Lorem sit do cupidatat enim occaecat Lorem velit consectetur labore fugiat reprehenderit. Deserunt quis dolor labore elit sit laborum.
          </div>
        </div>
        <div className='volunteer-grid-2'>
          <div className='volunteer-2-title'>Volunteer</div>
          <div className='volunteer-other'>
            <label className="volunteer-form">
              <input type="text" placeholder="&nbsp;"/>
              <span className="volunteer-placeholder">Name</span>
            </label>
          </div>
          <div className='volunteer-other'>
            <label className="volunteer-form">
              <input type="email" placeholder="&nbsp;"/>
              <span className="volunteer-placeholder">Email</span>
            </label>
          </div>
          <div className='volunteer-other'>
            <label className="volunteer-form">
              <input type="text" placeholder="&nbsp;"/>
              <span className="volunteer-placeholder">Location</span>
            </label>
          </div>
          <div className='volunteer-label-2'>When are you avaliable?</div>
          <div className='volunteer-other'>
            <label className="volunteer-form">
              <input type="date" placeholder="&nbsp;"/>
              <span className="volunteer-placeholder">Start Date</span>
            </label>
          </div>
          <div className='volunteer-other'>
            <label className="volunteer-form">
              <input type="date" placeholder="&nbsp;"/>
              <span className="volunteer-placeholder">End Date</span>
            </label>
          </div>
          <div className='volunteer-final-button'>
            <button>Volunteer</button>
          </div>
        </div>
      </div>
    </div>
  )
}
