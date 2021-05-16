import axios from 'axios';

const blogUrl = "http://localhost:5000/api/blogs";
const userUrl = "http://localhost:5000/api/users";

export const apiGetBlogs = () => axios.get(blogUrl);
export const apiPostBlog = (newBlog) => axios.post(blogUrl, newBlog);
export const apiDeleteBlog = (blogId) => axios.delete(`${blogUrl}/${blogId}`);
export const apiPostUser = (userInfo) => axios.delete(userUrl, userInfo);