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
            list: {}
        }

    },
    DETAIL: (state, action) => {
        console.log(action.payload)
        return {
            ...state,
            detail: action.payload
        }
    }
}, {
    list: {},
    detail: []
})
