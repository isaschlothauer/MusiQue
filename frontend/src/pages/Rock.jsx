/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from "react";
import TopGenres from "../components/TopGenres";
import SpotifyLogoButton from "../components/SpotifyLogoButton";
import Footer from "../components/footer";

import styles from "./genres.module.css";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

function Rock() {
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useState("");
  const [popular, SetPopular] = useState("");

  useEffect(() => {
    // API Access Token
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        // eslint-disable-next-line prefer-template
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch(TOKEN_ENDPOINT, authParameters)
      .then((res) => res.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((info) => setAccessToken(info.access_token))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (accessToken == null) return;
    fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DWZryfp6NSvtz", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => SetPopular(result) && console.log(result));
  }, [accessToken]);

  /*
  useEffect(() => {
    fetch("https://api.spotify.com/v1/recommendations?seed_genres=rock&limit=5&target_popularity=80", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((info) => console.log(info));
  }, [accessToken]);
*/

  /*
  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/search?type=track&q=year:2022%20genre:rock&limit=5",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    )
      .then((res) => res.json())
      .then((info) => console.log(info));
  }, [accessToken]);
  */
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden((current) => !current);
  };
  return (
    <div className={styles.Rock}>
      <header className={styles.headerGenres}>
        <section className={styles.genreMain}>
          <TopGenres />
          <div className={styles.genreTextAndImg}>
            <div className={styles.genreText}>
              <h1>Rock</h1>
              <p className={styles.pText}>
                A fan favourite in musical genres, rock originated in the
                40’s/50’s in North America, the land of “rock n’ roll”! Broadly
                mentioning, rock branches in blues, folk, R&B, country, metal,
                punk, and even fuses with jazz, funk or electronic music, just
                to mention a few. However, we can find a generalized common
                ground, with songs that bear rhythmic drums, a tenderizing
                electric guitar, a sturdy bass and a charismatic lead singer.
              </p>
            </div>
            <div className={styles.rockImg}>
              <img
                alt="electric-guitar"
                src="src\assets\genres-imgs\electricGuitar.png"
                width={350}
              />
            </div>
          </div>
        </section>
      </header>
      <section className={styles.mostPopular}>
        <h2>Most Popular</h2>
        {popular.tracks != null && (popular.tracks.items != null) != null ? (
          <>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[0].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[0].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[0].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <a href={popular.tracks.items[0].track.external_urls.spotify}>
                <SpotifyLogoButton />
              </a>
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[1].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[1].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[1].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <a href={popular.tracks.items[1].track.external_urls.spotify}>
                <SpotifyLogoButton />
              </a>
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[2].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[2].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[2].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <a href={popular.tracks.items[2].track.external_urls.spotify}>
                <SpotifyLogoButton />
              </a>
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[3].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[3].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[3].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <a href={popular.tracks.items[3].track.external_urls.spotify}>
                <SpotifyLogoButton />
              </a>
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[4].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[4].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[4].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <a href={popular.tracks.items[4].track.external_urls.spotify}>
                <SpotifyLogoButton />
              </a>
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[5].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[5].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[5].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <a href={popular.tracks.items[5].track.external_urls.spotify}>
                <SpotifyLogoButton />
              </a>
            </div>
            <div className={styles.mostPopularSongsContainer}>
              <div id={styles.popularCoverAndPopularText}>
                <div className={styles.mostPopularSongsCoverSong}>
                  <img
                    className={styles.mostPopularSongsImg}
                    src={popular.tracks.items[6].track.album.images[1].url}
                    alt="most-popular-song"
                    width={150}
                  />
                  <div className={styles.playButton} />
                </div>
                <div className={styles.mostPopularSongsText}>
                  <h2>{popular.tracks.items[6].track.name}</h2>
                  <p className={styles.pText}>
                    {popular.tracks.items[6].track.artists[0].name}
                  </p>
                </div>
              </div>
              <img
                src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png"
                alt="spotify-icon"
                className={styles.spotifyIconLittle}
                width={28}
              />
              <a href={popular.tracks.items[6].track.external_urls.spotify}>
                <SpotifyLogoButton />
              </a>
            </div>
            <button
              className={`${styles.shuffle} ${styles.pButtons}`}
              type="button"
              onClick={() => {
                // eslint-disable-next-line no-restricted-syntax
                console.log("I was clicked");
              }}
            >
              <img
                alt="spotify-icon-shuffle"
                // eslint-disable-next-line no-octal-escape
                src="src\assets\spotify-icons-logos\icons\01_RGB\02_PNG\Spotify_Icon_RGB_White.png"
                width={20}
              />
              SHUFFLE
            </button>
          </>
        ) : (
          <h2>Tracks loading...</h2>
        )}
      </section>
      <section className={styles.trending}>
        <h2 className={styles.h2trend}>Trending Artists</h2>
        <div className={styles.trendingArtistsContainer}>
          <div className={styles.trendingArtistsDiv}>
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\ALBUM COVER2.PNG"
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\amlbum cover3.PNG"
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\albumCover4.PNG"
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\albumCover.PNG"
            />
          </div>
          <div className={styles.trendingArtistsDiv}>
            <p className={styles.trendingtext}>THEA WANG, OTHER ARTIST</p>
            <p className={styles.trendingtext2}>1,000,000 listeners</p>
            <img
              id={styles.trendingImg}
              alt="trending-img"
              src="src\assets\musiQue-imgs\ALBUM COVER2.PNG"
            />
          </div>
        </div>
        {hidden && (
          <div className={styles.trendingArtistsContainerhid}>
            <div className={styles.trendingArtistsDivhid}>
              <p className={styles.trendingtexthid}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2hid}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\ALBUM COVER2.PNG"
              />
            </div>
            <div className={styles.trendingArtistsDivhid}>
              <p className={styles.trendingtexthid}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2hid}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\amlbum cover3.PNG"
              />
            </div>
            <div className={styles.trendingArtistsDivhid}>
              <p className={styles.trendingtexthid}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2hid}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\albumCover4.PNG"
              />
            </div>
            <div className={styles.trendingArtistsDivhid}>
              <p className={styles.trendingtexthid}>THEA WANG, OTHER ARTIST</p>
              <p className={styles.trendingtext2hid}>1,000,000 listeners</p>
              <img
                id={styles.trendingImg}
                alt="trending-img"
                src="src\assets\musiQue-imgs\albumCover.PNG"
              />
            </div>
          </div>
        )}
        <button
          type="button"
          className={`${styles.btn3}`}
          style={{
            transform: hidden ? "rotate(225deg)" : "rotate(45deg)",
            marginTop: hidden ? "5rem" : "4rem",
            marginBottom: hidden ? "1rem" : "2rem",
          }}
          onClick={handleClick}
        >
          h
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Rock;
