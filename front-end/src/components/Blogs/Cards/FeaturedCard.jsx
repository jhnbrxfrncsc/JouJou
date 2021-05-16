import React from 'react';
import useStyles from '../blogsStyles';
import {
    Card,
    CardContent,
    Typography,
    // IconButton,
    CardMedia,
    Box,
} from '@material-ui/core';

const FeaturedCard = ({data}) => {
    const classes = useStyles();
    return (
        <Card className={classes.rightFeature}>
            <CardMedia
                className={classes.cover}
                image={data.image}
                title="Live from space album cover"
            />
            <Box className={classes.details}>
                <CardContent>
                    <Typography component="h5" variant="h5">
                        {data.title}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

export default FeaturedCard
