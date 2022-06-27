import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import ManagerWorkspace from './ManagerWorkspace';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Manager() {

  const [pass, setPassword] = useState("");
  const [employees, setEmployees] = useState();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://localhost:44382/api/Mamager/?password=${pass}`)
      .then(res => {
        console.log(res.data);
        if (res.data) {
          axios.get(`https://localhost:44382/api/Employee`)
            .then(res => {
              setEmployees(res.data);
              < ManagerWorkspace e = { employees } />
            }
            ).catch(err => console.log(err))
            
        }
        else if (!res.data) {
          swal({
            title: "מתחזה יקר",
            text: "הגישה למנהלים בלבד",
            icon: "warning",
            button: "חזרה"
          });
          navigate('/');
        }


      }).catch(err => console.log(err))


  };

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
            התחברות
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="סיסמא"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              התחברות
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

