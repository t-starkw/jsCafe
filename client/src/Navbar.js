import React, { useState } from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { BiFoodMenu, BiCoffee } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbPigMoney } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import "./styles/App.css";

export default function Navbar({props}) {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <nav>
        <ul>
          <CustomLink to="/">
            <SideBarIcon icon={<BiCoffee size="28" />} />
          </CustomLink>
          <CustomLink to="menu">
            <SideBarIcon icon={<BiFoodMenu size="28" name="menu" />} />
          </CustomLink>
          <CustomLink to="order">
            <SideBarIcon icon={<TbPigMoney size="28" />} />
          </CustomLink>
          {/* To select last children */}
          <div className="fixed bottom-0 left-0 w-16 m-0 flex flex-col">
            <CustomLink to="login">
              <SideBarIcon icon={<CgProfile size="28" />} />
            </CustomLink>
            <SideBarIcon icon={<MdDarkMode size="28" />} />
          </div>
        </ul>
      </nav>
    </div>
  );
}


const SideBarIcon = ({ icon, text = "tooltip"}) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

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
