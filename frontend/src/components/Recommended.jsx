import React from "react";
import styles from "./Recommended.module.css";
import "../App.css";
import Profile from "../assets/Joao.jpg";
import Logo from "../assets/spotify_logo_white.png";

const recs = {
  author: "Joao, Germany/Portugal",
  imgAuthor: { Profile },
  content: `As soon the lyrics start, there is a mention of an individual that
    isn’t “here”, but was greatly dear, which is most likely Syd
    Barrett. Not only they miss him, but also the time when they were
    close. Bound not by blood, but music. Life goes on: we shouldn’t
    hold on for nostalgia, but learn with our past. Sometimes, things
    can’t be avoided, but we can surely learn from them.`,
  songID: "6mFkJmJqdDVQ1REhVfGgd1",
  song: "Wish you were here",
  artist: "PINK FLOYD",
  spotifyUrl: "https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1",
  previewUrl: "https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1",
};
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
              {recs.author}
            </div>
          </div>

          <p className={`${styles.pText} ${"pText"}`}>{recs.content}</p>
          <p className={`${styles.nameMobile} ${"pText"}`}>{recs.author}</p>
        </div>

        <div className={styles.song}>
          <p className={`${styles.songHeadline}`}>Song</p>
          <p className={`${styles.songTitle} ${"pText"}`}>{recs.song}</p>
          <p className={`${styles.artistHeadline}`}>Artist</p>
          <p className={`${styles.artistTitle} ${"pText"}`}>{recs.artist}</p>
          <figure>
            {/* eslint-disable jsx-a11y/media-has-caption */}
            <audio controls src="" />
          </figure>
          <p className={`${styles.artistMobile} ${"pText"}`}>{recs.artist}</p>
          <p className={`${styles.songTitleMobile} ${"pItalic"}`}>
            {recs.song}
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
