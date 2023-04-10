import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <section className='signup-box'>
      <form method='POST' action='/user/signup'>
        <input name='username' type='text' placeholder='Username'></input>
        <input name='password' type='password' placeholder='Password'></input>
        <input type='submit' value='Sign Up'></input>
      </form>
    </section>
  )
}

export default Signup;