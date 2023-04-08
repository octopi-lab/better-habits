import React, { Components } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return(
		<header className="navbar">
			<Link to="/" className="logo">RepCode</Link>
			<nav>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<div className="reg-buttons">
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/signup">Sign Up</Link></li>
					</div>
				</ul>
			</nav>
		</header>

	)
}

export default Headers;