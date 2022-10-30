import React from "react";
import styles from "./Recommended.module.css";
import "../App.css";
import Profile from "../assets/Joao.jpg";
import Logo from "../assets/spotify_logo_white.png";

function Recommended() {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.sectionHeadline}`}>Picked for you with ❤</h2>
      <div className={styles.rec}>
        <div className={styles.recQuote}>
          <div className={styles.profileQuote}>
            <div className={styles.imgContainer}>
              <img className={styles.imgQuote} alt="Joao" src={Profile} />
              <div className={styles.quotation}>“</div>
            </div>
            <div className={`${styles.nameDesktop} ${"pText"}`}>
              {" "}
              Joao, Germany/Portugal
            </div>
          </div>

          <p className={`${styles.pText} ${"pText"}`}>
            As soon the lyrics start, there is a mention of an individual that
            isn’t “here”, but was greatly dear, which is most likely Syd
            Barrett. Not only they miss him, but also the time when they were
            close. Bound not by blood, but music. Life goes on: we shouldn’t
            hold on for nostalgia, but learn with our past. Sometimes, things
            can’t be avoided, but we can surely learn from them.
          </p>
          <p className={`${styles.artistMobile} ${"pText"}`}>
            Joao, Germany/Portugal
          </p>
        </div>

        <div className={styles.song}>
          <p className={`${styles.songHeadline}`}>Song</p>
          <p className={`${styles.songTitle} ${"pText"}`}>Wish you were here</p>
          <p className={`${styles.artistHeadline}`}>Artist</p>
          <p className={`${styles.artistTitle} ${"pText"}`}>Pink Floyd</p>
          <figure>
            {/* eslint-disable jsx-a11y/media-has-caption */}
            <audio controls src="" />
          </figure>
          <p className={`${styles.artistMobile} ${"pText"}`}>PINK FLOYD</p>
          <p className={`${styles.songTitleMobile} ${"pItalic"}`}>
            Wish you were here
          </p>

          <button type="button" className={styles.btn}>
            <a
              className="active"
              href="https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1"
            >
              <img className={styles.logo} alt="spotify logo" src={Logo} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
