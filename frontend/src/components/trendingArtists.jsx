import React from "react";
import "./trendingArtists.css";

function TrendingArtists() {
  return (
    <div className="trending-artists">
      <h2>Trending Artists</h2>
      <div className="artists-card">
        <article>
          <img
            src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="album"
          />
          <p className="p-title">THEA WANG, OTHER ARTIST</p>
          <p className="p-italic">Tell me about it</p>
        </article>
        <article>
          <img
            src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="album"
          />
          <p className="p-title">THEA WANG, OTHER ARTIST</p>
          <p className="p-italic">Tell me about it</p>
        </article>
        <article>
          <img
            src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="album"
          />
          <p className="p-title">THEA WANG, OTHER ARTIST</p>
          <p className="p-italic">Tell me about it</p>
        </article>
        <button type="button" className="p-buttons">
          SHUFFLE
        </button>
      </div>
    </div>
  );
}

export default TrendingArtists;
