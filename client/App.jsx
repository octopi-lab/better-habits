import React, {Component, element } from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './components/Home.jsx'; 
import Navbar from './components/Navbar.jsx';

class App extends Component {

   render() {
    return (
        <div>
			<Navbar />
            <Routes> 
				<Route  path = '/' element={<Home/>}></Route>
				{/* <Route  path = '/about' element ={<About />}></Route> */}
				{/* <Route  path = '' element ={< />}></Route>
				<Route  path = '' element ={< />}></Route>
				<Route  path = '' element ={< />}></Route> */}
            </Routes>
        </div>
        );   
    };
};

export default App; 