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

export const resetMedia = (search) => (dispatch) => {
    dispatch({
        type: 'RESET_MEDIA',
        payload: null
    });
};

export const activateLoader = () => (dispatch) => {
    dispatch({
        type: 'LOADER',
        payload: null
    });
};

export const resetLoading = () => (dispatch) => {
    dispatch({
        type: 'RESET_LOADING',
        payload: null
    });
};

export const setDetailImage = (image) => (dispatch) => {
    dispatch({
        type: 'DETAIL',
        payload: image
    });
};

export const setDetailVideo = (video) => (dispatch) => {
    dispatch({
        type: 'DETAIL_VIDEO',
        payload: video
    });
};

export const setStatus = (type) => (dispatch) => {
    dispatch({
        type: 'STATUS',
        payload: type
    });
};