import React, { useEffect, useState } from "react";
import ReactHowler from "react-howler";
import TrendingArtCSS from "./trendingArtists.module.css";
import "../App.css";
import SpotifyLogoButton from "./SpotifyLogoButton";
import btnStyles from "./Button.module.css";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function TrendingArtists() {
  const [token, setToken] = useState("");
  const [artistSong1, setArtistSong1] = useState("");
  const [artistSong2, setArtistSong2] = useState("");
  const [artistSong3, setArtistSong3] = useState("");
  const [renderCheck, setRenderCheck] = useState(false);
  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [playing3, setPlaying3] = useState(false);

  useEffect(() => {
    // API access token
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
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
      if (token === "") return;
      fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          const n = Math.floor(Math.random() * 50);
          const song1 = result.tracks.items[n].track;
          const song2 = result.tracks.items[n + 1].track;
          const song3 = result.tracks.items[n + 2].track;

          const album1 = {
            album1Image: song1.album.images[1].url,
            album1ArtistName: song1.artists[0].name,
            album1SongName: song1.name,
            album1SongLink: song1.external_urls.spotify,
            album1Preview: song1.preview_url,
          };

          const album2 = {
            album2Image: song2.album.images[1].url,
            album2ArtistName: song2.artists[0].name,
            album2SongName: song2.name,
            album2SongLink: song2.external_urls.spotify,
            album2Preview: song2.preview_url,
          };

          const album3 = {
            album3Image: song3.album.images[1].url,
            album3ArtistName: song3.artists[0].name,
            album3SongName: song3.name,
            album3SongLink: song3.external_urls.spotify,
            album3Preview: song3.preview_url,
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
              {artistSong1.album1Preview != null ? (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <button
                  type="button"
                  className={
                    !playing1
                      ? `${TrendingArtCSS.playButton}`
                      : `${TrendingArtCSS.playButtonActive}`
                  }
                  onClick={() => {
                    setPlaying1(!playing1);
                    setPlaying2(null);
                    setPlaying3(null);
                  }}
                >
                  <ReactHowler
                    src={artistSong1.album1Preview}
                    html5
                    playing={playing1}
                    volume={0.3}
                  />
                </button>
              ) : null}
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                {artistSong1.album1SongName}
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                {artistSong1.album1ArtistName}
              </p>
              <a
                href={artistSong1.album1SongLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={TrendingArtCSS.linkToSpotifyText} />
              </a>
            </div>
          </div>
          <a
            href={artistSong1.album1SongLink}
            className={TrendingArtCSS.linkToSpotifyIcons}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
          <a
            href={artistSong1.album1SongLink}
            className={TrendingArtCSS.linkToSpotifyButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyLogoButton className={TrendingArtCSS.SpotifyIconBig} />
          </a>
        </article>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img src={artistSong2.album2Image} alt="album" />
              {artistSong2.album2Preview != null ? (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <button
                  type="button"
                  className={
                    !playing2
                      ? `${TrendingArtCSS.playButton}`
                      : `${TrendingArtCSS.playButtonActive}`
                  }
                  onClick={() => {
                    setPlaying2(!playing2);
                    setPlaying1(null);
                    setPlaying3(null);
                  }}
                >
                  <ReactHowler
                    src={artistSong2.album2Preview}
                    html5
                    playing={playing2}
                    volume={0.3}
                  />
                </button>
              ) : null}
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                {artistSong2.album2SongName}
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                {artistSong2.album2ArtistName}
              </p>
              <a
                href={artistSong2.album2SongLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={TrendingArtCSS.linkToSpotifyText} />
              </a>
            </div>
          </div>
          <a
            href={artistSong2.album2SongLink}
            className={TrendingArtCSS.linkToSpotifyIcons}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
          <a
            href={artistSong2.album2SongLink}
            className={TrendingArtCSS.linkToSpotifyButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyLogoButton className={TrendingArtCSS.SpotifyIconBig} />
          </a>
        </article>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img src={artistSong3.album3Image} alt="album" />
              {artistSong3.album3Preview != null ? (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <button
                  type="button"
                  className={
                    !playing3
                      ? `${TrendingArtCSS.playButton}`
                      : `${TrendingArtCSS.playButtonActive}`
                  }
                  onClick={() => {
                    setPlaying3(!playing3);
                    setPlaying1(null);
                    setPlaying2(null);
                  }}
                >
                  <ReactHowler
                    src={artistSong3.album3Preview}
                    html5
                    playing={playing3}
                    volume={0.3}
                  />
                </button>
              ) : null}
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                {artistSong3.album3SongName}
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                {artistSong3.album3ArtistName}
              </p>
              <a
                href={artistSong3.album3SongLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={TrendingArtCSS.linkToSpotifyText} />
              </a>
            </div>
          </div>
          <a
            href={artistSong3.album3SongLink}
            className={TrendingArtCSS.linkToSpotifyIcons}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
          <a
            href={artistSong3.album3SongLink}
            className={TrendingArtCSS.linkToSpotifyButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyLogoButton />
          </a>
        </article>
        <button
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            renderCheck !== true ? setRenderCheck(true) : setRenderCheck(false);
            setPlaying1(null);
            setPlaying2(null);
            setPlaying3(null);
          }}
          type="button"
          className={`${btnStyles.btn} ${"pButtons"}`}
        >
          SHUFFLE
        </button>
      </div>
    </div>
  );
}

export default TrendingArtists;
