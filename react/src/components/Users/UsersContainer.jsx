import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    SetToggle,
    setTotalUserCount,
    unfollow,
    usersSet
} from '../../redux/users-reducer';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersApiComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        this.props.SetToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                debugger
                this.props.SetToggle(false);
                this.props.usersSet(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    };

    onPageChanged  = (pageNumber) => {
        this.props.SetToggle(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.SetToggle(false);
                this.props.usersSet(response.data.items);
            });
    };

    unfollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "773e312e-d947-42e8-81f9-3705b58e0e8c"
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unfollow(userId);
                }
            });
    }

    follow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "773e312e-d947-42e8-81f9-3705b58e0e8c"
                },
            })
            .then(response => {
               if (response.data.resultCode === 0) {
                   this.props.follow(userId);
               }
            });
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader/>: null}
                <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.unfollow}
                follow={this.follow}
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
})(UsersApiComponent);

export default UsersContainer;