import { Skeleton } from '@mui/material'
import React from 'react'
import './history.css'

export default function History() {
  const cardBuy = ()=>{
    return(
      <div className='history-card'>
        <div className='history-card-1'>
          <div>
            <Skeleton variant='rectangular' width={225} height={133}/>
          </div>
        </div>
        <div className='history-card-2'>
          <div className='history-card-2-name'>
            Name
          </div>
          <div className='history-card-2-description'>
            Description
          </div>
        </div>
        <div className='history-card-3'>
          <div>Bought on May 3rd 1988</div>
          <div>Donated by [company]</div>
        </div>
      </div>
    )
  }

  const cardDonate = ()=>{
    return(
      <div className='history-card'>
        <div className='history-card-1'>
          <div>
            <Skeleton variant='rectangular' width={225} height={133}/>
          </div>
        </div>
        <div className='history-card-2'>
          <div className='history-card-2-name'>
            Name
          </div>
          <div className='history-card-2-description'>
            Description
          </div>
        </div>
        <div className='history-card-3'>
          <div>Bought on May 3rd 1988 by [company]</div>
        </div>
      </div>
    )
  }

  return (
    <div className='history-page'>
      {cardBuy()}
      {cardDonate()}
    </div>
  )
}
