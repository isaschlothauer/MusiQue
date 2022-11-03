/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import "../App.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import MusicCSS from "./WorldMusic.module.css";
import SpotifyLogo from "../assets/Spotify_Logo_RGB_White.png";
import Probass from "../assets/ProbassHardi.png";
import panel1IMG from "../assets/Screenshot_2022-11-02_09-05-32.png";
import panel2IMG from "../assets/Screenshot_2022-11-02_09-05-53.png";
import panel3IMG from "../assets/Screenshot_2022-11-02_09-06-16.png";

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
// 6. Add default songs for at load.

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

// const defaultList = {

// }

const playListSize = 3;

function randomizer(num) {
  const playListData = playLists[Math.floor(Math.random() * num)].playListId;
  return playListData;
}

function randomNumGenerator(num) {
  const randomNum = Math.floor(Math.random() * num);
  return randomNum;
}

function WorldMusic() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [musicData1, setMusicData1] = useState("");
  const [musicData2, setMusicData2] = useState("");
  const [musicData3, setMusicData3] = useState("");
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

  async function generateArtistData() {
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
      // eslint-disable-next-line prefer-const
      let currentPlayList = fetch(
        `https://api.spotify.com/v1/playlists/${randomizer(3)}`,
        artistParameters
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const n = Math.floor(Math.random() * 48);
          const stringPath1 = data.tracks.items[n].track;
          const stringPath2 = data.tracks.items[n + 1].track;
          const stringPath3 = data.tracks.items[n + 2].track;

          // Panel 1 data
          const panel1 = {
            panel1Title: stringPath1.name,
            panel1Artists: stringPath1.artists[0].name,
            panel1Album: stringPath1.album.name,
            panel1Release: stringPath1.album.release_date,
            panel1Image: stringPath1.album.images[1].url,
          };

          // Panel 2 data
          const panel2 = {
            panel2Title: stringPath2.name,
            panel2Artists: stringPath2.artists[0].name,
            panel2Album: stringPath2.album.name,
            panel2Release: stringPath2.album.release_date,
            panel2Image: stringPath2.album.images[1].url,
          };

          // Panel 3 data
          const panel3 = {
            panel3Title: stringPath3.name,
            panel3Artists: stringPath3.artists[0].name,
            panel3Album: stringPath3.album.name,
            panel3Release: stringPath3.album.release_date,
            panel3Image: stringPath3.album.images[1].url,
          };

          // Savimg panel objects to state
          setMusicData1(panel1);
          setMusicData2(panel2);
          setMusicData3(panel3);
        });
    }, []);

    // Check if state is filled
  }
  generateArtistData();
  return (
    <div className={MusicCSS.musicContainer}>
      <div className={MusicCSS.recContainer}>
        <h2 className={MusicCSS.musicDiscover}>Music from around the world</h2>
        <div className={MusicCSS.panelContainer}>
          <div className={MusicCSS.panel1}>
            <div className={MusicCSS.mainImg}>
              <img
                src={musicData1.panel1Image}
                alt="Arist/Album Cover image1"
              />
            </div>
            <h2 className={`${MusicCSS.songTitle} ${["h2"]}`}>
              {musicData1.panel1Title}
            </h2>
            <p className={`${MusicCSS.artists} ${["pItalic"]}`}>
              {musicData1.panel1Artists}
            </p>
            {/* <p className={`${MusicCSS.country} ${["pText"]}`}>Country: {musicData1.panel1Country}</p> */}
            <p className={`${MusicCSS.release} ${["pText"]}`}>
              Album: {musicData1.panel1Album}
            </p>
            <p className={`${MusicCSS.release} ${["pText"]}`}>
              Release: {musicData1.panel1Release}
            </p>
          </div>

          <div className={MusicCSS.panel2}>
            <div className={MusicCSS.mainImg}>
              <img
                src={musicData2.panel2Image}
                alt="Arist/Album Cover image1"
              />
            </div>
            <h2 className={`${MusicCSS.songTitle} ${["h2"]}`}>
              {musicData2.panel2Title}
            </h2>
            <p className={`${MusicCSS.artists} ${["pItalic"]}`}>
              {musicData2.panel2Artists}
            </p>
            {/* <p className={`${MusicCSS.country} ${["pText"]}`}>Country: {musicData1.panel1Country}</p> */}
            <p className={`${MusicCSS.release} ${["pText"]}`}>
              Album: {musicData2.panel2Album}
            </p>
            <p className={`${MusicCSS.release} ${["pText"]}`}>
              Release: {musicData2.panel2Release}
            </p>
          </div>

          <div className={MusicCSS.panel3}>
            <div className={MusicCSS.mainImg}>
              <img
                src={musicData3.panel3Image}
                alt="Arist/Album Cover image1"
              />
            </div>
            <h2 className={`${MusicCSS.songTitle} ${["h2"]}`}>
              {musicData3.panel3Title}
            </h2>
            <p className={`${MusicCSS.artists} ${["pItalic"]}`}>
              {musicData3.panel3Artists}
            </p>
            {/* <p className={`${MusicCSS.country} ${["pText"]}`}>Country: {musicData1.panel1Country}</p> */}
            <p className={`${MusicCSS.release} ${["pText"]}`}>
              Album: {musicData3.panel3Album}
            </p>
            <p className={`${MusicCSS.release} ${["pText"]}`}>
              Release: {musicData3.panel3Release}
            </p>
          </div>
        </div>
        <div className={MusicCSS.btnContainer}>
          <button
            className={`${MusicCSS.pButtons} ${"pButtons"}`}
            type="button"
            onClick={generateArtistData}
          >
            SHUFFLE
          </button>
        </div>
        <div className={MusicCSS.endTxt}>
          <p className={`${MusicCSS.endTxt1} ${["pText"]}`}>Find more on</p>
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
