import React, {Component, element } from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './components/Home.jsx'

class App extends Component {

   render() {
    return (
        <div>
           <nav></nav>
            <main>
            <Routes> 
                <Route  path = '/' element={<Home/>}></Route>
                

            </Routes>
            </main>
        </div>
        );   
    };
};

export default App; 