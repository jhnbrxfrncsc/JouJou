import * as yup from 'yup';

export default yup.object().shape({
    title: yup
        .string("Enter your name..")
        .required("Title is required!"),
    author: yup  
        .string("Enter your name..")
        .required("Author is required!"),
    description: yup
        .string("Enter you email")
        .required("Description is required"),
    image: yup
        .string()
        .required("Image is required")
});