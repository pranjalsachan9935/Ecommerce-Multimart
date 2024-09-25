import React, { useState, useRef } from "react";
import './Signup.css';

const Loginform = () => {
  const [ password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const pass = useRef(null);

  function handlePassword(){
    if(pass.current.type === 'password'){
     pass.current.type = 'text'
    } else {
     pass.current.type = 'password';
    }
  }

  function handleSubmit(){
    console.log(`Email: ${email}, Password: ${password}`);
  }


  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <p>Please fill in this form to log in to your account.</p>
        <label htmlFor="email">Email</label>
        <input ref={pass} name="email" type="email" placeholder="Enter your email ID" onChange={(e)=>{setEmail(e.target.value)}}/>
       
          <label htmlFor="password">Password</label>

          <input ref={pass} name="password" type="password" placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} required minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}" />

          <button type="button" className="show-password-btn" onClick={handlePassword}>Show Password</button>

        <p className="warning">This is a demo page don't enter your personal detail at all.</p>
        <button type="submit" className="loginbtn">Log In</button>
      </form>
    </div>
  );
};

export default Loginform;
