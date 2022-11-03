import TrendingArtCSS from "./trendingArtists.module.css";
import ShuffleButton from "./shuffleButton";
import SpotifyLogoButton from "./SpotifyLogoButton";

function TrendingArtists() {
  return (
    <div className={TrendingArtCSS.trendingArtists}>
      <div className={TrendingArtCSS.artistsCard}>
        <h2>Trending Artists</h2>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img
                id={TrendingArtCSS.img}
                src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="album"
              />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className="pTitle">THEA WANG, OTHER ARTIST</p>
              <p className="pItalic">Tell me about it</p>
            </div>
          </div>
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittle}
            width={28}
          />
          <SpotifyLogoButton />
        </article>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img
                id={TrendingArtCSS.img}
                src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="album"
              />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className="pTitle">THEA WANG, OTHER ARTIST</p>
              <p className="pItalic">Tell me about it</p>
            </div>
          </div>
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittle}
            width={28}
          />
          <SpotifyLogoButton />
        </article>
        <article className={TrendingArtCSS.articles}>
          <div className={TrendingArtCSS.albumAndTextContainer}>
            <div className={TrendingArtCSS.coversongContainer}>
              <img
                id={TrendingArtCSS.img}
                src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="album"
              />
              <div className={TrendingArtCSS.playButton} />
            </div>
            <div className={TrendingArtCSS.albumText}>
              <p className="pTitle">THEA WANG, OTHER ARTIST</p>
              <p className="pItalic">Tell me about it</p>
            </div>
          </div>
          <img
            src="src/assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png"
            alt="spotify-icon"
            className={TrendingArtCSS.spotifyIconLittle}
            width={28}
          />
          <SpotifyLogoButton />
        </article>
        <ShuffleButton />
      </div>
    </div>
  );
}

export default TrendingArtists;
