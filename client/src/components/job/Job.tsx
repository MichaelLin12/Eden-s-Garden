import React,{useState} from 'react'
import './job.css'
import img1 from '../../images/istockphoto-1202957601-612x612.jpg'

export default function Job() {
  const [page,setPage] = useState(true)
  const [filesName, setFilesName] = useState({resumeName:'',coverLetterName:''})
  const [job,setJob] = useState({name:'',email:'',location:'',phoneNumber:'000-000-0000',resume:new File([],'foo.txt'),coverLetter:new File([],'foo.txt'),id:'',move:'',sponser:'',background:''})

  const view= ()=>{
    if(page){
      return(
        <div>
          <div className='job-other'>
            <label className="job-form">
              <input type="text" placeholder="&nbsp;" onChange={(e)=>{setJob({...job,name:e.target.value})}}/>
              <span className="job-placeholder">Name</span>
            </label>
          </div>
          <div className='job-other'>
            <label className="job-form">
              <input type="text" placeholder="&nbsp;" onChange={(e)=>{setJob({...job,email:e.target.value})}}/>
              <span className="job-placeholder">Email</span>
            </label>
          </div>
          <div className='job-other'>
            <label className="job-form">
              <input type="text" placeholder="&nbsp;" onChange={(e)=>{setJob({...job,location:e.target.value})}}/>
              <span className="job-placeholder">Location</span>
            </label>
          </div>
          <div className='job-other'>
            <label className="job-form">
              <input type="text" placeholder="&nbsp;" value={job.phoneNumber} onChange={(e)=>{
                const val = e.target.value;
                const c0 = val.match('^[ 0-9]{0,3}-[ 0-9]{0,3}-[ 0-9]{0,4}$')
                if(c0){
                  setJob({...job, phoneNumber:val})
                }else{
                  setJob({...job})
                }
              }}/>
              <span className="job-placeholder">Phone Number</span>
            </label>
          </div>
          <div className='job-file'>
            <label>
              <input type={'file'} className='job-file-input' onChange={(e)=>{
                let files = e.target.files;
                if(files?.length !== 0){
                  let rfile = files![0].name;
                  console.log(rfile,files![0])
                  setFilesName({...filesName,resumeName:rfile})
                  setJob({...job,resume:files![0]})
                }
                }}/>
              <span className='job-file-label'>Resume</span>
            </label>
            <span className='job-fileName'>{filesName.resumeName}</span>
          </div>
          <div className='job-file intern-top'>
            <label>
              <input type={'file'} className='job-file-input' onChange={(e)=>{
                let files = e.target.files;
                if(files?.length !== 0){
                  let rfile = files![0].name;
                  console.log(rfile)
                  setFilesName({...filesName,coverLetterName:rfile})
                  setJob({...job,coverLetter:files![0]})
                }
                }}/>
              <span className='job-file-label'>Cover Letter</span>
            </label>
            <span className='job-fileName'>{filesName.coverLetterName}</span>
          </div>
          <div className='job-next'>
            <button onClick={()=>{setPage(!page)}}>Next</button>
          </div>
        </div>
      )
    }else{
      return(
        <div>
          <div className='job-application'>
            <p>Are you willing to submit a background check during the hiring process?</p>
            <select onChange={(e)=>{setJob({...job,background:e.target.value}); console.log(e.target.value)}} value={job.background}>
              <option>Select One</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='job-application'>
            <p>Will you now or in the future require sponsorship for employment visa status?</p>
            <select onChange={(e)=>{setJob({...job,sponser:e.target.value})}} value={job.sponser}>
              <option>Select One</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='job-application'>
            <p>Are you able to work on a daily basis in the work location listed for this position? If not, are you willing to relocate at your own expense to accept a position with Eden's Garden?</p>
            <select onChange={(e)=>{setJob({...job,location:e.target.value})}} value={job.location}>
              <option>Select One</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='job-back'>
            <button onClick={()=>{setPage(!page)}}>Back</button>
          </div>
          <div className='job-back'>
            <button onClick={()=>{setPage(!page)}}>Submit</button>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='job-canvas'>
      <div className='job-grid'>
        <div className='job-grid-1'>
          <img src={img1} alt='sensitive' width={400}/>
          <div className='job-content'>
            Irure laboris incididunt ullamco minim pariatur ea ea. Ea ex et dolore excepteur id pariatur anim laborum proident. Non ut nulla esse aliqua sit adipisicing ea. Reprehenderit consectetur nostrud dolor aliquip ullamco dolor aliquip. Incididunt consectetur id labore duis. Labore elit Lorem sit do cupidatat enim occaecat Lorem velit consectetur labore fugiat reprehenderit. Deserunt quis dolor labore elit sit laborum.
          </div>
        </div>
        <div className='job-grid-2'>
          <div className='job-2-title'>Job</div>
            {view()}
        </div>
      </div>
    </div>
  )
}
