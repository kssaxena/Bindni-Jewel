import React, { useState } from "react";
import Button from "../../components/Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import NecklaceCollection from "./NecklaceCollection";
import LehengasCollection from "./LehengasCollection";
import SareesCollection from "./SareesCollection";
import HandBagCollection from "./HandBagCollection";
import HandiCraftCollection from "./HandiCraftCollection";
import BlanketsCollection from "./BlanketsCollection";
import { MdCancel } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";

const Collection = () => {
  const [activeSection, setActiveSection] = useState("Sarees");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    "Necklaces",
    "Lehengas",
    "Sarees",
    "Handmade Bags",
    "Handicraft Items",
    "Blankets",
  ];

  return (
    <div>
      <section className="company_collection flex flex-col justify-start lg:pt-10 items-center">
        <aside className="relative">
          <nav>
            <ul className="flex gap-10 items-end">
              {sections.map((section, idx) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 + idx * 0.5 }}
                  className={`cursor-pointer transition-all duration-300 hidden lg:flex ${
                    activeSection === section
                      ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                      : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </motion.li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden w-full flex flex-col justify-center items-center gap-5">
            <p className="cinzel-font">
              Currently you are viewing{" "}
              <span className="text-2xl border-b">{activeSection}</span>
            </p>
            <button
              className=""
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Open navigation menu"
            >
              <span className="justify-around items-center flex w-full gap-5">
                <h1>Tap here to explore collections </h1>
                <FaChevronDown className="text-2xl" />{" "}
              </span>
            </button>
          </div>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden fixed top-0 left-0 w-full h-full backdrop-blur-3xl  shadow-lg z-10 justify-center items-center flex "
              >
                <ul className="flex flex-col justify-center items-center  gap-4 p-6">
                  {sections.map((section) => (
                    <li
                      key={section}
                      className={`cursor-pointer transition-all duration-300 ${
                        activeSection === section
                          ? "border-b-2 megrim-font font-extrabold text-xl"
                          : "border-b megrim-font font-extrabold text-xl"
                      }`}
                      onClick={() => {
                        setActiveSection(section);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {section}
                    </li>
                  ))}
                  <button
                    className="flex justify-center items-center "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MdCancel /> Close
                  </button>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </aside>
        <main className="collections w-full h-screen ">
          {sections.map((section) => (
            <div
              key={section}
              className={`absolute transition-opacity duration-500 ease-in-out w-full lg:mt-10 px-4 md:px-40 h-3/4 overflow-y-scroll no-scrollbar ${
                activeSection === section
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {section === "Necklaces" && <NecklaceCollection />}
              {section === "Lehengas" && <LehengasCollection />}
              {section === "Sarees" && <SareesCollection />}
              {section === "Handmade Bags" && <HandBagCollection />}
              {section === "Handicraft Items" && <HandiCraftCollection />}
              {section === "Blankets" && <BlanketsCollection />}
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default Collection;
