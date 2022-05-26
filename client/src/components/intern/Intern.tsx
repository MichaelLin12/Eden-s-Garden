import React,{useState} from 'react'
import './intern.css'
import img1 from '../../images/istockphoto-1202957601-612x612.jpg'
import {Select,MenuItem} from '@mui/material'
import { borderBottom } from '@mui/system'

export default function Intern() {
  const [page,setPage] = useState(true)
  const [filesName, setFilesName] = useState({resumeName:'',coverLetterName:''})
  const [intern,setIntern] = useState({name:'',email:'',location:'',phoneNumber:'000-000-0000',resume:new File([],'foo.txt'),coverLetter:new File([],'foo.txt'),id:'',move:'',sponser:'',background:''})
  
  const view= ()=>{
    if(page){
      return(
        <div>
          <div className='intern-other'>
            <label className="intern-form">
              <input type="text" placeholder="&nbsp;" onChange={(e)=>{setIntern({...intern,name:e.target.value})}}/>
              <span className="intern-placeholder">Name</span>
            </label>
          </div>
          <div className='intern-other'>
            <label className="intern-form">
              <input type="text" placeholder="&nbsp;" onChange={(e)=>{setIntern({...intern,email:e.target.value})}}/>
              <span className="intern-placeholder">Email</span>
            </label>
          </div>
          <div className='intern-other'>
            <label className="intern-form">
              <input type="text" placeholder="&nbsp;" onChange={(e)=>{setIntern({...intern,location:e.target.value})}}/>
              <span className="intern-placeholder">Location</span>
            </label>
          </div>
          <div className='intern-other'>
            <label className="intern-form">
              <input type="text" placeholder="&nbsp;" value={intern.phoneNumber} onChange={(e)=>{
                const val = e.target.value;
                const c0 = val.match('^[ 0-9]{0,3}-[ 0-9]{0,3}-[ 0-9]{0,4}$')
                if(c0){
                  setIntern({...intern, phoneNumber:val})
                }else{
                  setIntern({...intern})
                }
              }}/>
              <span className="intern-placeholder">Phone Number</span>
            </label>
          </div>
          <div className='intern-file'>
            <label>
              <input type={'file'} className='intern-file-input' onChange={(e)=>{
                let files = e.target.files;
                if(files?.length !== 0){
                  let rfile = files![0].name;
                  console.log(rfile,files![0])
                  setFilesName({...filesName,resumeName:rfile})
                  setIntern({...intern,resume:files![0]})
                }
                }}/>
              <span className='input-file-label'>Resume</span>
            </label>
            <span className='intern-fileName'>{filesName.resumeName}</span>
          </div>
          <div className='intern-file intern-top'>
            <label>
              <input type={'file'} className='intern-file-input' onChange={(e)=>{
                let files = e.target.files;
                if(files?.length !== 0){
                  let rfile = files![0].name;
                  console.log(rfile)
                  setFilesName({...filesName,coverLetterName:rfile})
                  setIntern({...intern,coverLetter:files![0]})
                }
                }}/>
              <span className='input-file-label'>Cover Letter</span>
            </label>
            <span className='intern-fileName'>{filesName.coverLetterName}</span>
          </div>
          <div className='intern-next'>
            <button onClick={()=>{setPage(!page)}}>Next</button>
          </div>
        </div>
      )
    }else{
      return(
        <div>
          <div className='intern-application'>
            <p>Are you willing to submit a background check during the hiring process?</p>
            <select onChange={(e)=>{setIntern({...intern,background:e.target.value}); console.log(e.target.value)}} value={intern.background}>
              <option>Select One</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='intern-application'>
            <p>Will you now or in the future require sponsorship for employment visa status?</p>
            <select onChange={(e)=>{setIntern({...intern,sponser:e.target.value})}} value={intern.sponser}>
              <option>Select One</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='intern-application'>
            <p>Are you able to work on a daily basis in the work location listed for this position? If not, are you willing to relocate at your own expense to accept a position with Eden's Garden?</p>
            <select onChange={(e)=>{setIntern({...intern,location:e.target.value})}} value={intern.location}>
              <option>Select One</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='intern-back'>
            <button onClick={()=>{setPage(!page)}}>Back</button>
          </div>
          <div className='intern-back'>
            <button onClick={()=>{setPage(!page)}}>Submit</button>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='intern-canvas'>
      <div className='intern-grid'>
        <div className='intern-grid-1'>
          <img src={img1} alt='sensitive' width={400}/>
          <div className='intern-content'>
            Irure laboris incididunt ullamco minim pariatur ea ea. Ea ex et dolore excepteur id pariatur anim laborum proident. Non ut nulla esse aliqua sit adipisicing ea. Reprehenderit consectetur nostrud dolor aliquip ullamco dolor aliquip. Incididunt consectetur id labore duis. Labore elit Lorem sit do cupidatat enim occaecat Lorem velit consectetur labore fugiat reprehenderit. Deserunt quis dolor labore elit sit laborum.
          </div>
        </div>
        <div className='intern-grid-2'>
          <div className='intern-2-title'>Internship</div>
            {view()}
        </div>
      </div>
    </div>
  )
}
