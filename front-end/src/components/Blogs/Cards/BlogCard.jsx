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
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from '../blogsStyles';

const Blog = ({ data, loading }) => {
    const classes = useStyles();
    return (
        <Card className={classes.leftFeature}>
            {
                loading ? (
                    <>
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
                    </>
                ) : (
                    <Skeleton animation="wave" variant="rect" className={classes.media} height/>
                )   
            }
        </Card>
    )
}

export default Blog
