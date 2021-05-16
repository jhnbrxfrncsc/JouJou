import React from 'react';

import Form from './Form';

import { Formik } from 'formik';
import Schema from '../../schema/blogSchema';

import {
    Dialog,
    DialogContent,
    IconButton,
} from '@material-ui/core';
import useStyles from './blogsStyles';

import { useDispatch } from 'react-redux';
import { postBlog } from '../../redux/actions/mainAction';

const CreateBlog = ({ open, setOpen }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={handleClose}
        >
            <DialogContent>
                <IconButton
                    className={classes.closeBtn}
                    onClick={()=> handleClose()}
                >
                    X
                </IconButton>
                <Formik 
                    initialValues={{
                        title: "",
                        author: "",
                        description: "",
                        image: ""
                    }}
                    onSubmit={
                        (data, { resetForm }) => {
                            dispatch(postBlog(data));
                            resetForm({ values : '' });
                        }
                    }
                    validationSchema = {Schema}
                    component={Form}
                />
            </DialogContent>
        </Dialog>
    )
}

export default CreateBlog
