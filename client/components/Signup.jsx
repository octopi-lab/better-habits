import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <section className='signup-box'>
      <form method='POST' action='/signup'>
				<h1>Sign Up</h1>
        <input name='username' type='text' placeholder='Username'></input>
        <input name='password' type='password' placeholder='Password'></input>
        <input type='submit' value='signup'></input>
      </form>
    </section>
  )
}

export default Signup;