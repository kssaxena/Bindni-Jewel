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
import { IoCall } from "react-icons/io5";
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
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/carrier">Carrier</HoveredLink>
            <HoveredLink href="/about">About Bindni</HoveredLink>
            <HoveredLink href="/contact">Contact Us</HoveredLink>
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
    { path: "/#", label: "Edit Password" },
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
      <div className="flex flex-col w-full">
        <div className="h-248 flex justify-between p-6 gap-2">
          <h1 className="text-3xl font-Caveat font-semibold flex justify-between items-start w-full  ">
            Menu{" "}
            <span>
              <button onClick={onClose}>
                <MdCancel />
              </button>
            </span>
          </h1>
          {/* <button onClick={onClose}>
            <MdCancel />
          </button> */}
        </div>
        <section className="menu-section flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`font-Exo border border-[#EB5A2A]  my-1 mx-2 py-2 px-2 rounded-full w-3/4 flex justify-start items-center gap-5 ${
                location.pathname === item.path
                  ? "bg-[#EB5A2A] shadow-2xl text-white"
                  : ""
              }`}
            >
              {/* {item.icon} */}
              {item.label}
            </Link>
          ))}
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
          className="lg:w-48 w-20"
          src={`https://ik.imagekit.io/pz8qfunss/oie_FNGIcUJCB8uq.png?updatedAt=1751607165073`}
        />
      </div>
      <Navbar className="top-2 hidden lg:flex fixed" />
      <div className="justify-center items-center gap-2 py-10 hidden lg:flex ">
        <IoCall className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaInstagram className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaWhatsapp className="text-4xl  bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaLocationDot className="text-4xl  bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        {/* <FaFacebook className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaYoutube className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaPinterest className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <SiGmail className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" /> */}
      </div>
      {showHamburger && (
        <HamburgerMenu onClose={() => setShowHamburger(false)} />
      )}
    </motion.div>
  );
}
