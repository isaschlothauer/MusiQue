/* eslint-disable react/prop-types */
import React from "react";
import styles from "./genres.module.css";

export default function TrendingArtists({ artist, followers, img }) {
  return (
    <div className={styles.trendingArtistsDiv}>
      <p className={styles.trendingtext}>{artist}</p>
      <p className={styles.trendingtext2}>{followers} followers</p>
      <img id={styles.trendingImg} alt="trending-img" src={img} />
    </div>
  );
}
