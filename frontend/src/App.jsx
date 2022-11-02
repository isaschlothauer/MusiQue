import React from "react";
import "./App.css";
import Recommended from "./components/Recommended";
import WorldMusic from "@components/WorldMusic";

function App() {
  return (
    <div className="App">
      <Recommended />
      <WorldMusic />
    </div>
  );
}

export default App;
