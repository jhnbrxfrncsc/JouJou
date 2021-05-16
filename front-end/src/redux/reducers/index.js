import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import userReducer from './userReducer';

export default combineReducers({
    blogReducer,
    userReducer
})