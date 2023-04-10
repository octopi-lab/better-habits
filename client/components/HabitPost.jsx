import React, {Component, element, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function HabitPost (props) {

  const {username} = useParams();

    
  // decleare isClicked -- use UseState 
  const [isClicked, setIsClicked] = useState(false); 
  const [habit, setHabit] = useState({
    name:"",
	level1: "", 
	level2: "", 
	level3: "", 
	level4: "", 
	alternatives1: "",
	alternatives2: "",
	alternatives3: "",
	message: "", 
	type: "",
  });
  // create function for our handleClick (tied to our button)
    //  updated isClicked to true 
    //  updated habits array thats stored in dashboard container -- this would change state causing our 'habits display' to re-render
  const handleClick = () => {
    if (!isClicked) setIsClicked(true); 
    else {setIsClicked(false)}; 
  }

// WE NEED TO ADD FUNCTIONALITY TO ACTUALLY SEND THE INPUT DATA TO OUR SERVER
//   can we add a require tag in the jsx for each input?? 



	const handleSubmit = (e) => {
	console.log(habit)
	e.preventDefault();
	// NEED TO PASS IN PARAM HERE ---------------------------------------
	fetch(`/habit/${username}`, {
			method: 'PATCH',
			body: JSON.stringify(habit), // need to assign a newHabit 
			headers: { 'Content-Type': 'application/json'}
		})
		.then(res => res.json())
		.then (data => {
		})
	}
// console.log(habit.name)
// console.log(habit.alternatives)
	const handleInput = (e) => {
		const {name, value} = e.target
		setHabit(previousState => {
		return {...previousState, [name]: value}
		})
	}

  
  return (
  <>
  <button className="add-habit-button" onClick={handleClick}>Add New habit</button>
  {isClicked  && (
      <form className='habit-post'>
				<div className="habit-post-wrapper">
					<label>Habit Name</label>
     			<input type='text' id='habit-name' value={habit.name} name="name"  onChange ={handleInput} required placeholder="-- example: Run every day --"></input>
				</div>
				<div className='habit-post-wrapper'>
					<label>Level 1</label>
					<input value={habit.level1} onChange={handleInput} name="level1" required placeholder="-- example: run 2 mile--"></input>
				</div>
				<div className='habit-post-wrapper'>
					<label>Level 2</label>
					<input value={habit.level2} onChange={handleInput} name="level2" required placeholder="-- example: run 4 miles --"></input>
				</div>
				<div className='habit-post-wrapper'>
					<label>Level 3</label>
					<input value={habit.level3} onChange={handleInput} name="level3" required placeholder="-- example: run 6 miles --"></input>
				</div>
				<div className='habit-post-wrapper'>
					<label>Level 4</label>
				<input value={habit.level4} onChange={handleInput} name="level4" required placeholder="-- example: run 1 miles --"></input>
				</div>
				<div className='habit-post-wrapper'>
      		<label>Alternative Action 1</label>
     	 	<input value={habit.alternatives1} onChange ={handleInput} name="alternatives1" required placeholder="-- example: go for a walk --"></input>
				</div>
				<div className='habit-post-wrapper'>
					<label>Alternative Action 2</label>
					<input value={habit.alternatives2} onChange ={handleInput} name="alternatives2" required placeholder="-- example: go for a hike --"></input>
				</div>
				<div className='habit-post-wrapper'>
					<label>Alternative Action 3</label>
     		 	<input value={habit.alternatives3} onChange ={handleInput} name="alternatives3" required placeholder="-- example: go biking --"></input>
				</div>
				<div className='habit-post-wrapper'>
					<label>Message to Yourself</label>
      		<input value={habit.message} onChange ={handleInput} name="message" placeholder="-- example: I want to run a marathon some day. Let's do it!--"></input>
				</div>
				<div className="wrapper3">
      		<select value={habit.type} onChange ={handleInput} name="type" required>
          	<option value="Growth">Growth</option>
          	<option value="Health">Health</option>
         		<option value="Productivity">Productivity</option>
         		<option value="Self-Care">Self-Care</option>
         		<option value="Social">Social</option>
     			</select>
				<div className="habit-post-wrapper2">
      		<button className="button" onClick={handleSubmit}>Create Habit</button>
					<button className="button cancel" onClick={handleClick}>Cancel</button>  
				</div>
				</div>
      </form>
  )}
  </>
  )

}

export default HabitPost;

/*
HABIT OBJECT MOCKUP

habit = {
	name: "RUNNING EVERY DAY",
	1: 'run 0.5 miles', 
	2: 'run 1 mile',
	3: 'run 2 miles',
	4: 'run 3 miles',
	alternatives1: 'go for a walk',
	alternatives2: 'go for a bike ride',
	alternatives3: 'go for a swim',
	message: 'I want to run every day because I want to be healthy',
	type: 'Health'
}

*/