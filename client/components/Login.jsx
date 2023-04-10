import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className='login-box'>
      <form method='POST' action='/user/login'>
        <input name='username' type='text' placeholder='Username'></input>
        <input name='password' type='password' placeholder='Password'></input>
        <input type='submit' value='Log In'></input>
      </form>
    </section>
  )
}

export default Login;