import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'key=KEY';

//Fetching posts from server
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values) //Second argument is the object or data we want to send to the API
    .then(() => callback()); //Make the API request, after the it has been completed, call the callback.

  return {
    type: CREATE_POST,
    payload: request
  }
}