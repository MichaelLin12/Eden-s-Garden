import React from 'react';
import Home from './components/landing/Home'
import Login from './components/login/Login'
import Learn from './components/learn/learn'
import Contact from './components/contact/Contact';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/learn' element={<Learn/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
