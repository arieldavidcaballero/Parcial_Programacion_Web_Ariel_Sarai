import React, { useState } from "react";
import './Login.css';

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', userName);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  return (
    <div className="login-container"> 

      <div className="login-circle"> 
        <div className="circle-left" />
        <div className="circle-right" />
      </div> 

      <div className="login-form"> 
        <img src="/src/assets/user-cicrle-svgrepo-com.svg" alt="User Icon" className="usuario img" />

    
        <form onSubmit={handleSubmit}>

          <input 
            type="text" 
            placeholder="Username" 
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
    
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember">
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label> Remember me</label>
          </div>

         <div className="login-actions">
            <button type="submit">Sign in</button>
            <div className="forgot">Forgot password?</div>
         </div>
         </form>
      </div>
    </div>
  );
};

export default Login;
