/* eslint-disable react/prop-types */
import React from "react";
import styles from "./genres.module.css";

export default function TrendingArtists({ artist, followers, image }) {
  return (
    <div className={styles.trendingArtistsDivhid}>
      <p className={styles.trendingtexthid}>{artist}</p>
      <p className={styles.trendingtext2hid}>{followers} followers</p>
      <img id={styles.trendingImg} alt="trending-img" src={image} />
    </div>
  );
}
