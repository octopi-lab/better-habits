import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function About() {

    return (
      <main className="aboutpage">
          <img className="img" src="https://images.squarespace-cdn.com/content/v1/54072d28e4b0c1de7269335a/1468593975785-5RPGNEIZ7RAQSTHMK0QI/image-asset.gif" alt="Image 1" />
          <div className= "about">
			<div className="about-description">
			<h1>Actually Build Your Habits!</h1>
			<p>Having a hard time building habits and reaching your goals?</p>
			<p> Better Habits helps you build and maintain healthy habits with a <em>new optimized system</em> for habit building!</p>
			<div className="about-wrapper">
			<div className="step">
				<h2>Step 1: Choose a habit</h2>
				<p>Choose a habit you want to achieve!</p>
			</div>
			<div className="step">
				<h2>Step 2: Choose up to 3 alternative actions for the habit</h2>
				<p>This allows for flexibility and opportunities for consistency</p>
			</div>
			<div className="step">
				<h2>Step 3: Define points criteria for habit and alternative actions</h2>
				<p><strong>Point allocations:</strong></p>
				<div className="step">
				<ul>
					<li><strong>1 point:</strong> Show Up</li>
					<li><strong>2 points:</strong> Easy</li>
					<li><strong>3 points:</strong> Medium</li>
					<li><strong>4 points:</strong> Hard</li>
				</ul>
				</div>
			</div>
			<div className="step">
				<h2>Step 4: Go achieve your goals!</h2>
				<p>Seize the day and record your progress~</p>
			</div>
			</div>
			</div>
			<h1>Example: Habit</h1>
			<div className="example-habit-building">
				<div className="step">
					<h2>Step 1</h2>
					<p>I want to go to the gym every day!</p>
				</div>
				<div className="step">
					<h2>Step 2</h2>
					<p>If I can't go to the gym, my alternate habits are:</p>
					<ul>
						<li>Go for a walk</li>
						<li>Pushups and situps</li>
						<li>Play with the dog!</li>
					</ul>
				</div>
				<div className="step">
					<h2>Step 3</h2>
					<ul>
						<li className='step-habit'><strong>Points Allocation</strong></li>
						<div className="step">
						<ul>
							<li><strong>1 point:</strong> At least show up to the gym</li>
							<li><strong>2 points:</strong> 30 minutes</li>
							<li><strong>3 points:</strong> 1 hour</li>
							<li><strong>4 points:</strong> 2 hours</li>
						</ul>
						</div>
					</ul>
		  		</div>
			</div>
		</div>
      </main>
    );
}

export default About;