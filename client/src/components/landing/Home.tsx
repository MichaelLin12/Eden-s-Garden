import React from 'react'
import Navbar from '../navbar/navbar'
import './home.css'
import Footer from '../footer/Footer'
import Paper from '@mui/material/Paper'
import img1 from '../../images/istockphoto-1194308469-612x612.jpg'
import img2 from '../../images/istockphoto-1200727597-612x612.jpg'
import img3 from '../../images/istockphoto-1202238217-612x612.jpg'
import img4 from '../../images/istockphoto-1202957601-612x612.jpg'
import img5 from '../../images/istockphoto-621904294-612x612.jpg'


export default function Home(props:{supportPage:string, change:any}) {
  return (
    <div>
      <div className='landing'>
          <div className='nav'>
              <Navbar/>
          </div>
          <div className='space'>
            <div className='first'>
              <div className='first-first'>
                <div className='title'>
                  <div className='title1'> No One Deserves To Go Hungry</div>
                  <div className='subtitle'> Unfortunately more than 38 million Americans go hungry<br/> annually pre-Covid. With Covid that number has <br/>skyrocketed to 45 million.</div>
                  <div className='calltoaction'>
                    <button className='action'>Support the Cause</button>
                  </div>
                </div>
              </div>
              <div className='first-second'></div>
            </div>
            <div className='second'>
              <Paper elevation={5} sx={{height:'fit-content',width:'fit-content',backgroundColor:'#223b05',padding:'0.5rem',borderRadius:'8px',display:'grid',gridTemplateColumns:'auto auto', gap:'0.2rem'}}>
                <div><img src={img1} alt='charity' className='rounded' height={125}/></div>
                <div><img src={img2} alt='charity' className='rounded' height={125}/></div>
                <div className='twice'><img src={img3} alt='charity' className='rounded' height={250}/></div>
                <div><img src={img4} alt='charity' className='rounded' height={125}/></div>
                <div><img src={img5} alt='charity' className='rounded' height={125}/></div>
              </Paper>
            </div>
          </div>
      </div>
      <div>
        <Footer supportPage={props.supportPage} change={props.change}/>
      </div>
    </div>
  )
}
