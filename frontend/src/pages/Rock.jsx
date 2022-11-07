/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from "react";
import axios from "axios";

import TopGenres from "../components/TopGenres";
import SpotifyLogoButton from "../components/SpotifyLogoButton";
import Footer from "../components/footer";

import styles from "./genres.module.css";

const CLIENT_ID = "d6b767f2085441d5bd7a2c4b59b009a6";
const CLIENT_SECRET = "3db89dc2644044a3baa93a83ca6f7f6c";

// const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

function Rock() {
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // API Access Token
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        // eslint-disable-next-line prefer-template
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch(TOKEN_ENDPOINT, authParameters)
      .then((res) => res.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((info) => setAccessToken(info.access_token))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });

    fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((info) => console.log(info.genres[99]));
  }, []);

  return (
    <div className={styles.Rock}>
      <button type="button" onClick={() => {}}>
        Get Playlists
      </button>

      <header className={styles.headerGenres}>
        <section className={styles.genreMain}>
          <TopGenres />
          <div className={styles.genreTextAndImg}>
            <div className={styles.genreText}>
              <h1>Rock</h1>
              <p className={styles.pText}>
                A fan favourite in musical genres, rock originated in the
                40’s/50’s in North America, the land of “rock n’ roll”! Broadly
                mentioning, rock branches in blues, folk, R&B, country, metal,
                punk, and even fuses with jazz, funk or electronic music, just
                to mention a few. However, we can find a generalized common
                ground, with songs that bear rhythmic drums, a tenderizing
                electric guitar, a sturdy bass and a charismatic lead singer.
              </p>
            </div>
            <div className={styles.rockImg}>
              <img
                alt="electric-guitar"
                src="src\assets\genres-imgs\electricGuitar.png"
                width={350}
              />
            </div>
          </div>
        </section>
      </header>
      <section className={styles.mostPopular}>
        <h2>Most Popular</h2>
        <div className={styles.mostPopularSongsContainer}>
          <div id={styles.popularCoverAndPopularText}>
            <div className={styles.mostPopularSongsCoverSong}>
              <img
                className={styles.mostPopularSongsImg}
                src="src\assets\musiQue-imgs\albumCover4.PNG"
                alt="most-popular-song"
                width={150}
              />
              <div className={styles.playButton} />
            </div>
            <div className={styles.mostPopularSongsText}>
              <h2>Song</h2>
              <p className={styles.pText}>Something about the song</p>
            </div>
          </div>
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
            alt="spotify-icon"
            className={styles.spotifyIconLittle}
            width={28}
          />
          <SpotifyLogoButton />
        </div>
        <div className={styles.mostPopularSongsContainer}>
          <div id={styles.popularCoverAndPopularText}>
            <div className={styles.mostPopularSongsCoverSong}>
              <img
                className={styles.mostPopularSongsImg}
                src="src\assets\musiQue-imgs\albumCover4.PNG"
                alt="most-popular-song"
                width={150}
              />
              <div className={styles.playButton} />
            </div>
            <div className={styles.mostPopularSongsText}>
              <h2>Song</h2>
              <p className={styles.pText}>Something about the song</p>
            </div>
          </div>
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
            alt="spotify-icon"
            className={styles.spotifyIconLittle}
            width={28}
          />
          <SpotifyLogoButton />
        </div>
        <button
          className={`${styles.shuffle} ${styles.pButtons}`}
          type="button"
          onClick={() => {
            // eslint-disable-next-line no-restricted-syntax
            console.log("I was clicked");
          }}
        >
          <img
            alt="spotify-icon-shuffle"
            // eslint-disable-next-line no-octal-escape
            src="src\assets\spotify-icons-logos\icons\01_RGB\02_PNG\Spotify_Icon_RGB_White.png"
            width={20}
          />
          SHUFFLE
        </button>
      </section>
      <section className={styles.trending}>
        <h1>Trending Artists</h1>
        <div className={styles.trendingArtistsContainer}>
          <div className={styles.trendingArtistsDiv}>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\artistImage2.PNG"
            />
            <h2>Jacky Huang</h2>
            <img
              src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
              alt="spotify-icon"
              className={styles.spotifyIcon}
              width={28}
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\artistImage2.PNG"
            />
            <h2>Jacky Huang</h2>
            <img
              src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
              alt="spotify-icon"
              className={styles.spotifyIcon}
              width={28}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Rock;
