// Створіть компонент Layout, який буде рендерити компонент AppBar і огортати усі маршрути, щоб бути доступним на кожному із них.
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <AppBar />
      <Suspense fallback={null}>
        {children}
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
export default Layout;
