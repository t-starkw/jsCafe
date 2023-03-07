import React, { useState, useEffect } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Profile from "./Profile";

export default function Order() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <h1 className="flex justify-center align-middle">
        THIS IS THE ORDER PAGE
      </h1>
    </>
  );
}
}
