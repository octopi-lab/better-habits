import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <section className='signup-box'>
        <form method='POST' action='/user/signup'>
				<h1>Sign Up</h1>
        <input name='username' type='text' placeholder='Username'></input>
        <input name='password' type='password' placeholder='Password'></input>
          <input type='submit' value='signup'></input>
      </form>
    </section>
  )
}


  // - send fetch POST request with form data 
  //  - wait for response 
    //  if response is good redirect to the about page /about
export default Signup;