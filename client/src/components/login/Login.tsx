import React from 'react'
import './login.css'
import { Paper } from '@mui/material'

export default function Login() {
  return (
    <div className='display'>
      <Paper elevation={3} sx={{height:'28rem',width:'45rem',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
        <div className='item1'>
          <div className='title-l'>
              Welcome Back
          </div>
          <div className='input-l'>
            <label className="custom">
                <input type="email" placeholder="&nbsp;"/>
                <span className="label">Email</span>
            </label>
            <div className='empty'/>
            <label className="custom">
                <input type="password" placeholder="&nbsp;"/>
                <span className="label">Password</span>
            </label><br/>
            <div className='empty2'>
              <button className='initialize'>Login</button>
            </div>
          </div>
        </div>
        <div className='item2'>
          <div className='title-s'>
            Hello
          </div>
          <div className='input-s'>
            <label className="custom">
                <input type="email" placeholder="&nbsp;"/>
                <span className="label">Email</span>
            </label>
            <div className='empty3'/>
            <label className="custom">
                <input type="password" placeholder="&nbsp;"/>
                <span className="label">Password</span>
            </label>
            <div className='empty3'/>
            <label className="custom">
                <input type="password" placeholder="&nbsp;"/>
                <span className="label">Confirm Password</span>
            </label><br/>
            <div className='empty4'>
              <button className='initialize'>Login</button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}
