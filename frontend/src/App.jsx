import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import GenreSection from "./components/genre";

function App() {
  return (
    <div>
      <Header />
      <GenreSection />
      <Footer />
    </div>
  );
}

export default App;
