import React, { useState, useEffect } from 'react';

// Material UI
import { 
    Box, 
    IconButton, 
    Paper, 
    Typography 
} from '@material-ui/core';
import useStyles from './blogsStyles';

// component
import BlogCard from './Cards/BlogCard';
import FeaturedCard from './Cards/FeaturedCard';

// Icons
import { AiFillFileAdd } from 'react-icons/ai';
import CreateBlog from '../NewBlog/CreateBlog';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../redux/actions/mainAction';

const Blogs = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.blogReducer);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState();
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            dispatch(getBlogs());
            setData(selector[0]);
            setFeatured(selector.slice(1, 5))
        }
        return () => {
            mounted = false;
        }
    }, [dispatch, data, selector]);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <Typography 
                variant="h3" 
                align="center"
                className={classes.font1}
            >
                <b>Blogs</b>
            </Typography>
            <IconButton
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                <AiFillFileAdd />
            </IconButton>
            <CreateBlog open={open} setOpen={setOpen}/>
            <Box
                className={classes.blogContainer}
            >
                {
                    data ? (
                        <BlogCard 
                            data={data} 
                            key={data._id}
                        />
                    ) : (
                        <h1>Empty</h1>
                    )
                }
                <Paper
                    className={classes.paper}
                >
                    {
                        featured ? (
                            featured.map((blog) => {
                                return <FeaturedCard 
                                    data={blog} key={blog._id}
                                />
                            })
                        ) : (
                            <h1>Empty</h1>
                        )
                    }
                </Paper>
            </Box>
        </>
    )
}

export default Blogs;