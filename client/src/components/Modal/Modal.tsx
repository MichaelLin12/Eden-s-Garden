import React,{useRef,useEffect} from 'react'

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

    if(!props.show)
        return null;

    return (
        <div ref={ref} className='info-box' style={{backgroundColor:'#6290c8',top:'28px',left:'24px'}}>
            {props.message}
        </div>
    )
}
