import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles/App.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="flow-root bg-rose-500">
        <ul className="flex justify-between p-4 gap-2 float-left">
          <CustomLink
            to="/"
            className="flex float left text-4xl cursor-pointer capitalize font-medium text-black dark:text-white bg-rose-500"
          >
            JsCafe
          </CustomLink>
        </ul>
        <ul className="flex justify-between p-4 gap-2 float-right">
          <CustomLink
            to="menu"
            className="flex cursor-pointer capitalize font-medium text-black dark:text-white bg-rose-500"
          >
            Menu
          </CustomLink>
          <CustomLink
            to="order"
            className="flex cursor-pointer capitalize font-medium text-black dark:text-white bg-rose-500"
          >
            Order
          </CustomLink>
          <CustomLink
            to="profile"
            className="flex cursor-pointer capitalize font-medium text-black dark:text-white bg-rose-500"
          >
            Profile
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
}

// Function to reduce custom links to absolute links.

// This allows the navbar to change componenets rather
// than the entire page being refreshed.

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}


