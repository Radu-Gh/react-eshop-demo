import * as constants from './userConstants'

const initialState = {
    data: null,
    loading: false,
    error: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case `${constants.start}`:
            return Object.assign({}, state, {
                loading: true
            });
        case `${constants.updateData}`:
            return Object.assign({}, state, {
                data: action.payload,
                loading: false,
                error: null
            });
        case `${constants.updateError}`:
            return Object.assign({}, state, {
                error: action.payload,
                loading: false
            })
        default:
            return state
    }
}