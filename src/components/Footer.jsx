import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Button from "./Button";
import EnquiryForm from "./EnquiryForm";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);
  return (
    <div className="border-t py-10 mx-20 z-50">
      <div className="flex justify-center items-center">
        <FaInstagram className="text-2xl " />
        <FaWhatsapp className="text-2xl " />
        <FaFacebook className="text-2xl " />
        <FaYoutube className="text-2xl " />
      </div>
      <div className="text-center mt-10 z-50 w-full flex justify-center items-center">
        <Button
          className={"z-50 absolute w-fit"}
          onClick={toggleForm}
          Label={isOpen ? "Close Enquiry Form" : "Open Enquiry Form"}
        />
        {/* <button className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition"></button> */}

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
      </div>
      {/* <div>
        
      </div> */}
    </div>
  );
};

export default Footer;
