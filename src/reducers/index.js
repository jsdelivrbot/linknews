import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducerPosts';

const rootReducer = combineReducers({
  //Available as a state
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
