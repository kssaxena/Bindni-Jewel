import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div>
      {/* <h1 className="text-black text-outline-white bg-black">
        Outlined Text
      </h1>{" "} */}
      <div className="flex lg:h-fit relative">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="lg:h-[90vh] w-full overflow-hidden object-cover object-center flex justify-center items-center "
        >
          <img
            className="h-[50vh] lg:h-full w-full object-cover object-center"
            src={
              "https://ik.imagekit.io/jarvisai/Ariser%20Tradco/A%20high-resolution,%20realistic%20daytime%20photograph%20of%20a%20house%20exterior%20with%20a%20symmetrical%20composition.%20In%20the%20center,%20there%20is%20a%20modern%20dark%20brown%20wooden%20double%20door%20with%20detailed%20paneling%20and%20a%20brass%20handle.%20To%20the%20right%20of%20the%20door%20is%20a%20%20(2).jpg"
            }
          />
        </motion.div>
        <div className="absolute w-full h-full top-0 left-0 py-auto">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className=" h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/60 text-[#DEDFD8] cinzel-font tracking-widest flex-col lg:gap-20"
          >
            <span className="text-3xl">
              Bindni{" "}
              <span className="text-lg">A house of bridal collections</span>
            </span>
            <span className="lg:text-7xl text-3xl">Contact Us</span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
