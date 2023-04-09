import React from 'react';

function Sidebar () {
    return ( 
			<div className='sidebar-container'>
				<h1>Score Board</h1>
				<div className='total-points'>
					<h2 data-label="Daily:">5</h2>
					<h2 data-label="Monthly:">7</h2>
				</div>
			</div>
    )
}

export default Sidebar;

/* JUST NEED TO ADD JSX TO REPLACE THE TEMPORARY DAILY AND MONTHLY VALUES 
ONCE BACKEND FRAMEWORK IS IN PLACE
*/