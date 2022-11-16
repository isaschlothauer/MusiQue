/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import PropTypes from "prop-types";
import TopGenres from "../components/TopGenres";
import ShuffleButton from "../components/shuffleButton";
import Footer from "../components/footer";
import MostPopular from "./MostPopular";

import styles from "./genres.module.css";
import TrendingArtists from "./TrendingArtists";
import TrendingArtistsHidden from "./TrendingArtistsHidden";

function GenrePage({ title, mainText, image, link, Tlink }) {
  GenrePage.propTypes = {
    title: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    Tlink: PropTypes.string.isRequired,
  };
  // eslint-disable-next-line no-unused-vars
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
  const [accessToken, setAccessToken] = useState("");
  const [popular, setPopular] = useState("");
  const [trending, setTrending] = useState("");
  const [hidden, setHidden] = useState(false);

  const [currentPlaying, setCurrentPlaying] = useState("");

  const [playingOrPaused, setPlayingOrPaused] = useState(false);

  const handlePreviewClick = (url) => {
    if (currentPlaying === url) {
      setPlayingOrPaused(!playingOrPaused);
    } else {
      setPlayingOrPaused(true);
    }
    setCurrentPlaying(url);
    console.log(url);
  };

  const shuffle = (array) => {
    const output = array;
    for (let i = output.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = output[i];
      output[i] = output[j];
      output[j] = temp;
    }
    return output;
  };

  const handleShuffle = () => {
    if (popular == null || popular === "") return;
    // () => shuffle(popular.tracks.items)
    // popular: object
    // tracks: object
    // items: array

    // Way 1
    setPopular({
      ...popular,
      tracks: { ...popular.tracks, items: shuffle(popular.tracks.items) },
    });
    setCurrentPlaying(false);

    // Way 2
    // const newItems = shuffle(popular.tracks.items);
    // const newTracks = { ...popular.tracks, items: newItems };
    // const newPopular = { ...popular, tracks: newTracks };
    // setPopular(newPopular);
  };

  const handleClick = () => {
    setHidden((current) => !current);
  };

  //  USE EFFECT FOR TOKEN

  useEffect(() => {
    const abortController = new AbortController();
    const abortSignal = abortController.signal;
    // API Access Token
    const authParameters = {
      method: "POST",
      signal: abortSignal,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        // eslint-disable-next-line prefer-template
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch(TOKEN_ENDPOINT, authParameters)
      .then((res) => res.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((info) => setAccessToken(info.access_token))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
    return () => {
      // Cancelling fetch request
      abortController.abort();
    };
  }, []);

  //  USE EFFECT FOR POPULAR

  useEffect(() => {
    const abortController = new AbortController();
    const abortSignal = abortController.signal;
    if (!accessToken == null) return {};
    fetch(link, {
      method: "GET",
      signal: abortSignal,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-bitwise
      .then((result) => setPopular(result) & console.log("POPULAR", result))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
    return () => {
      // Cancelling fetch request
      abortController.abort();
    };
  }, [accessToken]);

  //  USE EFFECT FOR TRENDING

  useEffect(() => {
    if (accessToken == null) return;
    fetch(Tlink, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-bitwise
      .then((result) => setTrending(result) & console.log("TRENDING", result))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
  }, [accessToken]);

  return (
    <div className={styles.Rock}>
      <header className={styles.headerGenres}>
        <TopGenres />
        <section className={styles.genreMain}>
          <div className={styles.genreTextAndImg}>
            <div className={styles.genreText}>
              <h1>{title}</h1>
              <p className={styles.pText}>{mainText}</p>
            </div>
            <div className={styles.rockImg}>
              <img alt="electric-guitar" src={image} width={350} />
            </div>
          </div>
        </section>
      </header>
      <section className={styles.mostPopular}>
        <ReactHowler
          src={[currentPlaying]}
          playing={playingOrPaused}
          volume={0.3}
          html5
          format="mp3"
        />
        <h2>Most Popular</h2>
        {popular.tracks != null && (popular.tracks.items != null) != null ? (
          <>
            {popular.tracks.items.slice(0, 5).map((song) => (
              <MostPopular
                name={song.track.name}
                image={song.track.album.images[1].url}
                artist={song.track.artists[0].name}
                url={song.track.external_urls.spotify}
                preview={song.track.preview_url}
                setUrl={handlePreviewClick}
                iconStatus={
                  song.track.preview_url === currentPlaying
                    ? playingOrPaused
                    : false
                }
                // isStart = {song.track.preview_url === currentPlaying && playingOrPaused}
              />
            ))}
            <ShuffleButton className={styles.suffle} onClick={handleShuffle} />
          </>
        ) : (
          <h2>Tracks loading...</h2>
        )}
      </section>

      <section className={styles.trending}>
        <h2 className={styles.h2trend}>Trending Artists</h2>
        {trending.artists != null &&
        (trending.artists.items != null) != null ? (
          <>
            <div className={styles.trendingArtistsContainer}>
              {trending.artists.items.slice(0, 5).map((musician) => (
                <TrendingArtists
                  artist={musician.name}
                  followers={musician.followers.total}
                  image={musician.images[0].url}
                />
              ))}
            </div>
            {hidden && (
              <div className={styles.trendingArtistsContainerhid}>
                {trending.artists.items.slice(4, 8).map((musician) => (
                  <TrendingArtistsHidden
                    artist={musician.name}
                    followers={musician.followers.total}
                    image={musician.images[0].url}
                  />
                ))}
              </div>
            )}
            <button
              type="button"
              className={`${styles.btn3}`}
              style={{
                transform: hidden ? "rotate(225deg)" : "rotate(45deg)",
                marginTop: hidden ? "5rem" : "4rem",
                marginBottom: hidden ? "1rem" : "2rem",
              }}
              onClick={handleClick}
            >
              {}
            </button>
          </>
        ) : (
          <h2>Tracks loading...</h2>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default GenrePage;
