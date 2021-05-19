import React from 'react'

import { 
    // Avatar,
    // Button,
    // Container,
    // Grid,
    // Paper,
    // Typography 
} from '@material-ui/core'

import { Formik } from 'formik';

import SignInSchema from '../../schema/signInSchema';
import LoginForm from './LoginForm';
import { signInUser } from '../../redux/actions/mainAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <>
            <Formik 
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={
                    (data, { resetForm }) => {
                        dispatch(signInUser(data, history));
                        // resetForm({ values : '' });
                    }
                }
                validationSchema = {SignInSchema}
                component={LoginForm}
            />
        </>
    )
}

export default Login;
