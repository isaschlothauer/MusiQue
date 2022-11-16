/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TopGenres from "../components/TopGenres";
import ShuffleButton from "../components/shuffleButton";
import Footer from "../components/footer";
import MostPopular from "./MostPopular";

import styles from "./genres.module.css";
// import TrendingArtists from "./rendingArtists";

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

  const handleClick = () => {
    setHidden((current) => !current);
  };

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
      .then((result) => setPopular(result) & console.log(result))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
    return () => {
      // Cancelling fetch request
      abortController.abort();
    };
  }, [accessToken]);

  useEffect(() => {
    if (accessToken == null) return;
    fetch(Tlink, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setTrending(result));
  }, [accessToken]);

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

    // Way 2
    // const newItems = shuffle(popular.tracks.items);
    // const newTracks = { ...popular.tracks, items: newItems };
    // const newPopular = { ...popular, tracks: newTracks };
    // setPopular(newPopular);
  };

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
              <div className={styles.trendingArtistsDiv}>
                <p className={styles.trendingtext}>
                  {trending.artists.items[0].name}
                </p>
                <p className={styles.trendingtext2}>
                  {trending.artists.items[0].followers.total} followers
                </p>
                <img
                  id={styles.trendingImg}
                  alt="trending-img"
                  src={trending.artists.items[0].images[0].url}
                />
              </div>
              <div className={styles.trendingArtistsDiv}>
                <p className={styles.trendingtext}>
                  {trending.artists.items[1].name}
                </p>
                <p className={styles.trendingtext2}>
                  {trending.artists.items[1].followers.total} followers
                </p>
                <img
                  id={styles.trendingImg}
                  alt="trending-img"
                  src={trending.artists.items[1].images[0].url}
                />
              </div>
              <div className={styles.trendingArtistsDiv}>
                <p className={styles.trendingtext}>
                  {trending.artists.items[2].name}
                </p>
                <p className={styles.trendingtext2}>
                  {trending.artists.items[2].followers.total} followers
                </p>
                <img
                  id={styles.trendingImg}
                  alt="trending-img"
                  src={trending.artists.items[2].images[0].url}
                />
              </div>
              <div className={styles.trendingArtistsDiv}>
                <p className={styles.trendingtext}>
                  {trending.artists.items[3].name}
                </p>
                <p className={styles.trendingtext2}>
                  {trending.artists.items[3].followers.total} followers
                </p>
                <img
                  id={styles.trendingImg}
                  alt="trending-img"
                  src={trending.artists.items[3].images[0].url}
                />
              </div>
              <div className={styles.trendingArtistsDiv}>
                <p className={styles.trendingtext}>
                  {trending.artists.items[4].name}
                </p>
                <p className={styles.trendingtext2}>
                  {trending.artists.items[4].followers.total} followers
                </p>
                <img
                  id={styles.trendingImg}
                  alt="trending-img"
                  src={trending.artists.items[4].images[0].url}
                />
              </div>
            </div>
            {hidden && (
              <div className={styles.trendingArtistsContainerhid}>
                <div className={styles.trendingArtistsDivhid}>
                  <p className={styles.trendingtexthid}>
                    {trending.artists.items[5].name}
                  </p>
                  <p className={styles.trendingtext2hid}>
                    {trending.artists.items[5].followers.total} followers
                  </p>
                  <img
                    id={styles.trendingImg}
                    alt="trending-img"
                    src={trending.artists.items[5].images[1].url}
                  />
                </div>
                <div className={styles.trendingArtistsDivhid}>
                  <p className={styles.trendingtexthid}>
                    {trending.artists.items[11].name}
                  </p>
                  <p className={styles.trendingtext2hid}>
                    {trending.artists.items[11].followers.total} followers
                  </p>
                  <img
                    id={styles.trendingImg}
                    alt="trending-img"
                    src={trending.artists.items[11].images[2].url}
                  />
                </div>
                <div className={styles.trendingArtistsDivhid}>
                  <p className={styles.trendingtexthid}>
                    {trending.artists.items[7].name}
                  </p>
                  <p className={styles.trendingtext2hid}>
                    {trending.artists.items[7].followers.total} followers
                  </p>
                  <img
                    id={styles.trendingImg}
                    alt="trending-img"
                    src={trending.artists.items[7].images[0].url}
                  />
                </div>
                <div className={styles.trendingArtistsDivhid}>
                  <p className={styles.trendingtexthid}>
                    {trending.artists.items[12].name}
                  </p>
                  <p className={styles.trendingtext2hid}>
                    {trending.artists.items[12].followers.total} followers
                  </p>
                  <img
                    id={styles.trendingImg}
                    alt="trending-img"
                    src={trending.artists.items[12].images[0].url}
                  />
                </div>
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
