import { handleActions } from 'redux-actions'

export default handleActions({
    LOAD_VIDEOS: (state, action) => {
        return {
            ...state,
            list: action.payload

        }
    },
    LOAD_IMAGES: (state, action) => {
        return {
            ...state,
            list: []
        }


    },
    DETAIL_VIDEO: (state, action) => {
        return {
            ...state,
            detail: action.payload

        }
    },
    STATUS: (state, action) => {
        return {
            ...state,
            active: action.payload === 'video'

        }
    }
}, {
    list: [],
    detail: [],
    active: false
})
