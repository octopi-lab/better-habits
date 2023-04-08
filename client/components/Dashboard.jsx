import React, {Component, element } from 'react';
import { Routes, Route } from 'react-router-dom';

function Dashboard() {
  // Dashboard needs to be stateful, and have use habits persist after being added
  
  // const [habit, setHabit] = useState(null);

  // useEffect(() => {
  //   fetch('/habit:id')
  //     .then(response => {
  //       response.json();
  //     })
  //     .then()
  // })

  return (
  <>
    <sidebar>
      <div className='total-points'>
        <h3>Total Yearly Points</h3>
        <h3>Total Montly Points</h3>
        <h3>Total Daily Points</h3>
      </div>
      <div className='leaderboard'>
        <h3>Leaderboard</h3>
      </div>
    </sidebar>
    <div className='add-habit'>
      <h3>Add New Habit</h3>
      <button>+</button>
    </div>
  </>
  )
}

export default Dashboard;