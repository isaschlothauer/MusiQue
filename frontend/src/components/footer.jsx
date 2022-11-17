import React from "react";
import FooterM from "./Footer.module.css";

function Footer() {
  return (
    <div className={FooterM.footer}>
      <img
        className={FooterM.footerimage}
        src="src/assets/spotifyLogo.png"
        alt="logo"
      />
    </div>
  );
}

export default Footer;
