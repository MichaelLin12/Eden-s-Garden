import React from 'react'
import './donate.css'
import img1 from '../../images/istockphoto-471500478-612x612.jpg'

export default function Donate() {
  return (
    <div className='donate'>
      <div className='donate-grid'>
        <div className='donate-grid-1'>
          <img src={img1} alt='sensitive' width={400}/>
          <div className='donate-content'>
            Ex ipsum veniam proident incididunt in pariatur commodo ipsum aliqua ea. Adipisicing est id deserunt dolor laborum mollit amet esse voluptate consectetur est labore eu ipsum. Voluptate elit sunt ullamco aliquip minim incididunt tempor mollit proident incididunt. Dolore incididunt tempor qui sint aute anim. Dolor id velit duis ad in ex eu cillum.
          </div>
        </div>
        <div className='donate-grid-2'>
          <div className='donate-2-title'>Donate</div>
          <div className='donate-2-suggestions'>
            <button>$5</button>
            <button>$10</button>
            <button>$20</button>
            <button>$50</button>
            <button>$100</button>
          </div>
        </div>
      </div>
    </div>
  )
}
