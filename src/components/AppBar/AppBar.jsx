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
      <Navigation />
      <div className={s.themeToggleContainer}>
        <button
          onClick={toggleTheme}
          className={s.themeToggleBtn}
          title={
            theme === "light" ? "Увімкнути темну тему" : "Увімкнути світлу тему"
          }
          aria-label={
            theme === "light" ? "Увімкнути темну тему" : "Увімкнути світлу тему"
          }
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
export default AppBar;
