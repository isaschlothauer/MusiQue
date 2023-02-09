import React from "react";
import FooterM from "./Footer.module.css";
import spotifyLogo from "../assets/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png";

function Footer() {
  return (
    <div className={FooterM.footer}>
      <img className={FooterM.footerimage} src={spotifyLogo} alt="logo" />
    </div>
  );
}

export default Footer;
