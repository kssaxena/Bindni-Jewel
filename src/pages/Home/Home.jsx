import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-row items-center justify-evenly w-full h-screen cinzel-font">
      <div className="absolute h-full w-full select-none z-0 top-0 left-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src={`https://ik.imagekit.io/pz8qfunss/Home/jwellery%20backgound.jpg?updatedAt=1751307138279`}
        />
      </div>
      <div className="flex flex-row items-center justify-around w-full h-screen z-10">
        <div className="flex flex-col items-center justify-around  h-3/4 ">
          <h1 className=" tracking-wider text-[60px]">
            Happiness of <br /> women
          </h1>
          <div className="flex flex-col items-center justify-center ">
            <img
              className="w-60 rounded-tr-[10vh] rounded-bl-[10vh] drop-shadow-2xl shadow-[#FEF9E9] "
              src={`https://ik.imagekit.io/pz8qfunss/Home/ring.jpeg?updatedAt=1751285826577`}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  h-3/4 gap-20">
          {/* <motion.img
            className="w-96 rounded-tr-[10vh]  drop-shadow-2xl shadow-[#FEF9E9] "
            src={`https://ik.imagekit.io/pz8qfunss/Home/Black%20And%20Gold%20Traditional%20Minimalist%20Diwali%20Loading%20Instagram%20Post.png?updatedAt=1751307766490`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 95, ease: "linear" }}
          /> */}
          <img
            className="w-96 rounded-tr-[10vh] rounded-bl-[10vh] drop-shadow-2xl shadow-[#FEF9E9] "
            src={`https://ik.imagekit.io/pz8qfunss/Home/Padmakshi%20Jewellers%20-%20Product%20Photography.jpeg?updatedAt=1751285085823`}
          />
          {/* <button>Explore more </button> */}
        </div>
        <div className="flex flex-col items-center justify-around  h-3/4 ">
          <div>
            <img
              className="w-60 rounded-tr-[10vh] rounded-bl-[10vh] drop-shadow-2xl shadow-[#FEF9E9] "
              src={`https://ik.imagekit.io/pz8qfunss/Home/Jewellery%20Set.jpeg?updatedAt=1751285913022`}
            />
          </div>
          <h1 className="text-[60px] tracking-wider">Trendy jewelry</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
