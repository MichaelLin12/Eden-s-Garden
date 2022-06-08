import React,{useState, useEffect} from 'react'
import './food.css'
import Skeleton from '@mui/material/Skeleton';


export default function Food() {

  const [img, setImg]:[any,Function] = useState(null);
  const [donation, setDonation] = useState({file: new File([],'foo.txt')})

  const onImageChange = (e:any) => {
    const [file] = e.target.files;
    setDonation({...donation,file:file})
    setImg(URL.createObjectURL(file));
  };

  const pic = ()=>{
    if(img === null){
      return(
        <div>
          <Skeleton variant='rectangular' width={300} height={177} sx={{cursor:'pointer'}}/>
          <span className='food-label'>Picture</span>
        </div>
      )
    }else{
      return(<img src={img} alt="" width={300}/>)
    }
  }

  return (
    <div className='food-canvas'>
        <div className='food-paper'>
            <div className='food-ele1'>Donate Food</div>
            <div className='food-ele2'>
              <label>
                <input type={'file'} className='food-file-input' onChange={onImageChange}></input>
                {pic()}
              </label>
            </div>
            <div className='food-ele3'>
              <input type='text' placeholder='Name'/>
              <input type='text' placeholder='Pick up Location'/>
            </div>
            <div className='food-ele4'>
              <label>
                <textarea className='food-textarea' placeholder='Description'></textarea>
              </label>
            </div>
            <button className='food-donate'>Donate</button>
        </div>
    </div>
  )
}
