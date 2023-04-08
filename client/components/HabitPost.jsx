import React, {Component, element, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function HabitPost (props) {

    
  // decleare isClicked -- use UseState 
  const [isClicked, setIsClicked] = useState(false); 
  const [habit, setHabit] = useState({
    name: "", 
    alternatives: "", 
    description: "", 
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
fetch('../api/newHabit', {
        method: 'POST',
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
  <button onClick={handleClick}>Add New habit</button>
  {isClicked  && (
      <form>
      <label htmlFor='habit-name'>Habit Name:</label>
      <input type='text' id='habit-name' value={habit.name} name="name"  onChange ={handleInput}required></input>
      <label>Alternatives</label>
      <input value={habit.alternatives} onChange ={handleInput} name="alternatives" required></input>
      <label htmlFor='habit-description'>Description</label>
      <input value={habit.description} onChange ={handleInput} name="description" required></input>
      <select value={habit.type} onChange ={handleInput} name="type" required>
          <option value="Growth">Growth</option>
          <option value="Health">Health</option>
          <option value="Productivity">Productivity</option>
          <option value="Self-Care">Self-Care</option>
          <option value="Social">Social</option>
      </select>
      <button onClick={handleClick}>Cancel</button>  
      <button type="submit" onClick={handleSubmit}>Create Habit</button>  
      </form>
  )}
  </>
  )

}

export default HabitPost;


// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }