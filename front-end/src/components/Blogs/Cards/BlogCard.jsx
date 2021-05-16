import React from 'react';

import moment from 'moment';

// Material UI
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import useStyles from '../blogsStyles';

const Blog = ({ data }) => {
    const classes = useStyles();
    return (
        <Card className={classes.leftFeature}>
            <CardMedia
                className={classes.media}
                image={data.image}
                title="Paella dish"
            />
            <CardContent>
                <Typography 
                    variant="h4" 
                    color="textSecondary"
                    align="center"
                >
                    {data.title}
                </Typography>
                <Box
                    display="flex"
                    justifyContent="space-around"
                >
                    <Typography 
                        variant="h4" 
                        color="textSecondary"
                        align="center"
                    >
                        {data.author}
                    </Typography>
                    <Typography 
                        variant="h4" 
                        color="textSecondary"
                        align="center"
                    >
                        {moment(data.createdAt).fromNow()}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Blog
