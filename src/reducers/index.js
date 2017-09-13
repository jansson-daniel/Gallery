import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import image from './image';
import video from './video';

export default combineReducers({
    routeReducer,
    image,
    video
})
