import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Collection from "./pages/Collections/Collection";
import Gallery from "./pages/Gallery/Gallery";

// import './App.css'

function App() {
  return (
    <div className="bg-[#D6D7C2] fredoka-font ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-collections" element={<Collection />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
