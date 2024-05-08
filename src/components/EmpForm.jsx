



import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const EmpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Handle response as needed
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Container sx={{ mt: 4, pt: 4 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Paper elevation={3} sx={{ p: 4, background: '#B2FFFF' }}>
              <Typography variant="h4" align="center" color="primary" gutterBottom>
                EMPLOYEE FORM
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ background: 'lightblue' }} // Change background color of input field
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Designation"
                      variant="outlined"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      sx={{ background: 'lightblue' }} // Change background color of input field
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Location"
                      variant="outlined"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      sx={{ background: 'lightblue' }} // Change background color of input field
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Salary"
                      variant="outlined"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      sx={{ background: 'lightblue' }} // Change background color of input field
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth type="submit" sx={{ background: 'green' }}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EmpForm;
