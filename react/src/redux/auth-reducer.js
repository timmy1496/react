import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'timmy/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
const setCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});

export const getAuthUserThunkCreator = () => async (dispatch) => {
    let response = await authApi.getAuthProfile();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (data) => async (dispatch) => {
    let response = await authApi.login(data);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserThunkCreator())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}

export const logout = () => async (dispatch) => {
    let response = await authApi.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;