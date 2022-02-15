import { signInWithGoogle, signInWithFacebook, signOut } from '../../apis/firebase/firebase';
import * as constant from './userConstants'


function startLoading() {
    return {
        type: constant.start
    }
}
function updateUserData(payload) {
    return {
        type: constant.updateData,
        payload
    }
}
function updateUserError(payload) {
    return {
        type: constant.updateError,
        payload
    }
}

export function loginWithGoogle() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export function loginWithFacebook() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithFacebook().then(userData => {
            dispatch(updateUserData(userData.user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}