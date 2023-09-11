"use client";
import { Navbar } from "flowbite-react";
import React from "react";
import Image from "next/image";

const navItems = [
  {
    title: "მთავარი",
    path: "/",
  },
  {
    title: "სერვისები",
    path: "/services",
  },
  {
    title: "ჩვენს შესახებ",
    path: "/about",
  },
  {
    title: "ფოტო გალერეა",
    path: "/gallery",
  },
  {
    title: "პარტნიორები",
    path: "/partners",
  },
  {
    title: "კონტაქტი",
    path: "/contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <Navbar fluid={true} rounded={true} className="max-w-[84rem] mx-auto z-50">
        <Navbar.Brand href="/">
          <Image width={200} height={70} src="/logo/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navItems.map((item, idx) => (
            <Navbar.Link className="py-6" href={item.path}>
              {item.title}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
