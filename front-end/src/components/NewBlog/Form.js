import React from 'react';

// Material UI
import useStyles from './blogsStyles';
import { Form as Forms, useFormikContext } from 'formik';
import {
    Button,
    Grid,
    Typography
} from '@material-ui/core';
import Textfield from '../Textfield';

// Image Upload
import FileBase from 'react-file-base64';



const Form = ({ handleSubmit }) => {
    const classes = useStyles();
    const { setFieldValue } = useFormikContext();
    
    return (
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
                        add <b> NEW BLOG </b>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="title"
                        label="Title"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Textfield 
                        name="description"
                        label="Description"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Textfield 
                        name="author"
                        label="Author"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setFieldValue("image", base64)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        color="primary"
                        variant="contained" 
                        fullWidth
                        type="submit"
                    >
                        Add Blog
                    </Button>
                </Grid>
            </Grid>
        </Forms>
    )
}

export default Form;
