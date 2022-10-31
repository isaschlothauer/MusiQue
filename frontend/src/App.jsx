import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import GenreSection from "./components/genre";

import Header from "./components/header";
import GenreSection from "./components/GenreSection";
import Recommended from "./components/Recommended";
import TrendingArtists from "./components/trendingArtists";
import AboutUs from "./components/AboutUs";
import Footer from "./components/footer";

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
