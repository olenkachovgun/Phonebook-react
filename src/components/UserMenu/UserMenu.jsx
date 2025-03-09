import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import { logoutThunk } from "../../redux/auth/operations";
import { IoIosLogOut } from "react-icons/io";
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      <p className={s.username}>Welcome, {user.user.name}!</p>

      <button onClick={() => dispatch(logoutThunk())} className={s.btnLogout}>
        <IoIosLogOut className={s.iconLogout} />
      </button>
    </div>
  );
};
export default UserMenu;
