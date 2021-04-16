import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.getUsers();
    }

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
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
            <div className={classes}>
                <button onClick={this.getUsers}>Get users</button>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""
                                     className={classes.avatar}/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => this.unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => this.follow(u.id)}>Follow</button>}
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </span>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Users;