import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Collection from "./pages/Collections/Collection";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#D6D7C2] fredoka-font ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-collections" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
