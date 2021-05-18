import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

const Users = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={classes}>

            <div>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""
                                         className={classes.avatar}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ?
                                    <button disabled={followingInProgress.some(id => id === user.id)}
                                            onClick={() => unfollow(user.id)}>Unfollow</button> :
                                    <button disabled={followingInProgress.some(id => id === user.id)}
                                            onClick={() => follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </span>
            </div>
        </div>
    );
}

export default Users;