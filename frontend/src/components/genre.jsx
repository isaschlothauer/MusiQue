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
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/classic")}
              >
                <span>CLASSIC</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/country")}
              >
                <span>COUNTRY</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/jazz")}
              >
                <span>JAZZ</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/metal")}
              >
                <span>METAL</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/indie")}
              >
                <span>INDIE</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/hiphop")}
              >
                <span>HIP-HOP</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/reggae")}
              >
                <span>REGGAE</span>
              </button>
              <button
                type="button"
                onClick={() => navigate("/rock")}
                className={`${Genre.btn} ${"pButtons"}`}
              >
                <span>ROCK</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/r&b")}
              >
                <span>R&B</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/punk")}
              >
                <span>PUNK</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/electro")}
              >
                <span>ELECTRO</span>
              </button>
              <button
                className={`${Genre.btn} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/blues")}
              >
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
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/r&b")}
              >
                R&B
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/jazz")}
              >
                JAZZ
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/metal")}
              >
                METAL
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/indie")}
              >
                INDIE
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/hiphop")}
              >
                HIP-HOP
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/reggae")}
              >
                REGGAE
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/classic")}
              >
                CLASSIC
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/electro")}
              >
                ELECTRO
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/country")}
              >
                COUNTRY
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/punk")}
              >
                PUNK
              </button>
              <button
                className={`${Genre.btn2} ${"pButtons"}`}
                type="button"
                onClick={() => navigate("/blues")}
              >
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
