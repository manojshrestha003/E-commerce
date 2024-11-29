import React from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginSignup'>
      <div className="login-container">
        <h1>Signup</h1>
        <div className="loginSignup-feilds">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Enter Email address' />
          <input type="password" placeholder='password' />

        </div>
        <button>continue </button>
        <p className="loginSignup-login">
          Already have an account <span>Login Here </span>
        </p>
        <div className="loginSignup-aggr">
          <input type="checkbox" name='' id='' />
          <p>By continuing , I agree to the terms of use and privacy </p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
