import React from 'react'
import './market.css'
import img1 from '../../images/istockphoto-1282354411-612x612.jpg'

export default function MarketCard() {
    return (
        <div className='market-card'>
            <div className='market-name'>
                Food
            </div>
            <div className='market-img'>
                <img src={img1} alt='event' height={150}/>
            </div>
            <div className='market-description'>
                <span>About</span>Deserunt est consectetur Lorem cupidatat officia laboris commodo pariatur ullamco non laboris. Commodo velit enim adipisicing nostrud aliqua incididunt. 
            </div>
            <div className='market-delivery'>
                <label className='market-form-control'>
                    <input type={'radio'} name='radio'/>
                    <span className='market-words'></span>
                    <span>Get it July 12</span>
                </label>
                <span className='market-delivery-space'></span>
                <label className='market-form-control'>
                    <input type={'radio'} name='radio'/>
                    <span className='market-words'></span>
                    <span>Pick up</span>
                </label>
            </div>
            <div className='market-order'><button>Order</button></div>
        </div>
    )
}
