/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import "../App.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import MusicCSS from "./WorldMusic.module.css";
import SpotifyLogo from "../assets/Spotify_Logo_RGB_White.png";

// eslint-disable-next-line camelcase
const clientId = import.meta.env.VITE_CLIENT_ID;
// eslint-disable-next-line camelcase
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
// const artistName = "The Beatles";

// TO DO LIST
// 1. Randomized artist selector
// 3. Play List and song picker still needs to be implemented
// 5. Implement error handing on null or undefined response

// Find a way to get song tracks
const playLists = [
  {
    playListId: "37i9dQZF1DX0FGW2dUyDef",
    country: "Turkey",
  },
  {
    playListId: "1InkWO5fnA7rMZJXCc6s7S",
    country: "Ukraine",
  },
  {
    playListId: "72U9wNe1fkxYW68gh0TbO3",
    country: "Iceland",
  },
  {
    playListId: "1ggnbwPgliav7xvkTQbRy8",
    country: "Georgia",
  },
  {
    playListId: "0cyH0TxFDgCQ2gQbs6shh2",
    country: "Japan",
  },
  {
    playListId: "37i9dQZF1DZ06evO4nuxuV",
    country: "Iceland",
  },
  {
    playListId: "0YFoHvtj9er0GyqmxGaW5i",
    country: "Turkey",
  },
  {
    playListId: "0gorsfrZ74eaEYwR552r3w",
    country: "Syria",
  },
  {
    playListId: "1Wx9FRJixPEEHdWRgOJNIZ",
    country: "Tunisia",
  },
];

// Multi purpose random nunerator
function numGen(num) {
  const result = Math.floor(Math.random() * num);
  return result;
}

function WorldMusic() {
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useState("");
  const [musicData1, setMusicData1] = useState("");
  const [musicData2, setMusicData2] = useState("");
  const [musicData3, setMusicData3] = useState("");
  const [musicData4, setMusicData4] = useState("");
  const [renderCheck, setRenderCheck] = useState(false);

  useEffect(() => {
    // API Access Token
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // eslint-disable-next-line camelcase
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    })
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (accessToken === null) return;
    // Authentication mechanism
    const artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const playListUrl = "https://api.spotify.com/v1/playlists/";

    const pListIndex1 = numGen(playLists.length);
    fetch(
      `${playListUrl}${playLists[pListIndex1].playListId}`,
      artistParameters
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const dataLength = data.tracks.items.length;
        const stringPath1 =
          data.tracks.items[Math.floor(Math.random() * dataLength)].track;

        // Panel 1 data
        const panel1 = {
          panel1Title: stringPath1.name,
          panel1Artists: stringPath1.artists[0].name,
          panel1Album: stringPath1.album.name,
          panel1Release: stringPath1.album.release_date.split("-")[0],
          panel1Image: stringPath1.album.images[1].url,
          panel1Country: playLists[pListIndex1].country,
        };

        // Savimg panel objects to state
        setMusicData1(panel1);
      })
      .catch((err) => console.error(err));

    const pListIndex2 = numGen(playLists.length);
    fetch(
      `${playListUrl}${playLists[pListIndex2].playListId}`,
      artistParameters
    )
      .then((res) => res.json())
      .then((data) => {
        const dataLength = data.tracks.items.length;
        const stringPath2 =
          data.tracks.items[Math.floor(Math.random() * dataLength)].track;

        // Panel 2 data
        const panel2 = {
          panel2Title: stringPath2.name,
          panel2Artists: stringPath2.artists[0].name,
          panel2Album: stringPath2.album.name,
          panel2Release: stringPath2.album.release_date.split("-")[0],
          panel2Image: stringPath2.album.images[1].url,
          panel2Country: playLists[pListIndex2].country,
        };

        // Savimg panel objects to state
        setMusicData2(panel2);
      })
      .catch((err) => console.error(err));

    const pListIndex3 = numGen(playLists.length);
    fetch(
      `${playListUrl}${playLists[pListIndex3].playListId}`,
      artistParameters
    )
      .then((res) => res.json())
      .then((data) => {
        const dataLength = data.tracks.items.length;
        const stringPath3 =
          data.tracks.items[Math.floor(Math.random() * dataLength)].track;

        // Panel 1 data
        const panel3 = {
          panel3Title: stringPath3.name,
          panel3Artists: stringPath3.artists[0].name,
          panel3Album: stringPath3.album.name,
          panel3Release: stringPath3.album.release_date.split("-")[0],
          panel3Image: stringPath3.album.images[1].url,
          panel3Country: playLists[pListIndex3].country,
        };
        // Savimg panel objects to state
        setMusicData3(panel3);
      })
      .catch((err) => console.error(err));

    const pListIndex4 = numGen(playLists.length);
    fetch(
      `${playListUrl}${playLists[pListIndex4].playListId}`,
      artistParameters
    )
      .then((res) => res.json())
      .then((data) => {
        const dataLength = data.tracks.items.length;
        const stringPath4 =
          data.tracks.items[Math.floor(Math.random() * dataLength)].track;

        // Panel 1 data
        const panel4 = {
          panel4Title: stringPath4.name,
          panel4Artists: stringPath4.artists[0].name,
          panel4Album: stringPath4.album.name,
          panel4Release: stringPath4.album.release_date.split("-")[0],
          panel4Image: stringPath4.album.images[1].url,
          panel4Country: playLists[pListIndex4].country,
        };
        // Savimg panel objects to state
        setMusicData4(panel4);
      })
      .catch((err) => console.error(err));
  }, [renderCheck, accessToken]);

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
            <p className={`${MusicCSS.country} ${["pText"]}`}>
              Country: {musicData1.panel1Country}
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
            <p className={`${MusicCSS.country} ${["pText"]}`}>
              Country: {musicData2.panel2Country}
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
            <p className={`${MusicCSS.country} ${["pText"]}`}>
              Country: {musicData3.panel3Country}
            </p>
            <p className={`${MusicCSS.release} ${["pText"]}`}>
              Release: {musicData3.panel3Release}
            </p>
          </div>

          <div className={MusicCSS.panel4}>
            <div className={MusicCSS.mainImg}>
              <img
                src={musicData4.panel4Image}
                alt="Arist/Album Cover image1"
              />
            </div>
            <h2 className={`${MusicCSS.songTitle} ${["h2"]}`}>
              {musicData4.panel4Title}
            </h2>
            <p className={`${MusicCSS.artists} ${["pItalic"]}`}>
              {musicData4.panel4Artists}
            </p>
            <p className={`${MusicCSS.country} ${["pText"]}`}>
              Country: {musicData4.panel4Country}
            </p>
            <p className={`${MusicCSS.release} ${["pText"]}`}>
              Release: {musicData4.panel4Release}
            </p>
          </div>
        </div>
        <div className={MusicCSS.btnContainer}>
          <button
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              renderCheck !== true
                ? setRenderCheck(true)
                : setRenderCheck(false);
            }}
            className={`${MusicCSS.pButtons} ${"pButtons"}`}
            type="button"
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
