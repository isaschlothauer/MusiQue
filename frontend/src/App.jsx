import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Recommended from "./components/Recommended";
import WorldMusic from "./components/WorldMusic";
import Header from "./components/header";
import GenreSection from "./components/genre";
import AboutUs from "./components/aboutus";
/* mport Footer from "./components/footer"; */

import Rock from "./pages/Rock";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <GenreSection />
              <Recommended />
              <WorldMusic />
              <AboutUs />
            </div>
          }
        />
        <Route path="/rock/*" element={<Rock />} />
      </Routes>
    </div>
  );
}

export default App;
