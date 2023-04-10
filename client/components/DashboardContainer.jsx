import React, {Component, useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import HabitPost from './HabitPost.jsx'
import Sidebar from './Sidebar.jsx'
function DashboardContainer() {
  // Dashboard needs to be stateful, and have use habits persist after being added
  
  const [username, setUsername] = useState(null);
  const [dailyScore, setDailyScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    fetch(`:habit/:${username}/getUserInfo`)
      .then(response => response.json())
      .then(data => {
        setDailyScore(data.daily);
        setTotalScore(data.total);
      })
  }, [])

  return (
  <div className="dashboard-container">
    <div className='habit-post'>
      <HabitPost/>
    </div>
		<div className="sidebar">
        <Sidebar/>
				{/* <Sidebar  dailyScore={user.daily} totalScore={user.total}/> */}
		</div>
  </div>
  )
}

export default DashboardContainer;