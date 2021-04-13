import classes from './MyFriends.module.css'
import MyFriend from "./MyFriend/MyFriend";

const MyFriends = (props) => {
    let friendsData = props.state.friends.map(friend => <MyFriend friend={friend} key={friend.id}/>);

    return (
        <div>
            <div className={classes.friendsTitle}>List friends online</div>
            <div className={classes.list}>
                { friendsData }
            </div>
        </div>

    );
}

export default MyFriends;