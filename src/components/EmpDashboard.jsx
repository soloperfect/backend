



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';


const EmpDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
      
    <div >
      <Container>
        <Typography variant="h4" gutterBottom style={{ color: 'white', textAlign: 'center', backgroundColor: '#00BFFF', padding: '10px' }}>EMPLOYEE DASHBOARD</Typography>
        <TableContainer component={Paper} style={{ backgroundColor: '#B2FFFF', color: 'black' }}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#00BFFF' }}>
                <TableCell style={{ color: 'white' }}>ID</TableCell>
                <TableCell style={{ color: 'white' }}>Name</TableCell>
                <TableCell style={{ color: 'white' }}>Email</TableCell>
                <TableCell style={{ color: 'white' }}>City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map(employee => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.address.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default EmpDashboard;
