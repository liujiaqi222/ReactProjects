import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';

export const fetchPosts = () => axios.get('/posts');
export const createPostApi = newPost => axios.post('/posts', newPost);



