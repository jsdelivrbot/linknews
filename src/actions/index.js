import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';

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

//Create post to the server
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values) //Second argument is the object or data we want to send to the API
    .then(() => callback()); //Make the API request, after the it has been completed, call the callback.

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  //Setting the GET request to the URL of the server
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}


export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id //We are deleting just the post associated with the id we don't need to go on the application state level. So payload is not request.
  }
}