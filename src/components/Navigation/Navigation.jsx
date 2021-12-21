import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { Routes } from "react-router";

const Navigation = () => (
  <nav className={s.nav}>
    {/* <Routes> */}
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>

    <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
      Movies
    </NavLink>
    {/* </Routes> */}
  </nav>
);

export default Navigation;
