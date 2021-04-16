import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

const Users = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    };

    const follow = (userID) => {
        props.follow(userID)
    }

    const unfollow = (userID) => {
        props.unfollow(userID)
    }

    return (
        <div className={classes}>
            <button onClick={getUsers}>Get users</button>
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
                                    <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => follow(u.id)}>Follow</button>}
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