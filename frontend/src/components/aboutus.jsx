import React from "react";
import Aboutus from "./Aboutus.module.css";

function AboutUs() {
  return (
    <div className={Aboutus.aboutus}>
      <h2 className={Aboutus.aboutustitle}> About Us</h2>
      <p className={Aboutus.aboutustext}>
        Life is full of mysterious delights, but the one that we can’t live
        without is music. It accompanies us every day, an art that’s
        intrinsically connected with who we are. Discovering music is a cheer
        pleasure, one that our musiQue team is passionate to share with you! We
        aim to provide our visitors with a useful mean to discover the musical
        world, such as accessing top charts, discovering new songs and new
        artists, as well as providing an environment to curate music in all its
        amazement!
      </p>
      <img src="src/assets/musiqueLogo.png" alt="logo" />
    </div>
  );
}

export default AboutUs;
