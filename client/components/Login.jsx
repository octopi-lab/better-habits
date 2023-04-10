import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate(); 

  // THIS IS BYPASSING THE BACK END. THIS NEEDS TO BE FIXED 
  function handleSubmit(event){ 
    event.preventDefault();
    const formData = new FormData(event.target)
    const username = formData.get('username');
    navigate(`/dashboard/${username}`);
  }

// onSubmit={handleSubmit}
  return (
    <section className='login-box'>
      <form method='POST' action='/user/login'  onSubmit={handleSubmit}>
				<h1>Log In</h1>

        <input name='username' type='text' placeholder='Username'></input>
        <input name='password' type='password' placeholder='Password'></input>
        <input type='submit' value='login'></input>
      </form>
    </section>
  )
}

export default Login;