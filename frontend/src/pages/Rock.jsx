/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SpotifyLogoButton from "@components/SpotifyLogoButton";

import styles from "./genres.module.css";

// import "./genres.css";
// import axios from "axios";

const CLIENT_ID = "d6b767f2085441d5bd7a2c4b59b009a6";
const CLIENT_SECRET = "3db89dc2644044a3baa93a83ca6f7f6c";

function Rock() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useState("");
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden((current) => !current);
  };

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
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((res) => res.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((data) => setAccessToken(data.access_token))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.App}>
      <header className={styles.headerGenres}>
        <section className={styles.genreMain}>
          <div className={styles.logoButtonBack}>
            <div className={styles.logo}>
              <img
                src="src\assets\musiQue-imgs\MusiQueLogo.png"
                alt="go-back-home"
                width={150}
              />
            </div>
            <div className={styles.buttonBack}>
              <Routes>
                <Route
                  path="/"
                  element={
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                    <div
                      className={styles.buttonBackDiv}
                      onClick={() => navigate("/")}
                    >
                      <img
                        src="src\assets\musiQue-imgs\go-back-home.png"
                        alt="go-back-home"
                        className="buttonBack"
                        width={25}
                      />
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
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
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\ALBUM COVER2.PNG"
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\amlbum cover3.PNG"
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\albumCover4.PNG"
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\albumCover.PNG"
            />
          </div>
          <div className={styles.trendingArtistsContainer}>
            <div className={styles.trendingArtistsDiv}>
              <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\ALBUM COVER2.PNG"
              />
            </div>
          </div>
        </div>
        {hidden && (
          <div className={styles.trendingArtistsContainer}>
            <div className={styles.trendingArtistsDiv}>
              <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\ALBUM COVER2.PNG"
              />
            </div>
            <div className={styles.trendingArtistsDiv}>
              <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\amlbum cover3.PNG"
              />
            </div>
            <div className={styles.trendingArtistsDiv}>
              <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\albumCover4.PNG"
              />
            </div>
            <div className={styles.trendingArtistsDiv}>
              <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\albumCover.PNG"
              />
            </div>
          </div>
        )}
        <button
          type="button"
          className={`${styles.btn3}`}
          onClick={handleClick}
        >
          h
        </button>
      </section>
      <footer>
        <img
          className={styles.footerimage}
          // eslint-disable-next-line no-octal-escape
          src="src\assets\spotify-icons-logos\logos\01_RGB\02_PNG\Spotify_Logo_RGB_Black.png"
          alt="spotify-logo"
        />
      </footer>
    </div>
  );
}

export default Rock;
