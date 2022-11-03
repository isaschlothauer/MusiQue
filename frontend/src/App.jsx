import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import WorldMusic from "./components/WorldMusic";
import Header from "./components/header";
import GenreSection from "./components/genre";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";
import Recommended from "./components/Recommended";
import TrendingArtists from "./components/trendingArtists";

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
              <TrendingArtists />
              <Recommended />
              <WorldMusic />
              <AboutUs />
              <Footer />
            </div>
          }
        />
        <Route path="/rock/*" element={<Rock />} />
      </Routes>
    </div>
  );
}

export default App;
