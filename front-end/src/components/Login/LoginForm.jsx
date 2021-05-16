import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { Form as Forms } from 'formik';
// Material UI
import useStyles from './loginStyles';
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
import Icon from './Icon';

const LoginForm = ({ handleSubmit }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const googleSuccess = (res) => {
        // console.log(res)
        // "?." Optional chaining operator
        // instead of causing an error if a reference is "NULL"
        // it will return a value of "UNDEFINED"
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'SIGN_IN', data: { result, token } });
            history.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful. Try Again Later.")
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
                        color="secondary" 
                        align="center"
                        gutterBottom
                        className={classes.font1}
                    >
                        <b> Sign In </b>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="email"
                        label="Email"
                        fullWidth
                        color="secondary"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Textfield 
                        name="password"
                        label="Password"
                        fullWidth
                        color="secondary"
                        type={ showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment : 
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                    >
                                        { showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        color="secondary"
                        variant="contained" 
                        fullWidth
                        type="submit"
                    >
                        Login
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <GoogleLogin 
                        clientId="253118257494-6a0ku4ptilarj4h9m9b9lero73dbiavh.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                                variant="contained" 
                                fullWidth
                                type="submit"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                className={classes.googleButton}
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                    >
                        <Typography
                            variant="subtitle2"
                            className={classes.font2}
                        >
                            DON'T HAVE AN ACCOUNT?
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            component={Link}
                            to="/signup"
                            className={classes.font2}
                        >
                            SIGN UP
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Forms>
        </Box>
    )
}

export default LoginForm;
