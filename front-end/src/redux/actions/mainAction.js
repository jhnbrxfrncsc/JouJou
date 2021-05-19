import { apiGetBlogs, apiPostBlog, apiPostNewUser, apiPostUser } from '../../api/api';
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
        const { data } = await apiPostUser(userData);
        const { firstName, lastName } = data.result;
        data.result = {
            ...data.result,
            name: `${firstName} ${lastName}`
        }
        console.log(data);
        history.push('/');
        dispatch({ type: SIGNIN, data });
    } catch (error) {
        console.log(error.message)
    }
}

export const signUpUser = (userData, history) => async (dispatch) => {
    try {
        const { data } = await apiPostNewUser(userData);
        const { firstName, lastName } = data.result;
        data.result = {
            ...data.result,
            name: `${firstName} ${lastName}`
        }
        history.push('/');
        console.log(data);
        dispatch({ type: SIGNUP, data });
    } catch (error) {
        console.log(error.error)
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