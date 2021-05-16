import { apiGetBlogs, apiPostBlog } from '../../api/api';
import { FETCH, CREATE, SIGNUP, SIGNIN } from '../constants/constants';

export const getBlogs = () => async (dispatch) => {
    try {
        const { data } = await apiGetBlogs();
        
        dispatch({ type : FETCH, payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const postBlog = (product) => async (dispatch) => {
    try {
        const { data } = await apiPostBlog(product);
        dispatch({ type : CREATE, payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const signInUser = (userData, history) => async (dispatch) => {
    try {
        
        history.push('/');
        dispatch({ type: SIGNIN })
    } catch (error) {
        console.log(error)
    }
}

export const signUpUser = (userData, history) => async (dispatch) => {
    try {
        
        history.push('/');
        dispatch({ type: SIGNUP })
    } catch (error) {
        console.log(error)
    }
}


// export const deleteBlog = (blogId) => async (dispatch) => {
//     try {
//         await api.deleteBlog(blogId);
//         dispatch({ type : REMOVE, payload: blogId });
//     } catch (error) {
//         console.log(error.message)    
//     }
// }