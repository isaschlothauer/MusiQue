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

  // HANDLE SONG PLAYING, INCLUDING PAUSING PREVIOUSLY PLAYED SONG
  // THE CODE ALSO CHANGES THE PLAY/PAUSE BUTTON (SEE PROPS OF POPULAR CONTAINER)
  // TWO USESTATE TO: SAVE THE VALUE OF THE SONG BEING PLAYED; SAVE THE STATUS OF THE PLAY/PAUSE BUTTON

  const [currentPlaying, setCurrentPlaying] = useState(""); // SONG USESTATE
  const [playingOrPaused, setPlayingOrPaused] = useState(false); // BUTTON USESTATE

  const handlePreviewClick = (url) => {
    // WE PASS AN URL AS ARGUMENT. HERE, WE SHOULD PROP THE PREVIEW (SEE IN POPULAR CONTAINER)
    if (currentPlaying === url) {
      // IF CURRENT SONG URL BEING PLAYED IS THE SAME AS THE URL WE PASS AS ARGUMENT
      setPlayingOrPaused(!playingOrPaused); // WE ARE GOING TO SET THE CURRENTSONG BEING PLAYED AS FALSE, WHICH IS PAUSING IT
    } else {
      setPlayingOrPaused(true); // HOWEVER, IF IT DOES NOT MATCH, LET'S PLAY THE SONG!
    }
    setCurrentPlaying(url); // EITHERWAY; WHETHER THERE IS A SONG OR NOT, THE DEFAULT PARAMETER OF THIS FUNCTION WHOULD BE SETTING THE SONG TO BE PLAYED URL
    console.log(url);
  };

  // SHUFFLE SHENANINGANS
  // LET'S DEFINE A LOOP FUNCTION TO SCRAMBLE OUR ARRAY FIRST

  const shuffle = (array) => {
    // PASS AN ARRAY AS A PARAMETER
    const output = array;
    for (let i = output.length - 1; i > 0; i -= 1) {
      // I = THE OUTPUT LENGHT, WHICH IS THE ARRAY, AS AN INITIAL PARAMETER. THEN, THE LIMIT IS 0, WHILE WE SUBTRACT 1 to i AS THE LAST PARAMETER
      const j = Math.floor(Math.random() * (i + 1)); // RANDOMIZER FUNCTION
      const temp = output[i]; // HERE WE SCRAMBLE EVERYTHING: THE OUTPUTS INDEX WILL HAVE THE RANDOMIZER FUNCTION. THEN WE SETTLE THAT OUTPUT AS THE INITIAL INDEX...
      output[i] = output[j];
      output[j] = temp; // AND WE'LL DO IT AGAIN AND AGAIN WHILE i IS GREATER THAN 0.
    }
    return output;
  };

  const handleShuffle = () => {
    if (popular == null || popular === "") return; // IF THERE IS NO SONG, WE DON'T EXECUTE THIS FUCTION
    // () => shuffle(popular.tracks.items)
    // popular: object
    // tracks: object
    // items: array

    // Way 1
    setPopular({
      ...popular, // FIGURE OUT THE ARRAY PATH, THEN USE A SPREAD OPERATOR BECAUSE OUR FETCH RETURNS US AN API OBJECT
      tracks: { ...popular.tracks, items: shuffle(popular.tracks.items) }, // IN THIS CASE, WE WANT TO GO TILL TRACKS.ITEMS, WHERE OUR ARRAY IS
    }); // BECAUSE OUR LOOP SCRAMBLES AN ARRAY, THAT'S EXACTLY WHERE WE WANT TO BE.
    setCurrentPlaying(false); // PARTICULAR THING: WHEN WE PRESS THE BUTTON SHUFFLE, WE WANT TO SET ALL CURRENTPLAY STATES TO FALSE. MEANING: SHUFFLE WILL KILL ANY SONG BEING PLAYED

    // Way 2
    // const newItems = shuffle(popular.tracks.items);
    // const newTracks = { ...popular.tracks, items: newItems };
    // const newPopular = { ...popular, tracks: newTracks };
    // setPopular(newPopular);
  };

  // FUNCTION HANDLECLICK FOR THE BUTTON TO REVEAL OTHER ARTISTS ON TRENDING ARTISTS WHILE IN MOBILE
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
        <p className={styles.pTitle}>Most Popular</p>
        {popular.tracks != null && (popular.tracks.items != null) != null ? (
          <>
            {popular.tracks.items.slice(0, 5).map((song) => (
              <MostPopular // PASSING ALL THE PROPS AFTER MAPING. NOTE THE PARTICULAR SETURL AND ICONSTATUS!
                name={song.track.name}
                image={song.track.album.images[1].url}
                artist={song.track.artists[0].name}
                url={song.track.external_urls.spotify}
                preview={song.track.preview_url}
                setUrl={handlePreviewClick} // THAT'S THE ONE FUNCTION TO CONTROL THE PLAY/PAUSE IN OUR PREVIEWS!
                iconStatus={
                  song.track.preview_url === currentPlaying
                    ? playingOrPaused
                    : false
                }
                // iconStatus is a prop that is going to "fetch" a ternary operator to MostPopular component
                // IT SAYS THAT IF PREVIEW_URL IS THE SAME AS THE SONG in CURRENTPLAYING, THAN WE RENDER THE "true" in the icon (PLAY). OTHERWISE, WE RENDER THE "false" (PAUSE)
                // iconStatus = {song.track.preview_url === currentPlaying && playingOrPaused}
              />
            ))}
            <ShuffleButton className={styles.suffle} onClick={handleShuffle} />
          </>
        ) : (
          <p className={styles.pText}>Tracks loading...</p>
        )}
      </section>

      <section className={styles.trending}>
        <p className={styles.pTitle}>Trending Artists</p>
        {trending.artists != null &&
        (trending.artists.items != null) != null ? (
          <>
            <div className={styles.trendingArtistsContainer}>
              {trending.artists.items.slice(0, 5).map((musician) => (
                <TrendingArtists
                  artist={musician.name}
                  followers={musician.followers.total}
                  image={musician.images[0].url}
                /> // MAPPUNG EVERYTHING LIKE IN MOSTPOPULAR.
              ))}
            </div>
            {hidden && ( // HOWEVER HERE WE NEED TO MAP DIFFERENTLY. WE ONLY WANT THE FOLLOWING FOUR ITEMS AFTER THE INITIALL FIVE WE MAPED UPSTAIRS
              <div className={styles.trendingArtistsContainerhid}>
                {trending.artists.items.slice(4, 8).map(
                  (
                    musician // THAT'S WHY I SLICED FROM POSITION 4 TO 8
                  ) => (
                    <TrendingArtistsHidden // BECAUSE THIS SECTION ONLY RENDERS IN A PARTICULAR CONDITION (MOBILE VERSION) I HAD TO KEEP IT IN A SEPARATE MODULE
                      artist={musician.name}
                      followers={musician.followers.total}
                      image={musician.images[0].url}
                    />
                  )
                )}
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
          <h2>Page Loading...</h2>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default GenrePage;
