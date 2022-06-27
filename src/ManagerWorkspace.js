import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import BoyIcon from '@mui/icons-material/Boy';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const theme = createTheme();

export default function ManagerWorkspace(props) {

    const activateAlgorithm = (event) => {
        event.preventDefault();
        axios.post(`https://localhost:44382/api/Mamager`)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err))
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        aria-label="contacts"
                    >
                        {props.e.map((item, index) => (
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BoyIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.Name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="start"
                        label="החל מ"
                        type="number"
                        id="start"
                        autoComplete="current-start"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="end"
                        label="עד ל"
                        type="number"
                        id="end"
                        autoComplete="current-end"
                    /> <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={activateAlgorithm}
                    >
                        הפעלת האלגוריתם
                    </Button>
                </Box>
            </Container >
        </ThemeProvider >
    )
}
