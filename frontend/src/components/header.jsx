import React from "react";
import HeaderM from "./Header.module.css";
import musiqueLogo from "../assets/musiQue-imgs/MusiQueLogo.png";

function Header() {
  return (
    <div className={HeaderM.header}>
      <img className={HeaderM.image2} src={musiqueLogo} alt="logo" />
      <h1 className={`${HeaderM.headerFirsttext} ${"h1"}`}>
        MusiQue presents you a new opportunity to explore the world of music.
      </h1>
      <p className={`${HeaderM.headerSecondtext} ${"pItalic"}`}>
        Find out more about your favorite genres, discover new songs, and check
        the recommendations by our team of curators!
      </p>
    </div>
  );
}

export default Header;
