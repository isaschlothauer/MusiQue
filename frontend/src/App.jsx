import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import GenreSection from "./components/genre";
import AboutUs from "./components/aboutus";

function App() {
  return (
    <div>
      <Header />
      <GenreSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
