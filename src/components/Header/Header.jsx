import React from "react";
import s from "./Header.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user.user.name);
  return (
    <header className={s.header}>
      <h2>Auth</h2>

      {user.user && <h3>Welcome, {user.user.name} !</h3>}
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
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
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
