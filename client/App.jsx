import React, {Component, element } from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './components/Home.jsx'; 


class App extends Component {

   render() {
    return (
        <div>
            <main>
            <Routes> 
                <Route  path = '/' element={<Home/>}></Route>
                {/* <Route  path = '' element ={< />}></Route>
                <Route  path = '' element ={< />}></Route>
                <Route  path = '' element ={< />}></Route>
                <Route  path = '' element ={< />}></Route> */}

            </Routes>
            </main>
        </div>
        );   
    };
};

export default App; 