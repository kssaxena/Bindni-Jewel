import React, { useState } from "react";
import { motion } from "framer-motion";
import { lehengaCollection } from "../../Constants/Constants";
const LehengasCollection = () => {
  const zoomVariant = {
    hidden: { scale: 0.8, opacity: 1 / 2 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div className="flex flex-wrap justify-center items-center gap-20 my-20 ">
      {lehengaCollection.map((item) => (
        <motion.div
          variants={zoomVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center justify-center border-black border border-t-2 p-5 rounded-tr-[10vh] rounded-bl-[10vh] border-l-2"
        >
          <img
            className="w-60 h-96 rounded-tr-[10vh] rounded-bl-[10vh] drop-shadow-2xl shadow-[#FEF9E9] object-cover "
            src={item.url}
          />
          {/* <p className="">{item.name}</p> */}
        </motion.div>
      ))}
    </div>
  );
};

export default LehengasCollection;
