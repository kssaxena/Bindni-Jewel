"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children, whereTo }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.a
        href={whereTo}
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] hover:border-b ease-in-out"
      >
        {item}
      </motion.a>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="backdrop-blur-sm bg-white/90 rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl"
              >
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4 "
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerBgClass =
    location.hash === "/about" || !isScrolled ? "" : "bg-[#D6D7C2]";
  const headerBgClass2 =
    location.hash === "/about-contact" || !isScrolled ? "" : "bg-[#D6D7C2]";
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className={`relative rounded-full   backdrop-blur-3xl shadow-2xl shadow-[#FEF9E9] dark:border-neutral-200 shadow-input flex justify-center space-x-4 px-8 py-6 text-[#1f1f1f] border-[#1f1f1f] border ${headerBgClass} ${headerBgClass2}`}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black">{title}</h4>
        <p className=" text-sm max-w-[10rem]">{description}</p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a {...rest} className="">
      {children}
    </a>
  );
};
