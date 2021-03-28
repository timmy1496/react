import { NavLink } from 'react-router-dom';
import MyFriends from '../Profile/MyFriends/MyFriends'

import classes from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.activeLink}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
            <div className={`${classes.item} ${classes.friends}`}>
                <MyFriends state={props.state} />
            </div>
        </nav>
    );
}

export default Navbar;