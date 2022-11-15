/* eslint-disable react/prop-types */
import React from "react";
import ReactPlayer from "react-player";
import styles from "./genres.module.css";
import SpotifyLogoButton from "../components/SpotifyLogoButton";
import SpotifyLogoLittle from "../components/SpotifyLogoLittle";

export default function MostPopular({ name, image, artist, url, preview }) {
  return (
    <div className={styles.mostPopularSongsContainer}>
      <div id={styles.popularCoverAndPopularText}>
        <div className={styles.mostPopularSongsCoverSong}>
          <img
            className={styles.mostPopularSongsImg}
            src={image}
            alt="most-popular-song"
            width={150}
          />
          <div className={styles.playButton} />
        </div>
        <div className={styles.mostPopularSongsText}>
          <p className={styles.pTitle}>{name}</p>
          <p className={styles.pText}>{artist}</p>
        </div>
        <ReactPlayer
          url="https://freesound.org/people/AndreAngelo/sounds/246231.wav"
          width="400px"
          height="50px"
          playing={true}
          controls={true}
        />
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
