import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <main>
          <img className="img" src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Image 1" />
          <div className= "about">
			<h1>Actually Build Your Habits!</h1>
			<p>Having a hard time building habits and reaching your goals?</p>
			<p> Better Habits helps you build and maintain healthy habits with a <em>new optimized system</em> for habit building!</p>
			<div className="step">
				<h2>Step 1: Choose a habit</h2>
				<p>Choose a habit you want to achieve!</p>
			</div>
			<div className="step">
				<h2>Step 2: Choose up to 3 alternative actions for the habit</h2>
				<p>This allows for flexibility and opportunities for consistency</p>
			</div>
			<div className="step">
				<h3>Step 3: Define points criteria for the habit and the alternative actions</h3>
				<p>Point allocations:</p>
				<ul>
					<li>1 point: Show Up</li>
					<li>2 points: Easy</li>
					<li>3 points: Medium</li>
					<li>4 points: Hard</li>
				</ul>
			</div>
			<div className="step">
				<h3>Step 4: Go achieve your goals!</h3>
				<p>Seize the day and record your progress~</p>
			</div>


			<h1 className="example-habit-building">Example: Habit</h1>
			<div className="step">
				<h2>Step 1</h2>
				<p>I want to go to the gym every day!</p>
			</div>
			<div className="step">
				<h2>Step 2</h2>
				<p>If I can't go to the gym, my alternate habits are:</p>
				<ul>
					<li>Go for a walk</li>
					<li>Do 20 pushups and 20 situps</li>
					<li>20 pullups</li>
				</ul>
			</div>
			<div className="step">
				<h2>Step 3</h2>
				<p>Go to the gym</p>
					<ul>
						<li>1 point: Show Up</li>
						<li>2 points: 30 minutes</li>
						<li>3 points: 1 hour</li>
						<li>4 points: 2 hours</li>
					</ul>
				<ul>
					<li>Go for a walk</li>
					<ul>
						<li>1 point: Walk Around the Block for 15 minutes</li>
						<li>2 points: Walk Around the Block for 30 minutes</li>
						<li>3 points: Walk Around the Block for 1 hour</li>
						<li>4 points: Walk Around the Block for 1.5 hours</li>
					</ul>
					<li>Do pushups and situps</li>
						<ul>
							<li>1 point: Do 20 Pushups and 20 Situps</li>
							<li>2 points: Do 50 pushups and 50 situps</li>
							<li>3 points: Do 80 pushups and 80 situps</li>
							<li>4 points: Do 100 pushups and 100 situps</li>
						</ul>
					<li>Play with the dog, no sitting down!</li>
						<ul>
							<li>1 point: Play with the dog for 20 minutes</li>
							<li>2 points: Play with the dog for 30 minutes</li>
							<li>3 points: Play with the dog for 40 minutes</li>
							<li>4 points: Play with the dog for 1 hour</li>
						</ul>
				</ul>
		  	</div>
		</div>
      </main>
    );
  }
}

export default Home;