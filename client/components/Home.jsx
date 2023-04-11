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
					<h2>Watch this video to learn how to build better habits!</h2>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/cVhutaUGbOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div className="logsign-forms">
					<Login />
					<Signup />
				</div>
			</div>
    );
}

export default Home;