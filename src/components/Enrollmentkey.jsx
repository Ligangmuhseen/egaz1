import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MailLockIcon from '@mui/icons-material/MailLock';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
   
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Enrollmentkey() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      enrollment: data.get('enrollment')
    
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{border:4,borderColor:'lightblue',backgroundColor:'lightblue',paddingBottom:3,marginTop:5}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:'whitesmoke'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'lightblue' }}>
            <MailLockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ENTER THE ENROLLMENT KEY
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="enroll"
              placeholder='Obtain the enrollment key from your Manager'
              label="enrollment code"
              name="enrollment"
              autoComplete="code"
              autoFocus
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT KEY
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/trainee/materials" variant="body2">
                  Back
                </Link>
              </Grid>
              <Grid item>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
    
      </Container>
    </ThemeProvider>
  );
}