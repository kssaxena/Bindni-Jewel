"use client";
import React, { useRef, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoClose } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { MdCancel } from "react-icons/md";
import { productArray, ServiceArray } from "../Constants/Constants";
import { LuAlignLeft } from "react-icons/lu";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn(" max-w-2xl z-50 text-[#1f1f1f] ", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" whereTo="/">
          <div className="  text-sm gap-10 ">
            <ProductItem
              href="/"
              src={
                "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-07-06%20at%202.46.40%E2%80%AFPM.png?updatedAt=1751793455109"
              }
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Collections"
          whereTo="/all-collections"
        >
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            {productArray.map((items) => (
              <ProductItem
                key={items.title}
                title={items.title}
                href={items.href}
                src={items.src}
                description={items.description}
              />
            ))}
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Gallery"
          whereTo="/gallery"
        >
          {/* Gallery section can be added here */}
          <div className="  text-sm">
            <ProductItem
              href="/gallery"
              src={
                "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-07-07%20at%201.16.43%E2%80%AFAM.png?updatedAt=1751831306401"
              }
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Services"
          whereTo="/services"
        >
          {/* Services section can be added here */}
          <div className="flex flex-col space-y-4 text-sm">
            {ServiceArray.map((items) => (
              <HoveredLink href={items.href}>{items.name}</HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="About"
          whereTo="/about"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about-blog">Blog</HoveredLink>
            <HoveredLink href="/about-carrier">Carrier</HoveredLink>
            <HoveredLink href="/about-bindni">About Bindni</HoveredLink>
            <HoveredLink href="/about-contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
const HamburgerMenu = ({ onClose }) => {
  const modelRef = useRef();
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/all-collections", label: "Collection" },
    { path: "/gallery", label: "Gallery" },
    { path: "/services", label: "Services" },
    { path: "/#", label: "About" },
  ];

  const handleClickOutside = (e) => {
    if (modelRef.current === e.target) onClose();
  };
  const handleAuthentication = () => {
    navigate("/authentication");
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 120 }}
      ref={modelRef}
      onClick={handleClickOutside}
      className="fixed inset-0 flex h-screen w-screen z-50 backdrop-blur-3xl overflow-hidden snap-none"
    >
      <div className="flex flex-col  w-full">
        <div className="h-20 flex justify-between p-6 gap-2 ">
          <h1 className="text-3xl font-Caveat font-semibold flex justify-between items-start w-full  ">
            Menu{" "}
            <span>
              <button onClick={onClose}>
                <IoClose />
              </button>
            </span>
          </h1>
        </div>
        <section className="menu-section flex flex-col justify-center items-center h-full ">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`border-b duration-200 ease-in-out megrim-font font-extrabold text-2xl cursor-pointer hover:px-5 w-fit m-2 px-5 ${
                location.pathname === item.path ? "shadow-2xl border-b-2" : ""
              }`}
            >
              {/* {item.icon} */}
              {item.label}
            </Link>
          ))}
          <div className="justify-center items-center gap-2 py-10 flex ">
            <a href="tel:+9931430899" target="_blank" rel="noopener noreferrer">
              <IoCall className="text-3xl p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>

            <a
              href="https://www.instagram.com/bindinijewel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>

            <a
              href="https://wa.me/917489535194"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-3xl p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>
            <a
              href="https://maps.app.goo.gl/CZJRh2oK7hAxGvdj7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot className="text-3xl p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
            </a>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export function Header() {
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative w-full flex items-center justify-around z-40"
    >
      <div className="Hamburger lg:hidden flex fixed top-5 left-5 backdrop-blur-3xl rounded-full  p-5">
        <button className="" onClick={() => setShowHamburger(true)}>
          <LuAlignLeft className="text-black lg:hidden text-xl" />
        </button>
      </div>
      <div className="lg:w-3/4 w-full flex justify-center lg:justify-start items-center h-20">
        <img
          className="lg:w-32 w-20"
          src={`https://ik.imagekit.io/pz8qfunss/oie_FNGIcUJCB8uq.png?updatedAt=1751607165073`}
        />
      </div>

      {/* navbar start */}
      <Navbar className="top-2 hidden lg:flex fixed" />
      {/* navbar end  */}

      <div className="justify-center items-center gap-2 py-10 hidden lg:flex ">
        <a href="tel:+9931430899" target="_blank" rel="noopener noreferrer">
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
          href="https://maps.app.goo.gl/CZJRh2oK7hAxGvdj7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLocationDot className="text-2xl lg:text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        </a>
      </div>
      {showHamburger && (
        <HamburgerMenu onClose={() => setShowHamburger(false)} />
      )}
    </motion.div>
  );
}
