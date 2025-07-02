import { useSelector } from "react-redux";
import s from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import useTheme from "../../hooks/useTheme";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <Navigation />
        <div className={s.themeToggleContainer}>
          <button
            onClick={toggleTheme}
            className={s.themeToggleBtn}
            title={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};
export default AppBar;
