import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import s from "./Navigation.module.css";
import { BiHomeHeart } from "react-icons/bi";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        <div className={s.navHome}>
          <BiHomeHeart />
          Home
        </div>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
