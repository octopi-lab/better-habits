import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';

import HabitPost from './HabitPost.jsx'
import Sidebar from './Sidebar.jsx'
function DashboardContainer() {
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
      <div className='Sidebar'>
        <h3>Sidebar</h3>
        <Sidebar/> 
      </div>
    </sidebar>
    <div className='habit-post'>
      <h3>Add New Habit</h3>
      <HabitPost/>
    </div>
  </>
  )
}

export default DashboardContainer;