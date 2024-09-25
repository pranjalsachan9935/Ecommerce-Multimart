import React, { useState, useRef } from "react";
import './Loginform.css';

const Loginform = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(''); 
  const pass = useRef(null);

  function handlePassword(){
    if(pass.current.type === 'password'){
     pass.current.type = 'text'
    } else {
     pass.current.type = 'password';
    }
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    if(password !== cpassword){
      setErrorMessage("Passwords do not match!"); 
      setErrorMessage("");
      console.log(`Email: ${email}, Password: ${password}`);
    }
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label htmlFor="email">Email</label>
        <input ref={pass} name="email" type="email" placeholder="Enter your email ID" onChange={(e)=>{setEmail(e.target.value)}}/>
       
          <label htmlFor="password">Password</label>

          <input ref={pass} name="password" type="password" placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} required minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}" />

          <button type="button" className="show-password-btn" onClick={handlePassword}>Show Password</button>
        
        <label htmlFor="repeat-password">Repeat Password</label>

        <input name="repeat-password" type="password" placeholder="Confirm your password" onChange={(e)=>{setCpassword(e.target.value)}}/>

        <p>By creating an account you agree to our Terms & Conditions.</p>
        <button type="submit" className="signupbtn" >Sign Up</button>
      </form>
    </div>
  );
};

export default Loginform;
