import "../App.css";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import MusicCSS from "./WorldMusic.module.css";
import SpotifyLogo from "../assets/Spotify_Logo_RGB_White.png";
import Probass from "../assets/ProbassHardi.png";

function WorldMusic() {
  return (
    <div className={MusicCSS.musicContainer}>
      <div className={MusicCSS.musicMain}>
        <div className={MusicCSS.recContainer}>
          <h2 className={MusicCSS.musicDiscover}>
            Music from around the world
          </h2>
          <div className={MusicCSS.panelBlock}>
            <img
              src={Probass}
              alt="Album cover"
              className={MusicCSS.albumCover}
            />
            <div className={MusicCSS.songInfo}>
              <p className={`${MusicCSS.songTitle} ${"pTitle"}`}>
                ДОБРОГО ВЕЧОРА (WHERE ARE YOU FROM?)
              </p>
              <a href="artist.html" alt="#">
                {/* Link to country's trending list?  */}
                <p className={`${MusicCSS.artist} ${"pItalic"}`}>
                  PROBASS ∆ HARDI
                </p>
              </a>
              <p className={`${MusicCSS.yearPub} ${"pItalic"}`}>2021</p>
              <div className={MusicCSS.shuffle} />
              <p className={MusicCSS.endTxt}>
                More <span className={MusicCSS.endTxt1}>PROBASS ∆ HARDI</span>{" "}
                on
              </p>

              {/* GO to the artist page */}
              <a href="http://www.spotify.com" className={MusicCSS.extLink}>
                <img
                  src={SpotifyLogo}
                  alt="Spotify Icon"
                  className={MusicCSS.spotifyLogo}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMusic;
