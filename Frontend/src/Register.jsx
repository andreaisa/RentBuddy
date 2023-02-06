import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Alert } from '@mui/material';
import './App.css';

// eslint-disable-next-line import/prefer-default-export

export function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConf, setPassConf] = useState('');
  const [success, setSuccess] = useState(null);

  const handleSubmit = () => {
    fetch('http://localhost:3600/users/', {
      method: 'POST',
      body: JSON.stringify({
        userName,
        lastName,
        firstName,
        email,
        password: pass,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json())
      .then((data) => console.log(data));
    console.log(userName);
    setSuccess(true);
  };

  return (
    <>
      {
        success ? (
          <Alert severity="success">You have successfully registered!</Alert>
        ) : (
          <br />
        )
      }

      {
        success === false ? (
          <Alert severity="error">Oops Something went wrong</Alert>
        ) : (
          <br />
        )
      }

      {/* if (success)
      <Alert severity="success">You have successfully registered!</Alert>
      else if (success === false)
      <Alert severity="error">Oops Something went wrong!</Alert>
      else
      <br /> */}

      <div className="auth-form-container">
        <h2>Register</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          <TextField firstname={firstName} id="firstName" name="firstName" label="First Name" margin="normal" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

          <TextField lastname={lastName} id="lastName" name="lastName" label="Last Name" margin="normal" value={lastName} onChange={(e) => setLastName(e.target.value)} />

          <TextField email={email} id="email" name="email" label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />

          <TextField username={userName} id="userName" name="userName" label="Username" margin="normal" value={userName} onChange={(e) => setUserName(e.target.value)} />

          <TextField pass={pass} id="password" name="password" label="Password" type="password" margin="normal" value={pass} onChange={(e) => setPass(e.target.value)} />

          <TextField pass={pass} id="passConf" name="passConf" label="Password Confirmation" type="password" margin="normal" value={passConf} onChange={(e) => setPassConf(e.target.value)} />

          <Button type="button" variant="contained" margin="normal" onClick={() => handleSubmit()}> Register </Button>

        </form>
        {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
        <p>
          Already have an account?
          {' '}
          <Link className="link" to="/Login">Login here</Link>
        </p>
      </div>
    </>
  );
}
export default Register;
