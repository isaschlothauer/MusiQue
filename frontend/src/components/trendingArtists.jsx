import React, { useEffect, useState } from "react";
import TrendingArtCSS from "./trendingArtists.module.css";
import "../App.css";
import SpotifyLogoButton from "./SpotifyLogoButton";

const CLIENT_ID = "d6b767f2085441d5bd7a2c4b59b009a6";
const CLIENT_SECRET = "3db89dc2644044a3baa93a83ca6f7f6c";

/* const songparams = {
  artistName: "THEA WANG, OTHER ARTIST",
  songName: "Tell me about it",
  image:
    "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
}; */

function TrendingArtists() {
  const [token, setToken] = useState("");
  const [artistSong1, setArtistSong1] = useState("");
  const [artistSong2, setArtistSong2] = useState("");
  const [artistSong3, setArtistSong3] = useState("");
  const [renderCheck, setRenderCheck] = useState(false);

  useEffect(() => {
    // API access token
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => setToken(data.access_token))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
  }, []);

  async function generateSong() {
    useEffect(() => {
      if (token == null) return;
      fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          const n = Math.floor(Math.random() * 50);
          const song1 = result.tracks.items[n].track;
          const song2 = result.tracks.items[n + 1].track;
          const song3 = result.tracks.items[n + 2].track;

          const album1 = {
            album1Image: song1.album.images[1].url,
            album1ArtistName: song1.artists[0].name,
            album1SongName: song1.name,
          };

          const album2 = {
            album2Image: song2.album.images[1].url,
            album2ArtistName: song2.artists[0].name,
            album2SongName: song2.name,
          };

          const album3 = {
            album3Image: song3.album.images[1].url,
            album3ArtistName: song3.artists[0].name,
            album3SongName: song3.name,
          };

          setArtistSong1(album1);
          setArtistSong2(album2);
          setArtistSong3(album3);
        });
    }, [renderCheck, token]);
  }
  generateSong();

  return (
    <div className={TrendingArtCSS.trendingArtists}>
      <h2 className={TrendingArtCSS.sectionTitle}>Trending Artists</h2>
      <div className={TrendingArtCSS.artistsCard}>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img src={artistSong1.album1Image} alt="album" />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                {artistSong1.album1ArtistName}
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                {artistSong1.album1SongName}
              </p>
            </div>
          </div>
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittle}
            width={28}
          />
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittleBlack}
            width={28}
          />
          <SpotifyLogoButton className={TrendingArtCSS.SpotifyIconBig} />
        </article>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img src={artistSong2.album2Image} alt="album" />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                {artistSong2.album2ArtistName}
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                {artistSong2.album2SongName}
              </p>
            </div>
          </div>
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittle}
            width={28}
          />
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittleBlack}
            width={28}
          />
          <SpotifyLogoButton className={TrendingArtCSS.SpotifyIconBig} />
        </article>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img src={artistSong3.album3Image} alt="album" />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                {artistSong3.album3ArtistName}
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                {artistSong3.album3SongName}
              </p>
            </div>
          </div>
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittle}
            width={28}
          />
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittleBlack}
            width={28}
          />
          <SpotifyLogoButton className={TrendingArtCSS.SpotifyIconBig} />
        </article>
        <button
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            renderCheck !== true ? setRenderCheck(true) : setRenderCheck(false);
          }}
          type="button"
          className={`${TrendingArtCSS.renderButton} ${"pButtons"}`}
        >
          SHUFFLE
        </button>
      </div>
    </div>
  );
}

export default TrendingArtists;
