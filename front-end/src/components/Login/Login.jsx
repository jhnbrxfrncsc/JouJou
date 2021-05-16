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

const Login = () => {
    return (
        <>
            <Formik 
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={
                    (data, { resetForm }) => {
                        console.log(data);
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
