import React from 'react';

function Sidebar ({dailyScore, totalScore}) {
    return ( 
			<div className='sidebar-container'>
				<h1>Score Board</h1>
				<div className='total-points'>
					<h2 data-label="Daily:">{dailyScore}</h2>
					<h2 data-label="Total:">{totalScore}</h2>
				</div>
			</div>
    )
}

export default Sidebar;