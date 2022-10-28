import React from "react";
import Genre from "./Genre.module.css";

function GenreSection() {
  return (
    <div className={Genre.genre}>
      <h2 className={Genre.genretext}> Explore Genres</h2>
      <button className={Genre.genrebutton} type="button">
        <span className={Genre.genrespan}>ROCK</span>
      </button>
    </div>
  );
}

export default GenreSection;
