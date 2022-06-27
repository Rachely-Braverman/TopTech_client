import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function BasicButtonGroup(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button onClick={() => {navigate('/manager');}}>מנהל</Button>
                <Button onClick={() => navigate('/signIn')}>כניסת עובד</Button>
                <Button onClick={() => navigate('/customer')}>כניסת לקוח</Button>
                <Button onClick={() => navigate('/signUp')}>לקוח חדש</Button>
            </ButtonGroup>
        </div>
    );
}
