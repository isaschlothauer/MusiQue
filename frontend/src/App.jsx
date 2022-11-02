import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import WorldMusic from "./components/WorldMusic";
import Header from "./components/header";

import Recommended from "./components/Recommended";

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
              <Recommended />
              <WorldMusic />
            </div>
          }
        />
        <Route path="/rock/*" element={<Rock />} />
      </Routes>
    </div>
  );
}

export default App;
