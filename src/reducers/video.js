import { handleActions } from 'redux-actions'

export default handleActions({
    LOAD_VIDEOS: (state, action) => {
        return {
            ...state,
            list: action.payload

        }
    }
}, {
    list: {},
})
