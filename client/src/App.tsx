import React,{useState,useEffect} from 'react';
import Home from './components/landing/Home'
import Login from './components/login/Login'
import Learn from './components/learn/learn'
import Contact from './components/contact/Contact';
import Support from './components/support/support';
import Events from './components/events/Events';
import Store from './components/store/Store'
import ProtectedRoute from './ProtectedRoute';
import {Routes,Route} from 'react-router-dom'
import Profile from './components/userProfile/UserProfile'


function App() {
  const [supportPage, setSupportPage] = useState('Donate')
  const [backendData,setBackendData] = useState({"users":null})

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setBackendData(data)
      }
    )
  },[])

  const checkAuthentication = ()=>{
    return true;
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home supportPage={supportPage} change={setSupportPage}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/learn' element={<Learn supportPage={supportPage} change={setSupportPage}/>}/>
        <Route path='/contact' element={<Contact supportPage={supportPage} change={setSupportPage}/>}/>
        <Route path='/support' element={<Support supportPage={supportPage} change={setSupportPage}/>}/>
        <Route path='/events' element={<Events supportPage={supportPage} change={setSupportPage}/>}/>
        <Route path='/store' element={<ProtectedRoute func={checkAuthentication}>
                                        <Store supportPage={supportPage} change={setSupportPage}/>
                                      </ProtectedRoute>
                                      }/>
        <Route path='/profile' element={<ProtectedRoute func={checkAuthentication}>
                                <Profile/>
                              </ProtectedRoute>
                              }/>
      </Routes>
    </div>
  );
}

export default App;
