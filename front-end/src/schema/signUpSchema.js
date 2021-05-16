import * as yup from 'yup';

export default yup.object().shape({
    firstName: yup
        .string("Enter your First Name..")
        .required("Your First Name is required!"),
    lastName: yup
        .string("Enter your Last Name..")
        .required("Your Last Name is required!"),
    email: yup
        .string("Enter your email..")
        .email()
        .required("Email is required!"),
    password: yup  
        .string("Enter your password..")
        .required("Password is required!"),
    confirmPassword: yup  
        .string()
        .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: yup.string().oneOf(
                [yup.ref("password")],
                "Both password need to be the same"
            )
        })
});