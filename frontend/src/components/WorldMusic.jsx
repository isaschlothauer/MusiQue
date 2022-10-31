/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import "../App.css";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import MusicCSS from "./WorldMusic.module.css";
import SpotifyLogo from "../assets/Spotify_Logo_RGB_White.png";
import Probass from "../assets/ProbassHardi.png";

// eslint-disable-next-line camelcase
const client_id = "d6b767f2085441d5bd7a2c4b59b009a6";
// eslint-disable-next-line camelcase
const client_secret = "3db89dc2644044a3baa93a83ca6f7f6c";
// const artistName = "The Beatles";

// TO DO LIST
// 1. Randomized artist selector
// 2. Figure out the image problem************
// 3. Play List and song picker still needs to be implemented
// 4. Figure out dynamic external linking
// 5. Implement error handing on null or undefined response

// Find a way to get song tracks
const playLists = [
  {
    playListId: "37i9dQZEVXbIVYVBNw9D5K",
    country: "Turkey",
  },
  {
    playListId: "37i9dQZEVXbKkidEfWYRuD",
    country: "Ukraine",
  },
  {
    playListId: "37i9dQZEVXbKyJS56d1pgi",
    country: "Portugal",
  },
];

function randomizer(num) {
  const playListData = playLists[Math.floor(Math.random() * num)].playListId;
  return playListData;
}

function WorldMusic() {
  // eslint-disable-next-line no-unused-vars
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [musicData, setMusicData] = useState("");
  // const [musicDataArtists, setMusicDataArtists] = useState("");
  // const [musicDataSongTitle, setMusicDataSongTitle] = useState("");
  // const [musicDataImage, setMusicDataImage] = useState("");
  // const [musicDataYear, setMusicDataYear] = useState("");
  // const [musicCountry, setMusicCountry] = useState("");
  // const [playListData, setPlayListData] = useState("");
  useEffect(() => {
    // API Access Token
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // eslint-disable-next-line camelcase
      body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  async function gerateArtistData() {
    useEffect(() => {
      // Authentication mechanism
      const artistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      // PLaylist fetcher
      fetch(
        `https://api.spotify.com/v1/playlists/${randomizer(3)}`,
        artistParameters
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const n = Math.floor(Math.random() * 50);
          const stringPath = data.tracks.items[n].track;
          // setMusicDataArtists(stringPath.album.artists[0].name);
          // setMusicDataSongTitle(stringPath.name);
          // setMusicDataImage(stringPath.album.images[1].url);
          // setMusicDataYear(stringPath.album.release_date);
          console.log(stringPath);
          setMusicData(stringPath);
        });
    }, []);
  }

  gerateArtistData();
  // console.log(musicData);
  // console.log(playLists[Math.floor(Math.random() * 4)]);

  return (
    <div className={MusicCSS.musicContainer}>
      <div className={MusicCSS.recContainer}>
        <h2 className={MusicCSS.musicDiscover}>Music from around the world</h2>
        <div className={MusicCSS.panelContainer}>
          <div className={MusicCSS.panel1}>
            <div className={MusicCSS.mainImg}>
              <img src={Probass} alt="Arist/Album Cover image1" />
            </div>
            <h2 className={`${MusicCSS.songTitle} ${["h2"]}`}>song title</h2>
            <p className={`${MusicCSS.artists} ${["pItalic"]}`}>artists</p>
            <p className={`${MusicCSS.country} ${["pText"]}`}>Country: </p>
            <p className={`${MusicCSS.release} ${["pText"]}`}>Release: </p>
          </div>

          <div className={MusicCSS.panel2}>
            <div className={MusicCSS.mainImg}>
              <img src={Probass} alt="Artist image1" />
            </div>
            <h2 className={`${MusicCSS.songTitle} ${["h2"]}`}>song title</h2>
            <p className={`${MusicCSS.artists} ${["pItalic"]}`}>artists</p>
            <p className={`${MusicCSS.country} ${["pText"]}`}>Country: </p>
            <p className={`${MusicCSS.release} ${["pText"]}`}>Release: </p>
          </div>

          <div className={MusicCSS.panel3}>
            <div className={MusicCSS.mainImg}>
              <img src={Probass} alt="Arist/Album Cover Image2" />
            </div>
            <h2 className={`${MusicCSS.songTitle} ${["h2"]}`}>song title</h2>
            <p className={`${MusicCSS.artists} ${["pItalic"]}`}>artists</p>
            <p className={`${MusicCSS.country} ${["pText"]}`}>Country: </p>
            <p className={`${MusicCSS.release} ${["pText"]}`}>Release: </p>
          </div>
        </div>
        <div className={MusicCSS.shuffle} />

        <div className={MusicCSS.endTxt}>
          <p className={`${MusicCSS.endTxt1} ${["pText"]}`}>
            More on <span>this artist</span> at{" "}
          </p>
          <a href="https://www.spotify.com">
            <img
              src={SpotifyLogo}
              className={MusicCSS.spotifyLogo}
              alt="Spotify Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default WorldMusic;
