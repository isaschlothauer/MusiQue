import React from "react";
import RecommendedCSS from "./Recommended.module.css";
import "../App.css";
import Profile from "../assets/Joao.jpg";

function Recommended() {
  return (
    <div className={RecommendedCSS.rec}>
      <h2 className={`${RecommendedCSS.h2}`}>Picked for you with ❤</h2>
      <div className={RecommendedCSS.recQuote}>
        <div className={RecommendedCSS.imgContainer}>
          <img className={RecommendedCSS.img} alt="Joao" src={Profile} />
          <div className={RecommendedCSS.quotation}>“</div>
        </div>
        <p className={`${RecommendedCSS.pText} ${"pText"}`}>
          As soon the lyrics start, there is a mention of an individual that
          isn’t “here”, but was greatly dear, which is most likely Syd Barrett.
          Not only they miss him, but also the time when they were close. Bound
          not by blood, but music. Life goes on: we shouldn’t hold on for
          nostalgia, but learn with our past. Sometimes, things can’t be
          avoided, but we can surely learn from them.{" "}
        </p>
        <p className={`${RecommendedCSS.pTextName} ${"pText"}`}>
          Joao, Germany/Portugal
        </p>
      </div>

      <button type="button" className={RecommendedCSS.btn}>
        Spotify Logo
      </button>
    </div>
  );
}

export default Recommended;

// //<div className="rec">
// <h2>Picked for you with ❤ </h2>
// <div className= "recQuote"</div>
// </div>;
