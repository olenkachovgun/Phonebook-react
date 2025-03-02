// Створіть компонент Layout, який буде рендерити компонент AppBar і огортати усі маршрути, щоб бути доступним на кожному із них.

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
