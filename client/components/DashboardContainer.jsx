import React, {Component, useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import HabitPost from './HabitPost.jsx';
import Sidebar from './Sidebar.jsx';

function DashboardContainer() {
  // Dashboard needs to be stateful, and have use habits persist after being added
  
  //setUsername Somewhere
  const [username, setUsername] = useState('user1');
  const [dailyScore, setDailyScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [habitData, setHabitData] = useState([]);
  const getData = async () => {
    const request = await fetch(`/habit/${username}/getUserInfo`);
    const parsedData = await request.json();
    console.log('THIS IS THE PARSED DATA', parsedData);
    setDailyScore(parsedData.daily);
    setTotalScore(parsedData.total);
    setHabitData([...Object.entries(parsedData.habits)]);
    console.log('OBJECT ENTRIES LOOL', parsedData.habits)
    return;
  }
  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <div className="dashboard-container">
        <div className='habit-post'>
          <HabitPost/>
        </div>
        <div className="sidebar">
            <Sidebar  dailyScore={dailyScore} totalScore={totalScore}/>
        </div>
    </div>
    <div className="existing-habits">
      <h1>This is the Existing Habits Section</h1>
      {habitData.map((item, index) => {
        {console.log('THIS IS MY ITEM', item)}
        return (
          <div className='habitEntries' key = {item.name}>
            <div className="button-wrappers">
              <button className='entry-button'> <div className='num'>1</div> {item[1].level1}</button>
              <button className='entry-button'> <div className='num'>2</div> {item[1].level2}</button>
              <button className='entry-button'> <div className='num'>3</div> {item[1].level3}</button>
              <button className='entry-button'> <div className='num'>4</div> {item[1].level4}</button>
            </div>
          </div>
        )
      })}

    </div>
  </div>
  )
}

export default DashboardContainer;


