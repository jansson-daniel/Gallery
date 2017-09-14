import { handleActions } from 'redux-actions'

export default handleActions({
    LOAD_IMAGES: (state, action) => {
        return {
            ...state,
            list: action.payload

        }
    },
    RESET_MEDIA: (state, action) => {
        return {
            ...state,
            list: []
        }


    },
    DETAIL: (state, action) => {
        return {
            ...state,
            detail: action.payload
        }
    },
    STATUS: (state, action) => {
        return {
            ...state,
            active: action.payload === 'image'
        }
    }
}, {
    list: [],
    detail: [],
    active: true
})
