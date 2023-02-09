import React from "react";
import "./SpotifyLogoLittle.css";
import spotifyIconLittle from "../assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png";

function SpotifyLogoLittle() {
  return (
    <img
      src={spotifyIconLittle}
      alt="spotify-icon"
      className="spotifyIconLittle"
      width={28}
    />
  );
}

export default SpotifyLogoLittle;
