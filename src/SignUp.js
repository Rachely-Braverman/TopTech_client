import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate()

  const [newUser, setNewUser] = React.useState({
    Name: "",
    Phone: "",
    Floor: 0,
    ApartmentNumber: 0,
    Gmail: "",
    Password: "",
    Note: "",
    LocationX: 0,
    LocationY: 0
  })

  const API_KEY='AIzaSyClipRWfdUp-_0e1s5kjNNUdSFT7b9Pio8';
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newUser)
    axios.post('https://localhost:44382/api/Customer', newUser)
      .then(res => {
        console.log(res.data);
        navigate('/customerService');
      }).catch(err => console.log(err))

  };

  
function getCoordinates(address){
  fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key='+API_KEY)
    .then(response => response.json())
    .then(data => {
      const latitude = data.results[0].geometry.location.lat;
      const longitude = data.results[0].geometry.location.lng;
      console.log({latitude, longitude})
      setNewUser({ ...newUser, LocationX: latitude })
      setNewUser({ ...newUser, LocationY: longitude })
    })
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'lightskyblue' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            הרשמה
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="שם"
                  autoFocus
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="מספר פלאפון"
                  name="phone"
                  autoComplete="phone"
                  onChange={(e) => setNewUser({ ...newUser, Phone: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="כתובת מייל"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setNewUser({ ...newUser, Gmail: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="סיסמא"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setNewUser({ ...newUser, Password: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="כתובת"
                  type="address"
                  id="address"
                  autoComplete="new-address"
                  onBlur={(e) => getCoordinates(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="floor"
                  label="קומה"
                  type="number"
                  id="floor"
                  autoComplete="given-num"
                  onChange={(e) => setNewUser({ ...newUser, Floor: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth

                  name="Apartment-number"
                  label="מספר דירה"
                  type="number"
                  id="Apartment-number"
                  autoComplete="given-number"
                  onChange={(e) => setNewUser({ ...newUser, ApartmentNumber: e.target.value })}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              הרשמה
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/signIn" variant="body2">
                  כבר יש לך חשבון? להתחברות
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}