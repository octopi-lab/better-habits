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
  <div className="dashboard-container">
    <div className='habit-post'>
      <HabitPost/>
    </div>
		<sidebar>
      <div className='Sidebar'>
        <h3>Sidebar</h3>
        <Sidebar/> 
      </div>
    </sidebar>
  </div>
  )
}

export default DashboardContainer;