import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div className={classes}>
            <Paginator {...props}/>
            {
                props.users.map(u =>
                   <User key={u.id}
                         user={u}
                         followingInProgress={props.followingInProgress}
                         unfollow={props.unfollow}
                         follow={props.follow}/>
                )
            }
        </div>
    );
}

export default Users;