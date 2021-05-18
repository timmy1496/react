import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    posts: [
        {id: 1, likeCount: 4, message: 'Hi, how are you?'},
        {id: 2, likeCount: 22, message: 'It\'s my first post'},
    ],
    profile: {},
    profileStatus: '',
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: action.text,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile,
            }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.profileStatus
            };
        }
        default :
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});

export const getUserProfileThunk = (userId) => async (dispatch) => {
    let response = await profileApi.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
};

const setUserProfileStatus = (status) => {
    return {
        type: SET_PROFILE_STATUS,
        profileStatus: status,
    };
}
export const getUserProfileStatus = (userId) => {
    return (dispatch) => {
        profileApi.getProfileStatus(userId).then(response => {
            dispatch(setUserProfileStatus(response.data));
        });
    }
}

export const updateUserProfileStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserProfileStatus(status));
            }
        });
    }
};

export default profileReducer;