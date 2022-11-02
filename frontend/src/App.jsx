import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Recommended from "./components/Recommended";
import WorldMusic from "./components/WorldMusic";
import Header from "./components/header";
import GenreSection from "./components/genre";
/* import Footer from "./components/footer"; */

import Rock from "./pages/Rock";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Header />
          <GenreSection />
          <Route path="/rock/*" element={<Rock />} />
          <Recommended />
          <WorldMusic />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
