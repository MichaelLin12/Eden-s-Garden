import React,{useState} from 'react'
import './cart.css'
import Skeleton from '@mui/material/Skeleton';

export default function Cart() {

  const [itemQty,setItemQty] = useState({'1':0,'2':1,'3':5})

  const increaseValue = (key:string)=>{
    let value:number = itemQty[key as keyof typeof itemQty]
    value++;
    setItemQty({...itemQty,[key]:value})
    console.log(value)
  }

  const decreaseValue = (key:string)=>{
    let value:number = itemQty[key as keyof typeof itemQty]
    value = (value>0)? value-1:0
    setItemQty({...itemQty,[key]:value})
    console.log(value)
  }

  const card = (key:string)=>{
    let value = itemQty[key as keyof typeof itemQty]
    return(
      <div className='cart-card' key={key} id={key}>
      <div className='cart-card-1'>
        <div>
          <Skeleton variant='rectangular' width={225} height={133}/>
        </div>
      </div>
      <div className='cart-card-2'>
        <div className='cart-card-2-name'>
          Name
        </div>
        <div className='cart-card-2-description'>
          Description
        </div>
      </div>
      <div className='cart-card-3'>
        <div className='cart-card-content'>
          <form>
            <div className="cart-value-button" id="decrease" onClick={()=>{decreaseValue(key)}}>-</div>
            <input type="number" id="number" value={value} readOnly/>
            <div className="cart-value-button" id="increase" onClick={()=>{increaseValue(key)}} >+</div>
          </form>
          <div className='cart-delete'>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
  }


  return (
    <div className='cart-page'>
      {card('1')}
      {card('2')}
      {card('3')}
      <div className='cart-buy'>
        <button>Buy</button>
      </div>
    </div>
  )
}
