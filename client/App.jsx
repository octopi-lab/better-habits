import React, {Component, element } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';



class App extends Component {

   render() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
        </Routes>
        );   
    };
};

export default App; 