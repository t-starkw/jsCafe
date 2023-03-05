import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Order from "./Order";
import Profile from "./Profile";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <h1 className="flex justify-center align-middle">
        THIS IS THE HOME PAGE
      </h1>
    </>
  );
}
