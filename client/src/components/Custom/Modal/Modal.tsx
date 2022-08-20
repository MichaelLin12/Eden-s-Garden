import React,{useRef,useEffect} from 'react'
import Calendar from 'react-calendar'
import './calendar.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ModalInfoBox = styled.div`
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 8px;
    position: absolute;
    width: fit-content;
    left: 0px;
`
const ModalMore = styled.div`
    display: flex;
    flex-direction: column;
    width: 5rem;
`

export default function Modal(props:any) {
    const ref:{current:any} = useRef(null);
    const { onClickOutside } = props;
    
        useEffect(() => {
        const handleClickOutside = (event:Event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                //console.log('Hello World',ref.current,event)
            onClickOutside();
            }
        };
        //console.log('Hello World2',ref.current,typeof(ref.current))
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
        }, [ onClickOutside ]);


    const info = ()=>{
        if(props.message === 'location'){
            return(
                <div>
                    Location
                </div>
            )
        }else if(props.message === 'calendar'){
            return(
                <div>
                    <div>
                        <Calendar value={new Date()}/>
                    </div>
                </div>
            )
        }else if(props.message === 'more'){
            return(
                <ModalMore>
                    <div><Link to='/' style={{'textDecoration':'none','color':'#223b05'}}>Volunteer</Link></div>
                    <div><Link to='/' style={{'textDecoration':'none','color':'#223b05'}}>Learn More</Link></div>
                    <div><Link to='/' style={{'textDecoration':'none','color':'#223b05'}}>Spread the Word</Link></div>
                </ModalMore>
            )
        }
    }
    if(!props.show)
        return null;

    return (
        <ModalInfoBox ref={ref} className='info-box' style={{'backgroundColor':props.background,'top':props.top}}>
            {info()}
        </ModalInfoBox>
    )
}
