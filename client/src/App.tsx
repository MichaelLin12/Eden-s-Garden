import React from 'react';
import Home from './components/landing/Home'
import Login from './components/login/Login'
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
