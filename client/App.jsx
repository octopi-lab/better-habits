import React, { Component } from 'react';
import { Routes, Route, Link} from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import DashboardContainer from './components/DashboardContainer.jsx';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import About from './components/About.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
      <div>
    <Navbar />
          <Routes> 
      				<Route  path = '/' element={<Home/>}></Route>
              <Route path='/dashboard/:username' element={<DashboardContainer/>}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
      				<Route  path = '/about' element ={<About />}></Route>
      {/* <Route  path = '' element ={< />}></Route>
      <Route  path = '' element ={< />}></Route>
      <Route  path = '' element ={< />}></Route> */}
          </Routes>
      </div>
      );   
};

export default App; 