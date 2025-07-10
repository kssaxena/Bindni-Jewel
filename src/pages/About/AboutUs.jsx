import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Crausel";
import AboutBindni from "./AboutBindni";
import ContactUs from "./ContactUs";

const AboutUs = () => {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <AboutBindni />
      <ContactUs />
    </div>
  );
};

export default AboutUs;
