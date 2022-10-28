import React from "react";
import HeaderM from "./Header.module.css";

function Header() {
  return (
    <div className={HeaderM.header}>
      <img src="src/assets/musiqueLogo.png" alt="logo" />
      <h2 className={HeaderM.headerFirsttext}>
        musiQue presents you a new opportunity to explore the world of music.
      </h2>
      <p className={HeaderM.headerSecondtext}>
        Find out more about your favorite genres, discover new songs, and check
        the recommendations by our team of curators!
      </p>
    </div>
  );
}

export default Header;
