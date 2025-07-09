import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Crausel";

const AboutUs = () => {
  return (
    <div className=" text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 cinzel-font">
          About Bindni
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
          At <span className="font-semibold text-rose-600">Bindni</span>, we
          blend tradition with contemporary elegance. Our journey began with a
          simple vision: to make the rich cultural heritage of Indian
          craftsmanship accessible to everyone. With a curated collection of{" "}
          <span className="font-medium">artificial jewelry</span>,{" "}
          <span className="font-medium">imitation jewels</span>,{" "}
          <span className="font-medium">ethnic wear</span>,{" "}
          <span className="font-medium">sarees</span>,{" "}
          <span className="font-medium">lehengas</span>,{" "}
          <span className="font-medium">handbags</span>, and{" "}
          <span className="font-medium">handicrafts</span> — we bring timeless
          beauty into modern wardrobes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-14 max-w-4xl mx-auto text-center"
      >
        <p className=" text-rose-600 text-3xl caveat-font">
          “Jewelry and fashion aren’t just accessories — they’re expressions of
          your inner self.”
        </p>
        <p className="mt-4 text-sm text-gray-500">— Team Bindni</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start py-20"
      >
        <div>
          <h2 className="text-2xl font-bold mb-3 cinzel-font">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to redefine ethnic fashion by offering finely crafted
            pieces at affordable prices. We believe that every woman deserves to
            feel beautiful and confident in what she wears — whether it's for a
            wedding, a celebration, or a casual moment of self-expression.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 cinzel-font">What We Offer</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>
              Premium-quality <strong>artificial and imitation jewelry</strong>{" "}
              for every occasion
            </li>
            <li>
              Hand-picked <strong>sarees</strong> and <strong>lehengas</strong>{" "}
              with rich fabric & embroidery
            </li>
            <li>
              Designer <strong>handbags</strong> that blend elegance and utility
            </li>
            <li>
              Exclusive <strong>handcrafted decor</strong> and accessories
            </li>
            <li>Custom styling and personalized service</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-14 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-2xl font-bold mb-4 cinzel-font">Why Choose Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          We’re not just a brand — we’re a movement to revive, respect, and
          revolutionize Indian heritage. With direct sourcing from local
          artisans, strict quality control, and trend-savvy designs, Bindni is
          where authenticity meets affordability. Join us in celebrating
          elegance every day.
        </p>
      </motion.div>

      <div className="w-full p-1 flex justify-center items-center py-20 gap-20">
        <h1 className="text-2xl font-bold mb-4 cinzel-font">
          In store <br /> Customer Reviews
        </h1>
        <Carousel />
      </div>
    </div>
  );
};

export default AboutUs;
