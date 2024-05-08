




import React from 'react';
import { Container } from '@mui/material';
import bg from '../components/bg.gif';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Navbar />
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ maxWidth: '70%', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
          <h1 style={{ color: '#00308F', fontSize: '2.5rem', marginBottom: '1rem' }}>Employee Management Portal</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333' }}>
            Welcome to our employee app! This app helps manage employee information effectively and efficiently.
            From tracking employee profiles to generating insightful reports, our platform simplifies HR tasks.
          </p>
          <div>
            <p style={{ color: '#0039a6', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '2rem' }}>Key Features:</p>
            <ul style={{ color: '#0039a6', fontSize: '1.1rem', paddingLeft: '1.5rem' }}>
              <li>View and update employee profiles with ease.</li>
              <li>Efficiently manage employee data, including personal and professional details.</li>
              <li>Track attendance records and manage time-off requests seamlessly.</li>
              <li>Generate comprehensive reports and analytics for informed decision-making.</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
