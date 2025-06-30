import React, { useState } from 'react';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });

  };

  return (

    <div className="loginpage">
      <div className="pink-bar">
        <div className='logo'></div>
        <div className='blog'></div>
        <div className='tagline'></div>

      </div>



      <div className='logimage'>
        <div className="Logheading">You Are Step Closer..</div>
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>

            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;