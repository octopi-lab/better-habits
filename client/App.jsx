import React, { Component } from 'react';
import { Routes, Route, Link} from 'react-router-dom';

import Home from './components/Home.jsx'; 
import DashboardContainer from './components/DashboardContainer.jsx';


function App() {

  return (
    <div>
      <main>
      <Routes> 
        <Route  path = '/' element={<Home/>}></Route>
        {/* <Link></Link> */}
        <Route path='/dashboard' element={<DashboardContainer/>}></Route>
        {/* <Route  path = '' element ={< />}></Route>
        <Route  path = '' element ={< />}></Route>
        <Route  path = '' element ={< />}></Route>
        <Route  path = '' element ={< />}></Route> */}

      </Routes>
      </main>
    </div>
  );   
};

export default App; 