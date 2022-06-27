import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@material-ui/core';
import { useState } from 'react';
import { InputLabel } from '@mui/material';
import { useEffect } from 'react';


const theme = createTheme();

export default function CustomerService(props) {
    const [service, setService] = useState("בחר");
    const [arrayServices, setArrayServices] = useState([]);


    const sendRequest = (event) => {
        event.preventDefault();

        axios.put(`https://localhost:44382/api/Service?service=${service}&password=${props.password}`)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err))
    };

    const handleChange = (event) => {
        setService(event.target.value);
    };

    useEffect(() => {
        console.log("v")
        axios.get(`https://localhost:44382/api/Service`)
            .then(res => {
                console.log(res.data);
                setArrayServices(res.data);
            }).catch(err => console.log(err))
    }, [])

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
                    <>
                        <InputLabel id="demo-simple-select-label">בחר את סוג השירות הרצוי</InputLabel>
                        <Box sx={{ minWidth: 200 }}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleChange}
                                value={service}
                            >
                                {arrayServices.map((item, index) => (
                                    <MenuItem value={item.Duration}>{item.Detail}</MenuItem>
                                ))}
                            </Select>
                        </Box>
                        <h1 align="center">לידיעתך</h1><h3 align="center">
                            החברה מתחייבת לספק שירות תוך שלושה ימי עסקים
                            החברה תיידע אותך יום לפני על הזמן המשוער של הגעת הטכנאי
                        </h3><Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={sendRequest}
                        >
                            שלח בקשה
                        </Button>
                    </>
                </Box>
            </Container>
        </ThemeProvider>

    )


}