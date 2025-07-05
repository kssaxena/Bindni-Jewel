import React, { useState } from "react";
import Button from "../../components/Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import NecklaceCollection from "./NecklaceCollection";
import LehengasCollection from "./LehengasCollection";
import SareesCollection from "./SareesCollection";
import HandBagCollection from "./HandBagCollection";
import HandiCraftCollection from "./HandiCraftCollection";
import BlanketsCollection from "./BlanketsCollection";

const Collection = () => {
  const [activeSection, setActiveSection] = useState("Necklaces");
  //   const [isOpen, setIsOpen] = useState(false);

 
  return (
    <div>
      <section className="company_collection flex flex-col justify-start pt-10 items-center">
        <aside className="relative">
          <nav>
            <ul className="flex gap-10 items-end">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Necklaces"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Necklaces")}
              >
                Necklaces
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Lehengas"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Lehengas")}
              >
                Lehengas
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Sarees"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Sarees")}
              >
                Sarees
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Handmade Bags"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Handmade Bags")}
              >
                Handmade Bags
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3.5 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Handicraft Items"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Handicraft Items")}
              >
                Handicraft Items
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === "Blankets"
                    ? "border-b-2 duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer px-5 w-fit"
                    : "border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit"
                }`}
                onClick={() => setActiveSection("Blankets")}
              >
                Blankets
              </motion.li>
            </ul>
          </nav>
        </aside>
        <main className="collections w-full h-screen ">
          {[
            "Necklaces",
            "Lehengas",
            "Sarees",
            "Handmade Bags",
            "Handicraft Items",
            "Blankets",
          ].map((section) => (
            <div
              key={section}
              className={`absolute transition-opacity duration-500 ease-in-out w-full mt-10 px-40 h-3/4 overflow-y-scroll no-scrollbar ${
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
