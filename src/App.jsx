import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Collection from "./pages/Collections/Collection";
import Gallery from "./pages/Gallery/Gallery";
import Services from "./pages/Services/Services";
import JewelFranchise from "./pages/Services/JewelFranchise";
import EthnicFranchise from "./pages/Services/EthnicFranchise";
import BothFranchise from "./pages/Services/BothFranchise";
import Branding from "./pages/Services/Branding";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/About/ContactUs";
import AboutBindni from "./pages/About/AboutBindni";

// import './App.css'

function App() {
  return (
    <div className="bg-[#D6D7C2] fredoka-font w-full montserrat-font">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-collections" element={<Collection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services-franchise-enquiry-jewelry"
          element={<JewelFranchise />}
        />
        <Route
          path="/services-franchise-enquiry-ethnic"
          element={<EthnicFranchise />}
        />
        <Route
          path="/services-franchise-enquiry-all"
          element={<BothFranchise />}
        />
        <Route path="/services-branding" element={<Branding />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-bindni" element={<AboutBindni />} />
        <Route path="/about-contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
