import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return(
		<header className="navbar">
			<Link to="/" className="logo">Better Habits</Link>
			<nav>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/dashboard">Dashboard</Link></li>
					<li><Link to="/friends">Friends</Link></li>
				</ul>
			</nav>
			<div className="reg-buttons">
				<p><Link to="/login">Login</Link></p>
				<p><Link to="/register">Register</Link></p>
			</div>
		</header>
		)
	}
}
export default Navbar;