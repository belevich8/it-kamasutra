import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink className={s.item} activeClassName={s.active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/dialogs">Messages</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;