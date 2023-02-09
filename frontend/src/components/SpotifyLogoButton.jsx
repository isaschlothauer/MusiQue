import React from "react";
import "./spotifyButton.css";
import btnStyles from "./Button.module.css";
import Logo from "../assets/spotify-icons-logos/logos/spotify-logo.svg";

function SpotifyLogoButton() {
  return (
    <button type="button" className={btnStyles.btn}>
      <img
        alt="spotify-logo-button"
        // eslint-disable-next-line no-octal-escape
        src={Logo}
        className={btnStyles.logo}
      />
    </button>
  );
}
export default SpotifyLogoButton;
