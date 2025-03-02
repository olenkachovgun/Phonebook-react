import React from "react";
import s from "./Header.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <h2>Auth</h2>
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
      </nav>
    </header>
  );
};

export default Header;
