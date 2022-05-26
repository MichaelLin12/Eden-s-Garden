import React,{useState} from 'react'
import './store.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/sidebar'
import Food from '../Food/Food'
import Market from '../Market/Market'
import Cart from '../Cart/Cart'
import History from '../History/History'

export default function Store() {

  const [page, setPage]:[String,Function] = useState('Donate');

  const onClick:Function = (e:any)=>{
    console.log(e.target.text,typeof(e));
    if(e.target.text === 'Donate'){
      setPage('Donate')
    }else if(e.target.text === 'Market'){
      setPage('Market');
    }else if(e.target.text === 'History'){
      setPage('History')
    }else if(e.target.text === 'Cart'){
      setPage('Cart')
    }
  }

  const view = ()=>{
    if(page === 'Donate'){
      return <Food/>
    }else if(page === 'Market'){
      return <Market/>
    }else if(page === 'History'){
      return <History/>
    }else if(page === 'Cart'){
      return <Cart/>
    }
  }

  return (
    <div>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className='store'>
        <div className='ele1'>
        <Sidebar handleClick={(e:any)=>{onClick(e)}} buttons={['Donate','Market','History','Cart']}/>
        </div>
        <div className='ele2'>
          {view()}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
