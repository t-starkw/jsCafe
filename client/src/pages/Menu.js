import React, { useState, useEffect } from "react";
import Home from "./Home";
import Order from "./Order";
import Profile from "./Profile";

export default function Menu() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <h1 className="flex justify-center align-middle">
        THIS IS THE MENU PAGE
      </h1>
    </>
  );
}
