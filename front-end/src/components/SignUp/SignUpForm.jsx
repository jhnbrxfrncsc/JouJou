import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Form as Forms } from 'formik';
// Material UI
import useStyles from './signUpStyles';
import {
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    Typography
} from '@material-ui/core';
import Textfield from '../Textfield';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const LoginForm = ({ handleSubmit, handleClick }) => {
    const classes = useStyles();
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleClickShowPassword1 = async () => {
        setShowPassword1(!showPassword1);
    }
    const handleClickShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    }

    return (
        <Box
            className={classes.paper}
        >
        <Forms 
            onSubmit={handleSubmit}
            autoComplete="off"
            className={classes.form}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography 
                        variant="h5"
                        color="primary" 
                        align="center"
                        gutterBottom
                        className={classes.font1}
                    >
                        <b> Sign Up</b>
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Textfield 
                        name="firstName"
                        label="First Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Textfield 
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        color="primary" 
                    />
                </Grid>
                <Grid item xs={12}>
                    <Textfield 
                        name="email"
                        label="Email"
                        fullWidth
                        color="primary" 
                    />
                </Grid>
                <Grid item xs={12}>
                    <Textfield 
                        name="password"
                        label="Password"
                        color="primary" 
                        fullWidth
                        type={ showPassword1 ? "text" : "password"}
                        InputProps={{
                            endAdornment : 
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword1}
                                    >
                                        { showPassword1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Textfield 
                        name="confirmPassword"
                        label="Confirm Password"
                        fullWidth
                        color="primary" 
                        type={ showPassword2 ? "text" : "password"}
                        InputProps={{
                            endAdornment : 
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword2}
                                    >
                                        { showPassword2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        color="primary"
                        variant="contained" 
                        fullWidth
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Typography
                            className={classes.font2}
                            variant="subtitle2"
                        >
                            ALREADY HAVE AN ACCOUNT?
                        </Typography>
                        <Typography
                            className={classes.font2}
                            variant="subtitle2"
                            component={Link}
                            to="/login"
                        >
                            <em>SIGN IN</em>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Forms>
        </Box>
    )
}

export default LoginForm;
