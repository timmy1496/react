import classes from './MyFriend.module.css';

const MyFriend = (props) => {

    return (
        <div className={classes.friend}>
            <img src='https://pristor.ru/wp-content/uploads/2020/03/%D0%90%D0%B2%D0%B0-%D0%B2-%D0%B2%D0%BA-%D0%B2-%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA%D0%B5-%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-2.jpg' alt=""/>
            { props.friend.name }
        </div>
    );
}

export default MyFriend;