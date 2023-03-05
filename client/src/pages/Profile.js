import React, { useState, useEffect } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Order from "./Order";

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <h1 className="flex justify-center align-middle">
        THIS IS THE PROFILE PAGE
      </h1>
    </>
  );
}
