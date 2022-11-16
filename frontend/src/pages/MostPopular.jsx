/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactHowler from "react-howler";
import styles from "./genres.module.css";
import SpotifyLogoButton from "../components/SpotifyLogoButton";
import SpotifyLogoLittle from "../components/SpotifyLogoLittle";

// eslint-disable-next-line no-unused-vars
export default function MostPopular({ name, image, artist, url, preview }) {
  // const [play, { stop }] = useSound(yeah, { playbackRate });
  const [playing, setPlaying] = useState(false);
  const [isStart, setStart] = useState(false);

  const handlePauseMusic = () => {
    if (playing === true) {
      setPlaying(playing === false);
    } else {
      setPlaying(playing === true);
    }
  };

  const handleStartPauseButton = () => {
    setStart(!isStart);
  };

  // eslint-disable-next-line no-restricted-syntax
  console.log({ preview });

  return (
    <div className={styles.mostPopularSongsContainer}>
      <div id={styles.popularCoverAndPopularText}>
        <div className={styles.mostPopularSongsCoverSong}>
          <ReactHowler
            src={[preview]}
            html5={true}
            playing={playing}
            volume={0.3}
          />
          <img
            className={styles.mostPopularSongsImg}
            src={image}
            alt="most-popular-song"
            width={150}
          />
          {preview != null ? (
            <button
              type="button"
              onClick={(handlePauseMusic, handleStartPauseButton)}
              className={`isStart ? ${styles.playButton} : ${styles.pauseButton}`}
            >
              {playing ? "" : ""}
            </button>
          ) : (
            ""
          )}
        </div>
        <div className={styles.mostPopularSongsText}>
          <p className={styles.pTitle}>{name}</p>
          <p className={styles.pText}>{artist}</p>
        </div>
      </div>
      <a
        href={url}
        className={styles.linkLittle}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SpotifyLogoLittle />
      </a>
      <a
        href={url}
        className={styles.linkBig}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SpotifyLogoButton />
      </a>
    </div>
  );
}
