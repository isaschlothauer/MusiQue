import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import logoButtonBack from "../assets/musiQue-imgs/MusiQueLogo.png";
import buttonBack from "../assets/musiQue-imgs/go-back-home.png";

import styles from "./TopGenres.module.css";

function TopGenres() {
  const navigate = useNavigate();
  return (
    <div className={styles.logoButtonBack}>
      <div className={styles.logo}>
        <img src={logoButtonBack} alt="go-back-home" />
      </div>
      <div className={styles.buttonBack}>
        <Routes>
          <Route
            path="/"
            element={
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                className={styles.buttonBackDiv}
                onClick={() => navigate("/")}
              >
                <img
                  src={buttonBack}
                  alt="go-back-home"
                  className="buttonBack"
                  width={25}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default TopGenres;
