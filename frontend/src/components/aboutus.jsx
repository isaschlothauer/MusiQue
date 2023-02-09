import React from "react";
import Aboutus from "./Aboutus.module.css";
import musiqueLogo from "../assets/musiQue-imgs/MusiQueLogo.png";

function AboutUs() {
  return (
    <div className={Aboutus.aboutus}>
      <div className={Aboutus.container}>
        <h2 className={`${Aboutus.aboutustitle} ${"h2"}`}> About Us</h2>
        <p className={`${Aboutus.aboutustext} ${"pText"}`}>
          Life is full of mysterious delights, but the one that we can’t live
          without is music. It accompanies us every day, an art that’s
          intrinsically connected with who we are. Discovering music is a cheer
          pleasure, one that our MusiQue team is passionate to share with you!
          We aim to provide our visitors with a useful mean to discover the
          musical world, such as accessing top charts, discovering new songs and
          new artists, as well as providing an environment to curate music in
          all its amazement!
        </p>
      </div>
      <div className={Aboutus.container2}>
        <img
          className={Aboutus.logo}
          src={musiqueLogo}
          alt="logo"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
}

export default AboutUs;
