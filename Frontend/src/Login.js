/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import './App.css';

export function Login() {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [authToken, setToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    fetch('http://localhost:3600/auth/', {
      method: 'POST',
      body: JSON.stringify({
        userName,
        password: pass,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json())
      .then((data) => {
        setToken(data.AuthToken);
        setTimeout(() => setLoggedIn(true), 1000);
      });
    console.log('you are logged in');
  };
  if (loggedIn) {
    console.log(loggedIn);
    return <Navigate to="/Dashboard" state={{ authToken }} />;
  }
  return (
    <div className="auth-form-container">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>

        <TextField username={userName} id="userName" name="userName" label="Username" margin="normal" value={userName} onChange={(e) => setUserName(e.target.value)} />

        <TextField pass={pass} id="password" name="password" label="Password" type="password" margin="normal" value={pass} onChange={(e) => setPass(e.target.value)} />

        <Button variant="contained" margin="normal" onClick={() => handleSubmit()}> Login </Button>

      </form>

      <p>
        Don&apos;t have an account?
        {' '}
        <Link className="link" to="/Register">Register here</Link>
      </p>
    </div>
  );
}
export default Login;
