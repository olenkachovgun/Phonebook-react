import React from "react";
import s from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { FaAddressBook, FaLock, FaCloud, FaRocket } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const HomePage = () => {
  const { theme } = useTheme();
  const darkText = theme === "dark" ? s.darkText : "";
  return (
    <div className={s.container}>
      <div className={s.hero}>
        <h1 className={s.title}>
          Your phonebook application
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <p className={s.subtitle}>
          Fast, secure and convenient way to store and manage your contacts in
          the cloud.
        </p>
        <Link to="/register" className={s.ctaBtn}>
          Get Started
        </Link>
      </div>
      <div className={s.features}>
        <div className={`${s.featureItem} ${darkText}`}>
          <FaAddressBook className={s.featureIcon} />
          <h3>Easy Contact Management</h3>
          <p>Add, edit, search and delete contacts in seconds.</p>
        </div>
        <div className={`${s.featureItem} ${darkText}`}>
          <FaLock className={s.featureIcon} />
          <h3>Private & Secure</h3>
          <p>Your data is protected and only accessible to you.</p>
        </div>
        <div className={`${s.featureItem} ${darkText}`}>
          <FaCloud className={s.featureIcon} />
          <h3>Cloud Sync</h3>
          <p>Access your contacts from any device, anytime.</p>
        </div>
        <div className={`${s.featureItem} ${darkText}`}>
          <FaRocket className={s.featureIcon} />
          <h3>Lightning Fast</h3>
          <p>Instant search and smooth experience on any device.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
