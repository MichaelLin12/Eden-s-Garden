import React, {useState,useEffect} from 'react'
import './support.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/sidebar'
import Donate from '../donate/Donate'
import Volunteer from '../volunteer/Volunteer'
import Intern from '../intern/Intern'
import Job from '../job/Job'

export default function Support(props:{supportPage:string, change:any}) {
  const [page, setPage]:[String,Function] = useState(props.supportPage);

  const onClick:Function = (e:any)=>{
    console.log(e.target.text,typeof(e));
    if(e.target.text === 'Donate'){
      setPage('Donate')
    }else if(e.target.text === 'Volunteer'){
      setPage('Volunteer');
    }else if(e.target.text === 'Apply for Internship'){
      setPage('Internship')
    }else if(e.target.text === 'Apply for Job'){
      setPage('Job')
    }
  }

  const view = ()=>{
    if(page === 'Donate'){
      return <Donate/>
    }else if(page === 'Volunteer'){
      return <Volunteer/>
    }else if(page === 'Internship'){
      return <Intern/>
    }else if(page === 'Job'){
      return <Job/>
    }
  }

  return (
    <div>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className='support'>
        <div className='ele1'>
          <Sidebar handleClick={(e:any)=>{onClick(e)}} buttons={['Donate','Volunteer','Apply for Internship','Apply for Job']}/>
        </div>
        <div className='ele2'>
          {view()}
        </div>
      </div>
      <div>
        <Footer supportPage={props.supportPage} change={props.change}/>
      </div>
    </div>
  )
}
