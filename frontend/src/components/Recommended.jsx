/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import styles from "./Recommended.module.css";
import "../App.css";
import Profile from "../assets/Joao.jpg";
import Logo from "../assets/spotify_logo_white.png";
import { CLIENT_ID, CLIENT_SECRET } from "./secret";

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
  previewUrl:
    "https://p.scdn.co/mp3-preview/e26e8dce7ef4bcb955ee0b1b4c8316f2daa3b942?cid=774b29d4f13844c495f206cafdad9c86",
};

// data.artists[0].name
// data.id
// data.name
// data.preview_url
// endpoint:  GET https://api.spotify.com/v1/tracks/{id}

function Recommended() {
  const [accessToken, setAccessToken] = useState("");
  const [song, setSong] = useState("");

  useEffect(() => {
    // API ACCESS TOKEN
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((data) => setAccessToken(data.access_token));
  }, []);
  useEffect(() => {
    if (accessToken === "") return;
    const trackParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(`https://api.spotify.com/v1/tracks/${recs.songID}`, trackParameters)
      .then((res) => res.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((data) => {
        const fetchedSong = data;
        const {
          name: songTitle,
          artists,
          external_urls: { spotify: spotifyLink },
        } = fetchedSong;
        const artistTitle = artists.map((artist) => artist.name).join(", ");
        const songData = {
          ...recs,
          artistTitle,
          songTitle,
          spotifyLink,
        };
        setSong(songData); // eslint-disable-next-line no-restricted-syntax
        console.log(data);
        console.log(songData);
      });
  }, [accessToken]);

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
              {song.author}
            </div>
          </div>

          <p className={`${styles.pText} ${"pText"}`}>{song.content}</p>
          <p className={`${styles.nameMobile} ${"pText"}`}>{song.author}</p>
        </div>

        <div className={styles.song}>
          <p className={`${styles.songHeadline}`}>Song</p>
          <p className={`${styles.songTitle} ${"pText"}`}>{song.songTitle}</p>
          <p className={`${styles.artistHeadline}`}>Artist</p>
          <p className={`${styles.artistTitle} ${"pText"}`}>
            {song.artistTitle}
          </p>
          <figure>
            {/* eslint-disable jsx-a11y/media-has-caption */}
            <audio controls src={song.previewUrl} />
          </figure>
          <p className={`${styles.artistMobile} ${"pText"}`}>
            {song.artistTitle}
          </p>
          <p className={`${styles.songTitleMobile} ${"pItalic"}`}>
            {song.songTitle}
          </p>

          <button type="button" className={styles.btn}>
            <a className="active" href={song.spotifyLink}>
              <img className={styles.logo} alt="spotify logo" src={Logo} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
