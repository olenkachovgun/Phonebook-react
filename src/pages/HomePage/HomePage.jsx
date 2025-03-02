import React from "react";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        {" "}
        Task manager welcome page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
