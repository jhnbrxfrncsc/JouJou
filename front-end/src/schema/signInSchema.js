import * as yup from 'yup';

export default yup.object().shape({
    email: yup
        .string("Enter your email..")
        .email()
        .required("Email is required!"),
    password: yup  
        .string("Enter your password..")
        .required("Password is required!"),
});