import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import GenreSection from "./components/genre";

import Rock from "./pages/Rock";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/rock/*" element={<Rock />} />
      </Routes>
    </div>
  );
}

export default App;
