import React from 'react'
import './market.css'
import MarketCard from './MarketCard'

export default function Market() {
  return (
    <div className='market-page'>
      <div className='market-events'>
        <input type={'text'} placeholder='Search' className='market-searchbar'/>
      </div>
      <div className='market-cards'>
        <div className='market-grid'>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
        </div>
      </div>
    </div>
  )
}
