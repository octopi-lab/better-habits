import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

function Home() {

    return (
			<div className="home">
				<div className="welcome">
					<h1>Welcome to Better Habits</h1>
					<h2>No more giving up on your habit goals!</h2>
					<p>Achieve success and change your life with a new revolutionary habit buidling system!</p>
					<h2>Watch this video!</h2>
					<p>THERE WILL BE THAT YOUTUBE VIDEO HERE!!!</p>
				</div>
				<div className="logsign-forms">
					<Login />
					<Signup />
				</div>
			</div>
    );
}

export default Home;