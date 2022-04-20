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
            Hello
          </div>
        </div>
        <div className='item2'>
          <div className='title-s'>
            Hello
          </div>
          <div className='input-s'>
            Time is ass
          </div>
        </div>
      </Paper>
    </div>
  )
}
