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