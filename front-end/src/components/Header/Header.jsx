import React, { useState, useEffect } from 'react';

// Material UI
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './headerStyles';

// Router
import { Link, useHistory, useLocation } from 'react-router-dom';

// Icon
import { ImBlogger2 } from 'react-icons/im'
import { useDispatch } from 'react-redux';

import { LOGOUT } from '../../redux/constants/constants';

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    useEffect(() => {
        let mounted = true;
        // const token = user?.token;
        if(mounted) {
            setUser(JSON.parse(localStorage.getItem('profile')));
        }
        return () => {
            mounted = false;
        }
    }, [location]);

    const handleLogout = () => {
        dispatch({ type: LOGOUT })
        history.push('/login');
        setUser(null);
    }   

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.navbar}>
                    <Typography
                        component={Link}
                        to="/"
                        variant="h4"
                        className={classes.logo}
                        color="primary"
                    >
                        <ImBlogger2 />
                    </Typography>
                    {
                        user ? (
                            <Box className={classes.profile}>
                                <Avatar 
                                    className={classes.avatar}
                                    alt={user.result.name}
                                    src={user.result.imageUrl}
                                >
                                    {user.result.name.charAt(0)}
                                </Avatar>
                                <Typography 
                                    className={classes.userName}
                                    variant="h6"
                                >
                                    {user.result.name}
                                </Typography>
                                <Button
                                    component={Link}
                                    to="/login"
                                    variant="contained"
                                    color="primary"
                                    className={classes.loginBtn}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </Box>
                        ) : (
                            <Button
                                component={Link}
                                to="/login"
                                variant="contained"
                                color="primary"
                                className={classes.loginBtn}
                                // onClick={handleLogin}
                            >
                                Login
                            </Button>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
