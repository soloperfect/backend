


import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    axios
      .post("http://localhost:3100/api/login", user)
      .then((res) => {
        alert(res.data.message);
        sessionStorage.setItem('userToken', res.data.token);
        navigate('/blogs');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(to right top, #004d40, #00695c, #008e76, #00b58f, #00d8a6)' }}>
      <Container maxWidth="sm" style={{ backgroundColor: '#C8E6C9', border: 'solid 3px pink', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.3)' }}>
        <Typography variant='h5' style={{ marginBottom: '20px', color: '#004d40' }}> LOGIN FORM</Typography>
        <TextField variant='outlined' label='UserName' name="username" onChange={inputHandler} style={{ margin: '10px 0' }} />
        <TextField variant='outlined' label='Password' type="password" name="password" onChange={inputHandler} style={{ margin: '10px 0' }} />
        <Button variant='contained' color='success' style={{ margin: '10px 0', background: '#00b58f', color: 'white' }} onClick={addHandler}>Submit</Button>
        <Typography><Link to={'/sign'} style={{ color: '#00b58f', textDecoration: 'none' }}>New user</Link></Typography>
      </Container>
    </div>
  );
}

export default Login;
