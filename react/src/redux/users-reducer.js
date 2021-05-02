import {usersApi} from "../api/api";

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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };
        case SET_CURRENT_PAGE:
            debugger
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

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return  (dispatch) => {
      dispatch(SetToggle(true));
      dispatch(setCurrentPage(currentPage));
      usersApi.getUsers(currentPage, pageSize).then(response => {
          dispatch(SetToggle(false));
          dispatch(usersSet(response.items));
          dispatch(setTotalUserCount(response.totalCount));
      });
  }
};

export const follow = (userId) => {
    return  (dispatch) => {
       dispatch(setFollowingProgress(true, userId));
        usersApi.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(setFollowingProgress(false, userId));
        });
    }
};

export const unfollow = (userId) => {
    return  (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        usersApi.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(setFollowingProgress(false, userId));
        });
    }
}


export default usersReducer;