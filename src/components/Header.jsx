"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
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
import { productArray, ServiceArray } from "../Constants/Constants";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-[#1f1f1f] ",
        className
      )}
    >
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

export function Header() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative w-full flex items-center justify-around z-50"
    >
      <img
        className="w-48 absolute top-2 left-20 "
        src={`https://ik.imagekit.io/pz8qfunss/oie_FNGIcUJCB8uq.png?updatedAt=1751607165073`}
      />
      <Navbar className="top-2" />
      <div className="flex justify-end items-center w-full gap-2 px-20 py-10">
        <IoCall className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaInstagram className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaWhatsapp className="text-4xl  bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaLocationDot className="text-4xl  bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        {/* <FaFacebook className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaYoutube className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <FaPinterest className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" />
        <SiGmail className="text-4xl bg-[#D6D7C2] p-1 rounded-full shadow hover:scale-105 duration-300 ease-in-out hover:shadow-md" /> */}
      </div>
    </motion.div>
  );
}
