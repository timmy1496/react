import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USER = 'SET_TOTAL_COUNT_USER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_COUNT_USER:
            return {
                ...state,
                totalUserCount: action.totalUserCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return  {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            };
        default :
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const usersSet = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUserCount = (count) => ({type: SET_TOTAL_COUNT_USER, totalUserCount: count});
export const SetToggle = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const setFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId});

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(SetToggle(true));
    dispatch(setCurrentPage(currentPage));
    let response = await usersApi.getUsers(currentPage, pageSize);
    dispatch(SetToggle(false));
    dispatch(usersSet(response.items));
    dispatch(setTotalUserCount(response.totalCount));
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        let response = await usersApi.follow(userId);
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(setFollowingProgress(false, userId));
    }
};

export const unfollow = (userId) => {
    return  async (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        let response = await usersApi.unfollow(userId);
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(setFollowingProgress(false, userId));
    }
}

export default usersReducer;