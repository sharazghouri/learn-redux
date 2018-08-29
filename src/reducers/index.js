import {combineReducers} from 'redux';
import postReducder from './postReducer';


export default combineReducers({
    posts: postReducder
})