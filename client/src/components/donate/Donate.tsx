import React,{useState} from 'react'
import './donate.css'
import img1 from '../../images/istockphoto-471500478-612x612.jpg'
import { FaDollarSign } from 'react-icons/fa'
import { FaCcVisa, FaCcDiscover, FaCcMastercard } from 'react-icons/fa'

export default function Donate() {
  const [donate, setDonate] = useState(true);
  const [amount, setAmount] = useState(0);
  const [creditCard, setCreditCard] = useState({name:'',cn:0,expDate:'mm/yyyy',sc:0});

  const handleDonation = (e:any)=>{
    if(isNaN(parseFloat(e.target.value)) || parseFloat(e.target.value)<=0) {
      setAmount(0); 
    }else{
      setAmount(Math.floor(parseFloat(e.target.value)*100)/100); 
      console.log(Math.floor(parseFloat(e.target.value)*100)/100);
    }
  }
  const card = (a:boolean)=>{
    if(a){
      return(
        <div>
          <div className='donate-2-title'>Donate</div>
          <div className='donate-2-suggestions'>
            <button onClick={()=>{setAmount(5)}}>$5</button>
            <button onClick={()=>{setAmount(10)}}>$10</button>
            <button onClick={()=>{setAmount(20)}}>$20</button>
            <button onClick={()=>{setAmount(50)}}>$50</button>
            <button onClick={()=>{setAmount(100)}}>$100</button>
          </div>
          <div className='donate-other'>
            <label className="donate-form">
              <FaDollarSign className='donate-form-icon'/>
              <input type="text" placeholder="&nbsp;" value={(amount>0)? amount:''} min={0} onChange={(e)=>{handleDonation(e)}}/>
              <span className="donate-placeholder">Other</span>
            </label>
          </div>
          <div className='donate-thank-you'>
            Thank you for contributing to our cause. At Eden's Garden, we believe that all donations, no matter how big or small, are crucial. Thus, we really appreciate your kindness and support in helping to fill empty bellies. 
          </div>
          <div className='donate-final-button'>
            <button onClick={()=>{setDonate(!donate)}}>Donate</button>
          </div>
        </div>
      )
    }
    else{
      return(
        <div>
          <div className='donate-2-title'>Pay</div>
          <div className='donate-2-accepted'>
            <FaCcVisa size={36}/>
            <FaCcDiscover size={36} style={{marginLeft:'0.5rem'}}/>
            <FaCcMastercard size={36} style={{marginLeft:'0.5rem'}}/>
          </div>
          <div className='donate-other-r'>
            <label className="donate-form-r">
              <FaDollarSign className='donate-form-icon-r'/>
              <input type="text" readOnly value={(amount>0)? amount:0} min={0} onChange={(e)=>{handleDonation(e)}}/>
              <span className="donate-placeholder-r">Payment Amount</span>
            </label>
          </div>
          <div className='donate-other-p'>
            <label className="donate-form-p">
              <input type="text" placeholder="&nbsp;" value={creditCard.name} onChange={(e)=>{
                setCreditCard({...creditCard,name:e.target.value})
                }}/>
              <span className="donate-placeholder-p">Name on Card</span>
            </label>
          </div>
          <div className='donate-other-p'>
            <label className="donate-form-p">
              <input type="text" placeholder="&nbsp;" value={(creditCard.cn>0)? creditCard.cn:''} onChange={(e)=>{
                const val:string = e.target.value;
                const c0 = val.match('^[0-9]{0,16}$');
                if(c0){
                  setCreditCard({...creditCard,cn:parseInt(val)})
                }
                else
                  setCreditCard({...creditCard})
              }}/>
              <span className="donate-placeholder-p">Card Number</span>
            </label>
          </div>
          <div className='donate-other-p'>
            <label className="donate-form-p">
              <input type="text" placeholder="&nbsp;" value={creditCard.expDate} onChange={(
                e)=>{
                  const val = e.target.value;
                  const c0 = val.match('^(([1]{1}[ m0-2]{1})|([ m0]{0,1}[ m0-9]{0,1}))/[ y0-9]{0,4}$')
                  if(c0){
                    setCreditCard({...creditCard, expDate:val})
                  }else{
                    setCreditCard({...creditCard})
                  }
                }
                }/>
              <span className="donate-placeholder-p">Exp. Date</span>
            </label>
          </div>
          <div className='donate-other-p'>
            <label className="donate-form-p">
              <input type="text" placeholder="&nbsp;" value={(creditCard.sc>0)? creditCard.sc:''} onChange={(e)=>{
                const val:string = e.target.value;
                const c0 = val.match('^[0-9]{0,3}$')
                if(c0){
                  setCreditCard({...creditCard,sc:parseInt(val)})
                }else
                  setCreditCard({...creditCard})
              }}/>
              <span className="donate-placeholder-p">Security Code</span>
            </label>
          </div>
          <div className='donate-final-button-back'>
            <button onClick={()=>{setDonate(!donate)}}>Donate</button>
          </div>
          <div className='donate-final-button-back'>
            <button onClick={()=>{setDonate(!donate)}}>Back</button>
          </div>
        </div>
      );
    }
  }

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
          {card(donate)}
        </div>
      </div>
    </div>
  )
}
