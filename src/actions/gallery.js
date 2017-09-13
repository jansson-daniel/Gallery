import * as request from 'axios';

export const loadImages = (search) => (dispatch) => {
    return request
        .post('/images/load', { 'search': search })
        .then(({ data }) => {
            dispatch({
                type: 'LOAD_IMAGES',
                payload: data
            });
        })
        .catch((error) => {
            console.log('error', error);
        });
};

export const loadVideos = (search) => (dispatch) => {
    return request
        .post('/videos/load', { 'search': search })
        .then(({ data }) => {
            dispatch({
                type: 'LOAD_VIDEOS',
                payload: data
            });
        })
        .catch((error) => {
            console.log('error', error);
        });
};