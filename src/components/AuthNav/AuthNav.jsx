import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.AuthNav}>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Register
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
