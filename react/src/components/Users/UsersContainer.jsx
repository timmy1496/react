import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    unfollowAC,
    usersSetAC
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersApiComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    };

    onPageChanged  = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    unfollow = (userId) => {
        this.props.unfollow(userId);
    }

    follow = (userId) => {
        this.props.follow(userId);
    }

    render() {
        return (
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.unfollow}
                follow={this.follow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(usersSetAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (count) => {
            dispatch(setTotalUserCountAC(count));
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;