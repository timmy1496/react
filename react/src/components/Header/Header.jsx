import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/c1/ae/3d/c1ae3d6d-8629-acd0-6ec6-8fd4e4a1b9b8/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
                alt=""/>
            <div className={s.loginBlock}>
                { props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;