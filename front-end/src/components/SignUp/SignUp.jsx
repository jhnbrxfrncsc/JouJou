import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actions/mainAction';

// Router
import { useHistory } from 'react-router';

// Formik
import { Formik } from 'formik';

// Components
import SignUpForm from './SignUpForm';
import SignUpSchema from '../../schema/signUpSchema';


const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <>
            <Formik 
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}
                onSubmit={
                    ({ firstName, lastName, email, password }, { resetForm }) => {
                        const newData = { firstName, lastName, email, password };
                        dispatch(signUpUser(newData, history))
                        resetForm({ values : '' });
                    }
                }
                validationSchema = {SignUpSchema}
                component={SignUpForm}
            />
        </>
    )
}

export default SignUp
