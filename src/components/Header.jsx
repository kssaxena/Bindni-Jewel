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

const productArray = [
  {
    title: "Imitation Jewellery",
    href: "#",
    src: "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-06-30%20at%204.40.21%E2%80%AFPM.png?updatedAt=1751282003358",
    description: "Prepare for tech interviews like never before.",
  },
  {
    title: "Lehenga",
    href: "#",
    src: "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-06-30%20at%204.42.45%E2%80%AFPM.png?updatedAt=1751282003302",
    description: "Prepare for tech interviews like never before.",
  },
  {
    title: "Saree",
    href: "#",
    src: "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-06-30%20at%204.50.58%E2%80%AFPM.png?updatedAt=1751282479536",
    description: "Prepare for tech interviews like never before.",
  },
  {
    title: "Handmade Bags",
    href: "#",
    src: "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-06-30%20at%204.41.03%E2%80%AFPM.png?updatedAt=1751282002864",
    description: "Prepare for tech interviews like never before.",
  },
  {
    title: "Handicraft Items",
    href: "#",
    src: "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-06-30%20at%204.41.31%E2%80%AFPM.png?updatedAt=1751282003181",
    description: "Prepare for tech interviews like never before.",
  },
  {
    title: "Blankets",
    href: "#",
    src: "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-06-30%20at%204.42.13%E2%80%AFPM.png?updatedAt=1751282025123",
    description: "Prepare for tech interviews like never before.",
  },
];
const ServiceArray = [
  { name: "Artificial Jewelry Franchise", href: "/franchise-enquiry-jewelry" },
  { name: "Ethnic Wears Franchise", href: "/franchise-enquiry-ethnic" },
  { name: "Franchise for Both", href: "/franchise-enquiry-all" },
  { name: "Branding", href: "/branding" },
];
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
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="  text-sm gap-10 ">
            <ProductItem
              href="/"
              src={
                "https://ik.imagekit.io/pz8qfunss/Header_Products/Screenshot%202025-06-30%20at%204.40.21%E2%80%AFPM.png?updatedAt=1751282003358"
              }
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Categories">
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
        <MenuItem setActive={setActive} active={active} item="Gallery">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4"></div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            {ServiceArray.map((items) => (
              <HoveredLink href={items.href}>{items.name}</HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
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
    <div className="relative w-full flex items-center justify-around ">
      <img
        className="w-56 absolute top-2 left-20 "
        src={`https://ik.imagekit.io/pz8qfunss/bindni.png?updatedAt=1751308457192`}
      />
      <Navbar className="top-2" />
      <div>

      </div>
      {/* <img
        className="w-56 absolute top-2 right-20 "
        src={`https://ik.imagekit.io/pz8qfunss/bindni.png?updatedAt=1751308457192`}
      /> */}
    </div>
  );
}
