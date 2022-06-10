import React,{useRef,useEffect} from 'react'
import Calendar from 'react-calendar'
import './calendar.css'

export default function Modal(props:any) {
    const ref:{current:any} = useRef(null);
    const { onClickOutside } = props;
    
        useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log('Hello World',ref.current,event)
            onClickOutside();
            }
        };
        console.log('Hello World2',ref.current,typeof(ref.current))
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
                    <div className='modal-calendar'>
                        <Calendar value={new Date()}/>
                    </div>
                </div>
            )
        }else if(props.message === 'more'){
            return(
                <div className='model-more'>
                    <div><a href='#'>Volunteer</a></div>
                    <div><a href='#'>Learn More</a></div>
                    <div><a href='#'>Spread the Word</a></div>
                </div>
            )
        }
    }
    if(!props.show)
        return null;

    return (
        <div ref={ref} className='info-box' style={{backgroundColor:props.background,top:props.top,left:'0px'}}>
            {info()}
        </div>
    )
}
