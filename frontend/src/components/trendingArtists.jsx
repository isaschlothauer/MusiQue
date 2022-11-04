import React from "react";
import TrendingArtCSS from "./trendingArtists.module.css";
import "../App.css";
import ShuffleButton from "./shuffleButton";
import SpotifyLogoButton from "./SpotifyLogoButton";

function TrendingArtists() {
  return (
    <div className={TrendingArtCSS.trendingArtists}>
      <h2 className={TrendingArtCSS.sectionTitle}>Trending Artists</h2>
      <div className={TrendingArtCSS.artistsCard}>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img
                src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="album"
              />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                THEA WANG, OTHER ARTIST
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                Tell me about it
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
                src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="album"
              />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                THEA WANG, OTHER ARTIST
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                Tell me about it
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
                src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="album"
              />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className={`${TrendingArtCSS.songTitle} ${"pTitle"}`}>
                THEA WANG, OTHER ARTIST
              </p>
              <p className={`${TrendingArtCSS.songName} ${"pItalic"}`}>
                Tell me about it
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
    </div>
  );
}

export default TrendingArtists;
