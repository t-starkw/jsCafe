import React, { useState, useEffect } from "react";
import Contact from "../components/HomePage/Contact";
import Hero from "../components/HomePage/Hero";
import How from "../components/HomePage/How";
import Menu from "./Menu";
import Order from "./Order";
import Profile from "./Profile";

export default function Home() {
  return (
    <>
    <div className="
    bg-gray-600
    h-screen w-screen scrollbar-none
    snap-y snap-mandatory scroll-smooth
    overflow-y-auto overflow-hidden
    ">
      <Hero />
      <How />
      <Contact />
    </div>
    </>
  );
}
