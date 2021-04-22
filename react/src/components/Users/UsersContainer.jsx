import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage, setFollowingProgress,
    SetToggle,
    setTotalUserCount,
    unfollow,
    usersSet
} from '../../redux/users-reducer';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../../api/api";

class UsersApiComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        this.props.SetToggle(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.SetToggle(false);
            this.props.usersSet(response.items);
            this.props.setTotalUserCount(response.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.SetToggle(true);
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.setFollowingProgress(true);
            this.props.SetToggle(false);
            this.props.usersSet(response.items);
        });
    };

    unfollow = (userId) => {
        this.props.setFollowingProgress(true, userId);
        usersApi.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                this.props.unfollow(userId);
            }
            this.props.setFollowingProgress(false, userId);
        });
    }

    follow = (userId) => {
        this.props.setFollowingProgress(true, userId);
        usersApi.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                this.props.follow(userId);
            }
            this.props.setFollowingProgress(false, userId);
        });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.unfollow}
                    follow={this.follow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID));
//         },
//         setUsers: (users) => {
//             dispatch(usersSetAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUserCount: (count) => {
//             dispatch(setTotalUserCountAC(count));
//         },
//         SetToggle: (isFetching) => {
//           dispatch(SetToggleAC(isFetching));
//         }
//     };
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    usersSet,
    setCurrentPage,
    setTotalUserCount,
    SetToggle,
    setFollowingProgress,
})(UsersApiComponent);

export default UsersContainer;