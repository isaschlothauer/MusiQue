import React, { useEffect, useState } from "react";
import TrendingArtCSS from "./trendingArtists.module.css";
import "../App.css";
import ShuffleButton from "./shuffleButton";
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
  const [artistSong, setArtistSong] = useState("");

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

  useEffect(() => {
    if (token == null) return;
    fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setArtistSong(result));
  }, [token]);

  return (
    <div className={TrendingArtCSS.trendingArtists}>
      {artistSong.tracks != null && artistSong.tracks.items != null ? (
        <>
          <h2 className={TrendingArtCSS.sectionTitle}>Trending Artists</h2>
          <div className={TrendingArtCSS.artistsCard}>
            <article className={TrendingArtCSS.articles}>
              <div className={TrendingArtCSS.albumAndTextContainer}>
                <div className={TrendingArtCSS.coversongContainer}>
                  <img
                    src={artistSong.tracks.items[0].track.album.images[1].url}
                    alt="album"
                  />
                  <div className={TrendingArtCSS.playButton} />
                </div>
                <div className={TrendingArtCSS.albumText}>
                  <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                    {artistSong.tracks.items[0].track.artists[0].name}
                  </p>
                  <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                    {artistSong.tracks.items[0].track.name}
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
                  <img
                    src={artistSong.tracks.items[1].track.album.images[1].url}
                    alt="album"
                  />
                  <div className={TrendingArtCSS.playButton} />
                </div>
                <div className={TrendingArtCSS.albumText}>
                  <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                    {artistSong.tracks.items[1].track.artists[0].name}
                  </p>
                  <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                    {artistSong.tracks.items[1].track.name}
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
                  <img
                    src={artistSong.tracks.items[2].track.album.images[1].url}
                    alt="album"
                  />
                  <div className={TrendingArtCSS.playButton} />
                </div>
                <div className={TrendingArtCSS.albumText}>
                  <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                    {artistSong.tracks.items[2].track.artists[0].name}
                  </p>
                  <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                    {artistSong.tracks.items[0].track.name}
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
            <ShuffleButton />
          </div>
        </>
      ) : (
        <h2>Tracks loading...</h2>
      )}
    </div>
  );
}

export default TrendingArtists;
