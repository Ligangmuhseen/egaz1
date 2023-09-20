import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import egaz from "../images/egaz.png";
import { useState } from 'react';

function Register() {
  const [step, setStep] = useState(1);
  const [employeeID, setEmployeeID] = useState('');
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://hrsample.egoz.go.tz/api/employee/${employeeID}`);

      if (response.status === 200) {
        const data = await response.json();
        setUserData(data);
        setStep(2);
      } else {
        setError('EmployeeID not found, no match');
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      setError('Error making API request: ' + error.message);
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();

    

    // Prepare the registration data
    const registrationData = {
      employee_id:employeeID,
      role,
      password,
      name:userData.firstName,
      work_location:userData.workLocation,
      email:userData.email
      // Include other form data if needed
    };
    console.log(registrationData);
   

    try {
      const response = await fetch('http://localhost:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.status === 201) {
        // Registration successful
        console.log('Registration successful');
        // You can also redirect to a success page or perform other actions as needed.
      } else {
        const responseData = await response.json();
        setError(responseData.message || 'Registration failed');
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      setError('Error making registration request: ' + error.message);
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <ThemeProvider theme={createTheme({
      typography: {
        h4: {
          color: 'blue',
          fontSize: 20,
          fontWeight: 'bold'
        }
      }
    })}>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5vh', paddingBottom: '10vh', backgroundColor: 'lightyellow' }}>
        <Grid container>
          <CssBaseline />
          <Grid item xs={12} sm={10} md={15} component={Paper} elevation={6} square sx={{ backgroundColor: 'whitesmoke' }}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h3>step {step}</h3>
              <img className="logo-image" src={egaz} alt="image1" />
              <Typography component="h1" variant="h5">
                Registration
              </Typography>
              {step === 1 && (
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="EmployeeID"
                    label="EmployeeID"
                    type="text"
                    id="employeeid"
                    autoComplete="current-idnpm"
                    value={employeeID}
                    onChange={(e) => setEmployeeID(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!employeeID}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    SUBMIT
                  </Button>
                </Box>
              )}
              {step === 2 && (
                <div>
                  <Typography variant="h4">User Data:</Typography>
                  <p>ID: {userData.id}</p>
                  <p>Name: {userData.firstName} {userData.lastName}</p>
                  <p>Email: {userData.email}</p>
                  <p>WorkLocation: {userData.workLocation}</p>
                  <Button
                    onClick={() => setStep(1)} // Back to step 1
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)} // Proceed to step 3
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Next Step
                  </Button>
                </div>
              )}
              {step === 3 && (
                <Box component="form" noValidate onSubmit={handleRegistrationSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Role"
                    label="Role"
                    type="text"
                    id="role"
                    autoComplete="current-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="ConfirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {/* Display the fetched user data in disabled input fields */}
                  <TextField
                    margin="normal"
                    fullWidth
                    name="UserID"
                    label="User ID"
                    type="text"
                    id="userID"
                    disabled
                    value={userData.id}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="UserName"
                    label="User Name"
                    type="text"
                    id="userName"
                    disabled
                    value={`${userData.firstName} ${userData.lastName}`}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="UserEmail"
                    label="User Email"
                    type="email"
                    id="userEmail"
                    disabled
                    value={userData.email}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="UserWorkLocation"
                    label="User Work Location"
                    type="text"
                    id="userWorkLocation"
                    disabled
                    value={userData.workLocation}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Complete Registration
                  </Button>
                </Box>
              )}
              {error && (
                <div className="error">
                  {error}
                </div>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
