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
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
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
                "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-06-30%20at%204.40.21%E2%80%AFPM.png?updatedAt=1751282003358"
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
          <div className="  text-sm grid grid-cols-2 gap-10 p-4"></div>
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
      className="relative w-full flex items-center justify-around "
    >
      <img
        className="w-48 absolute top-2 left-20 "
        src={`https://ik.imagekit.io/pz8qfunss/oie_FNGIcUJCB8uq.png?updatedAt=1751607165073`}
      />
      <Navbar className="top-2" />
      <div className="flex justify-end items-center w-full gap-5 px-20 py-10">
        <FaInstagram className="text-2xl " />
        <FaWhatsapp className="text-2xl " />
        <FaFacebook className="text-2xl " />
        <FaYoutube className="text-2xl " />
      </div>
    </motion.div>
  );
}
