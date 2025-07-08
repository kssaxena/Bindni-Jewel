import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

import Button from "./Button";
import EnquiryForm from "./EnquiryForm";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);
  return (
    <div className="border-t lg:py-10 py-5 z-50 flex flex-col-reverse lg:flex-row justify-around items-center mx-10">
      <div className="">
        <img
          className="lg:w-40 w-20"
          src={
            "https://ik.imagekit.io/pz8qfunss/oie_813580l2T0UIcd-removebg-preview.png?updatedAt=1751975969212"
          }
        />
      </div>
      <div className="text-center text-sm lg:text-base">
        <h1>
          Bindni Jewel{" "}
          <span className="text-sm text-gray-500 ">
            A house of Bridal Collection
          </span>
          <br></br>All rights reserved.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <a href="tel:+917489535194" target="_blank" rel="noopener noreferrer">
          <IoCall className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>

        <a
          href="https://www.instagram.com/bindinijewel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>

        <a
          href="https://wa.me/917489535194"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61572907311050"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>

        <a
          href="https://www.youtube.com/@BindiniJewel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>

        <a
          href="https://in.pinterest.com/bindinijewel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>

        <a
          href="https://maps.app.goo.gl/CZJRh2oK7hAxGvdj7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLocationDot className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>

        <a
          href="mailto:bindnijewel@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>
      </div>
      {/* <div className="text-center mt-10 z-50 w-full flex justify-center items-center">
        <Button
          className={"z-50 absolute w-fit"}
          onClick={toggleForm}
          Label={isOpen ? "Close Enquiry Form" : "Open Enquiry Form"}
        />
        <button className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition"></button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="enquiryForm"
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-full backdrop-blur-3xl flex justify-center items-center z-50"
            >
              <motion.div
                className=" w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative mx-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  onClick={toggleForm}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
                >
                  &times;
                </button>
                <EnquiryForm />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}
    </div>
  );
};

export default Footer;
