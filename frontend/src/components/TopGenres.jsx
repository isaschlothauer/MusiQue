import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import styles from "./TopGenres.module.css";

function TopGenres() {
  const navigate = useNavigate();
  return (
    <div className={styles.logoButtonBack}>
      <div className={styles.logo}>
        <img src="src\assets\musiQue-imgs\MusiQueLogo.png" alt="go-back-home" />
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
                  src="src\assets\musiQue-imgs\go-back-home.png"
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
