import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import Genre from "./Genre.module.css";

function GenreSection() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={Genre.genre}>
            <h2 className={Genre.title}> Discover Genres</h2>
            <div className={Genre.buttonsdesk1}>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>CLASSIC</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>COUNTRY</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>JAZZ</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>METAL</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>INDIE</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>HIP-HOP</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>REGGAE</span>
              </button>
              <button
                type="button"
                onClick={() => navigate("/rock")}
                className={`${Genre.btn} ${"pButtons"}`}
              >
                <span>ROCK</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>R&B</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>PUNK</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>ELECTRO</span>
              </button>
              <button className={`${Genre.btn} ${"pButtons"}`} type="button">
                <span>BLUES</span>
              </button>
            </div>
            <div className={Genre.buttonsdesk}>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/rock")}
              >
                ROCK
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                R&B
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                JAZZ
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                METAL
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                INDIE
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                HIP-HOP
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                REGGAE
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                CLASSIC
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                ELECTRO
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                COUNTRY
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                PUNK
              </button>
              <button className={`${Genre.btn2} ${"pButtons"}`} type="button">
                BLUES
              </button>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default GenreSection;
