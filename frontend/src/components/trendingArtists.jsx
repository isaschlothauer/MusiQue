import React from "react";
import TrendingArtCSS from "./trendingArtists.module.css";
import ShuffleButton from "./shuffleButton";

function TrendingArtists() {
  return (
    <div className={TrendingArtCSS.trendingArtists}>
      <h2>Trending Artists</h2>
      <div className={TrendingArtCSS.artistsCard}>
        <article className={TrendingArtCSS.articles}>
          <img
            src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="album"
          />
          <div className={TrendingArtCSS.albumText}>
            <p className="pTitle">THEA WANG, OTHER ARTIST</p>
            <p className="pItalic">Tell me about it</p>
          </div>
        </article>
        <article className={TrendingArtCSS.articles}>
          <img
            src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="album"
          />
          <div className={TrendingArtCSS.albumText}>
            <p className="pTitle">THEA WANG, OTHER ARTIST</p>
            <p className="pItalic">Tell me about it</p>
          </div>
        </article>
        <article className={TrendingArtCSS.articles}>
          <img
            src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="album"
          />
          <div className={TrendingArtCSS.albumText}>
            <p className="pTitle">THEA WANG, OTHER ARTIST</p>
            <p className="pItalic">Tell me about it</p>
          </div>
        </article>
        <ShuffleButton />
      </div>
    </div>
  );
}

export default TrendingArtists;
