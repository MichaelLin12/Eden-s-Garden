import React from 'react';
import Home from './components/landing/Home'
import Login from './components/login/Login'
import Learn from './components/learn/learn'
import Contact from './components/contact/Contact';
import Support from './components/support/support';
import Events from './components/events/Events';
import Store from './components/store/Store'
import ProtectedRoute from './ProtectedRoute';
import {Routes,Route} from 'react-router-dom'


function App() {

  const checkAuthentication = ()=>{
    return true;
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/learn' element={<Learn/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/store' element={<ProtectedRoute func={checkAuthentication}>
                                        <Store/>
                                      </ProtectedRoute>
                                      }/>
      </Routes>
    </div>
  );
}

export default App;
