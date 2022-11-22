/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import styles from "./Recommended.module.css";
import "../App.css";
import Joao from "../assets/recommended/Joao.jpg";
import Isamu from "../assets/recommended/Isamu.jpg";
import Iryna from "../assets/recommended/Iryna.png";
import Elif from "../assets/recommended/Elif.png";
import SpotifyLogoButton from "./SpotifyLogoButton";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const recs = [
  {
    author: "João, Germany/Portugal",
    imgAuthor: Joao,
    content: `As soon the lyrics start, there is a mention of an individual that
      isn’t “here”, but was greatly dear, which is most likely Syd
      Barrett. Not only they miss him, but also the time when they were
      close. Bound not by blood, but music. Life goes on: we shouldn’t
      hold on for nostalgia, but learn with our past. Sometimes, things
      can’t be avoided, but we can surely learn from them.`,
    id: "7aE5WXu5sFeNRh3Z05wwu4",
  },
  {
    author: "Isamu, Germany/Japan",
    imgAuthor: Isamu,
    content: `A song that takes you somewhere far away and unfamiliar, yet fills you with sense of nostalgia. Sound is airy and mystical, almost spiritual even. It is an aural delight and unforgettable emotional experience through sound. Whatever your preference in music may be, give yourself a chance to see where this music will take you.`,
    id: "2HHAxkrJbuWZ7JWdxYbsWO",
  },
  {
    author: "Elif, Germany",
    imgAuthor: Elif,
    content: `Just by the rythm and singing, this song conveys a feeling of self-assurance and freedom for me - without understanding any of the words. It’s one of those songs, that lifts your mood up. It even feels cathartic (I mean, just listen to 2:19-3:10).`,
    id: "3f8iimOXaVgOolPrAOrrFS",
  },
  {
    author: "Iryna, Ukraine/Germany",
    imgAuthor: Iryna,
    content: `What do I love most about the song?... You can listen to it at any moment of your life and it will give you this nice feeling that
    everything is going to be okay. I like the fact that lyrics can be about
    your loved one, your parents, your friends, your kids, etc. Even
    though the song came out in 1980 it’s still popular nowadays, as
    many people say “Classic never dies”.`,
    id: "1ko2lVN0vKGUl9zrU0qSlT",
  },
  {
    author: "Iryna, Ukraine/Germany",
    imgAuthor: Iryna,
    content: `If someone tells you that Ukrainian rap is dead - feel free to play this song. It was released in 2021 by the famous Ukrainian band
    “KALUSH” which won Eurovision in 2022. This is a story about the
    daily struggle with our addictions, in which we are in the ring. Our
    coach is the experience, and the audience is our environment.`,
    id: "3ZVzwZevjBntQD8QDekVO1",
  },
  {
    author: "Isamu, Germany/Japan",
    imgAuthor: Isamu,
    content: `I can't recommend this piece enough. This dazzling, yet poetically beautiful rendition by Gould has been among my most favorites for a long time. Carefully woven among his signature style, a glimpse of intimacy or poetic softness that can melt your heart. Simply wonderful performance.`,
    id: "0sCl0tOYBfDJuMUHRiCeBZ",
  },
  {
    author: "Elif, Germany",
    imgAuthor: Elif,
    content: `"My branches scrape the sea of stars, My roots dig deep into this world of ours, I'm grounded”. I love the lyrics of this song. When I listen to it, I imagine myself dancing. My feet touching the ground to then again lift off - oscillating between imagination and reality. To not lose touch with the ground, nor with the sky. Can they exist at the same time?`,
    id: "7cYod6eQvKmiyLwOjBgYR6",
  },
  {
    author: "João, Germany/Portugal",
    imgAuthor: Joao,
    content: `As a music and filme enthusiastic, I can not help myself to go back to this The Korgi's cover by Beck, used in one of my favourite movies: Eternal Sunshine of the Spotless Mind. 
    Both pieces complement eachother very well. As in the movie, about a couple who can't cope a reason for enjoying life together, sometimes, all that we need to be happy is to keeping it simple, yet deeply thoughtful as life's most enjoyable aspects are right next to us and don't need a thousand reasons but one to be taken: being happy.`,
    id: "4oYfMQ6NDGHq0GcbICqsDw",
  },
];

// NEW API WITH PLAYLIST TRACKS ENDPOINT
// GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks

// data.items[i].track.artists[0].name => array with 1 or more artists
// data.items[i].track.id   ===> track ID
// data.items[i].track.name  ===> song title
// data.items[i].track.preview_url
// data.items[i].track.external_urls.spotify  ==> spotify Link

// 1. fetch playlist tracks
// 2. get a random track from API
// const fetchedSongs = data.items;
// const randomSong = fetchedSongs[Math.floor(Math.random() * fetchedSongs.length)]
// 3. get the matching infos from recs array:
// const matchedRec = recs.find((rec) => rec.id === randomSong.id);
// const songData = [...matchedRec, ]

function Recommended() {
  const [accessToken, setAccessToken] = useState("");
  const [song, setSong] = useState("");

  useEffect(() => {
    // API ACCESS TOKEN
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((data) => setAccessToken(data.access_token));
  }, []);
  useEffect(() => {
    if (accessToken === "") return;
    const trackParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(
      `https://api.spotify.com/v1/playlists/4B6LseBmS5BhXRYPvXIv6T/tracks`,
      trackParameters
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchedSongs = data.items;
        // console.log(fetchedSongs);
        const randomSong =
          fetchedSongs[Math.floor(Math.random() * fetchedSongs.length)];
        // console.log(randomSong);
        const {
          track: { id },
          track: { name: songTitle },
          track: { artists },
          track: {
            external_urls: { spotify: spotifyLink },
          },
          track: { preview_url: previewUrl },
        } = randomSong;
        const artistTitle = artists.map((artist) => artist.name).join(", ");
        const matchedRec = recs.find((rec) => rec.id === id);
        const songData = {
          ...matchedRec,
          songTitle,
          artistTitle,
          previewUrl,
          spotifyLink,
        };
        // console.log(songData);
        setSong(songData);
      });
  }, [accessToken]);

  return (
    <div className={styles.container}>
      <h2 className={`${styles.sectionHeadline}`}>Picked for you with ❤</h2>
      <div className={styles.rec}>
        <div className={styles.recQuote}>
          <div className={styles.profileQuote}>
            <div className={styles.imgContainer}>
              <img
                className={styles.imgQuote}
                alt={song.author}
                src={song.imgAuthor}
              />
              <div className={styles.quotation}>“</div>
            </div>
            <div className={`${styles.nameDesktop} ${"pText"}`}>
              {" "}
              {song.author}
            </div>
          </div>

          <p className={`${styles.pText} ${"pText"}`}>{song.content}</p>
          <p className={`${styles.nameMobile} ${"pText"}`}>{song.author}</p>
        </div>

        <div className={styles.song}>
          <p className={`${styles.songHeadline}`}>Song</p>
          <p className={`${styles.songTitle} ${"pText"}`}>{song.songTitle}</p>
          <p className={`${styles.artistHeadline}`}>Artist</p>
          <p className={`${styles.artistTitle} ${"pText"}`}>
            {song.artistTitle}
          </p>
          <figure>
            {/* eslint-disable jsx-a11y/media-has-caption */}
            <audio volume={0.3} controls src={song.previewUrl} />
          </figure>
          <p className={`${styles.artistMobile} ${"pText"}`}>
            {song.songTitle}
          </p>
          <p className={`${styles.songTitleMobile} ${"pItalic"}`}>
            {song.artistTitle}
          </p>

          <a
            className="active"
            href={song.spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyLogoButton />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
