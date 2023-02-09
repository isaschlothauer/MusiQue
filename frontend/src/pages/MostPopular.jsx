/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./genres.module.css";
import SpotifyLogoButton from "../components/SpotifyLogoButton";
import SpotifyLogoLittle from "../components/SpotifyLogoLittle";

// eslint-disable-next-line no-unused-vars
export default function MostPopular({
  name,
  image,
  artist,
  artistPage,
  url,
  preview,
  setUrl,
  iconStatus,
}) {
  // const [play, { stop }] = useSound(yeah, { playbackRate });

  return (
    <div className={styles.mostPopularSongsContainer}>
      <div id={styles.popularCoverAndPopularText}>
        <div className={styles.mostPopularSongsCoverSong}>
          <img
            id={styles.mostPopularSongsImg}
            src={image}
            alt="most-popular-song"
          />
          {preview != null ? (
            <button
              type="button"
              onClick={() => {
                setUrl(preview);
              }} // SETTING THE URL AS THE PREVIEW PROP, WHICH IS THE PREVIEW_URL. NEEDS TO BE IN THIS EMPTY FUNCTION TO RENDER ONLY ON CLICK. OTHERWISE IT RENDES ON PAGE LOAD
              className={
                iconStatus ? `${styles.pauseButton}` : `${styles.playButton}`
              }
            >
              {}
            </button>
          ) : (
            ""
          )}
        </div>
        <div className={styles.mostPopularSongsText}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <p className={styles.pTitle}>{name}</p>
          </a>
          <a href={artistPage} target="_blank" rel="noopener noreferrer">
            <p className={styles.pItalic}>{artist}</p>
          </a>
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
