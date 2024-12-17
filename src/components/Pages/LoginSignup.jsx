import React, { useState } from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {
const[state,setState] = useState("Login");
const [formData, setFormData]= useState({username: "",password:"", email:""})

const changeHandeler = (e)=>{
  setFormData({...formData, [e.target.name]:e.target.value})
}

const login =async()=>{
  console.log("Login function executed", formData)
  let responseData;

  try {
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json', // Expecting JSON response from the server
        'Content-Type': 'application/json' // Sending JSON data to the server
      },
      body: JSON.stringify(formData)
    });

    // Parse JSON response
    responseData = await response.json();

    // Check if the signup was successful
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error)
    }
  } catch (error) {
    console.error("Error during signup:", error);
  }

  


}

const signup = async () => {
  console.log("Signup function executed", formData);
  let responseData;

  try {
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json', // Expecting JSON response from the server
        'Content-Type': 'application/json' // Sending JSON data to the server
      },
      body: JSON.stringify(formData)
    });

    // Parse JSON response
    responseData = await response.json();

    // Check if the signup was successful
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error)
    }
  } catch (error) {
    console.error("Error during signup:", error);
  }
};


  return (
    <div className='loginSignup'>
      <div className="login-container">
        <h1>{state
          }</h1>
        <div className="loginSignup-feilds">
         {state ==="Sign Up"? <input name='username' value={formData.username} onChange={changeHandeler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandeler} type="email" placeholder='Enter Email address' />
          <input name='password' value={formData.password} onChange={changeHandeler} type="password" placeholder='password' />

        </div>
        <button onClick={()=>{state ==="Login"?login():signup()}}>continue </button>
        {state ==="Sign Up"?  <p className="loginSignup-login">
          Already have an account <span onClick={(()=>{setState("Login")})}>Login Here </span>
        </p>:
        <p className="loginSignup-login">
       Create an Account <span onClick={()=>{setState("Sign Up")}}>Click here  </span>
        </p>}

        
      
        <div className="loginSignup-aggr">
          <input type="checkbox" name='' id='' />
          <p>By continuing , I agree to the terms of use and privacy </p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
