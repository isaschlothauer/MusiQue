import "../App.css";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import MusicCSS from "./WorldMusic.module.css";
import SpotifyLogo from "../assets/Spotify_Logo_RGB_White.png";

// eslint-disable-next-line camelcase
const client_id = "d6b767f2085441d5bd7a2c4b59b009a6";
// eslint-disable-next-line camelcase
const client_secret = "3db89dc2644044a3baa93a83ca6f7f6c";
const artistName = "Motley Crue";

// TO DO LIST
// 1. Randomized artist selector
// 2. Figure out the image problem
// 3. Play List and song picker still needs to be implemented
// 4. Figure out dynamic external linking
// 5. Implement error handing on null or undefined response

function WorldMusic() {
  // eslint-disable-next-line no-unused-vars
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [musicData, setMusicData] = useState("");
  const [musicDataImage, setMusicDataImage] = useState("");
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

  function gerateArtistData() {
    useEffect(() => {
      // async function musicDataGrabber() {

      const artistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      // eslint-disable-next-line no-unused-vars, prefer-const
      let artistID = fetch(
        `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
        artistParameters
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setMusicData(data.artists.items[0]);
          setMusicDataImage(data.artists.items[0].images[1].url); // This needs to be set, otherwise causes rendering issue.
        });
    }, []);
  }

  gerateArtistData();

  return (
    <div className={MusicCSS.musicContainer}>
      <div className={MusicCSS.musicMain}>
        <div className={MusicCSS.recContainer}>
          <h2 className={MusicCSS.musicDiscover}>
            Music from around the world
          </h2>
          <div className={MusicCSS.panelBlock}>
            <img
              src={musicDataImage} // ERROR PRONE
              alt="Album cover"
              className={MusicCSS.albumCover}
            />
            <div className={MusicCSS.songInfo}>
              <p className={`${MusicCSS.songTitle} ${"pTitle"}`}>
                song title...
              </p>
              <a href="artist.html" alt="#">
                {/* Link to country's trending list?  */}
                <p className={`${MusicCSS.artist} ${"pItalic"}`}>
                  {musicData.name}
                </p>
              </a>
              <p className={`${MusicCSS.yearPub} ${"pItalic"}`}>2021</p>
              <div className={MusicCSS.shuffle} />
              <p className={`${MusicCSS.endTxt} ${"pText"}`}>
                More{" "}
                <span className={`${MusicCSS.endTxt1} ${"pText"}`}>
                  {musicData.name}
                </span>{" "}
                on
              </p>

              {/* GO to the artist page */}
              <a href="http://www.spotify.com" className={MusicCSS.extLink}>
                <img
                  src={SpotifyLogo}
                  alt="Spotify Icon"
                  className={MusicCSS.spotifyLogo}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMusic;
