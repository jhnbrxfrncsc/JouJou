import axios from 'axios';

const blogUrl = "http://localhost:5000/api/blogs";
const signInUrl = "http://localhost:5000/api/users";
const signUpUrl = "http://localhost:5000/api/newUsers";

export const apiGetBlogs = () => axios.get(blogUrl);
export const apiPostBlog = (newBlog) => axios.post(blogUrl, newBlog);
export const apiDeleteBlog = (blogId) => axios.delete(`${blogUrl}/${blogId}`);
export const apiPostUser = (userInfo) => axios.post(signInUrl, userInfo);
export const apiPostNewUser = (userDetails) => axios.post(signUpUrl, userDetails);