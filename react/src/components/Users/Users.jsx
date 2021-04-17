import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";

const Users = (props) => {

    let pagesCount = props.totalUserCount / props.pageSize;
    let pages = [];

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div className={classes}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? classes.selectedPage : ''}
                                 onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""
                                     className={classes.avatar}/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(u.id)}>Follow</button>}
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

export default Users;