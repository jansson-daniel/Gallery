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

    }
}, {
    list: {}
})
