import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserThunkCreator = () => {
    return (dispatch) => {
        return authApi.getAuthProfile().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    };
};

export const login = (data) => {
    return (dispatch) => {
        authApi.login(data).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

export default authReducer;