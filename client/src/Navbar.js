import React, { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { BiFoodMenu, BiCoffee } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbPigMoney } from "react-icons/tb";
import { MdDarkMode, MdLogout, MdLogin } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "./styles/App.css";
import Auth from "./utils/auth";

export default function Navbar({ props }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-gray-200 dark:bg-gray-300 dark:text-gray-900 shadow-lg">
        <nav>
          <ul>
            <CustomLink
              data-tooltip-id="home"
              data-tooltip-content="Home"
              to="/"
            >
              <SideBarIcon icon={<BiCoffee size="28" />} />
            </CustomLink>
            <Tooltip id="home" place="right" />
            <CustomLink
              to="menu"
              data-tooltip-id="menu"
              data-tooltip-content="Menu"
            >
              <SideBarIcon icon={<BiFoodMenu size="28" name="menu" />} />
            </CustomLink>
            <Tooltip id="menu" place="right" />
            {/* <CustomLink
              to="order"
              data-tooltip-id="order"
              data-tooltip-content="Order"
            >
              <SideBarIcon icon={<TbPigMoney size="28" />} />
            </CustomLink>
            <Tooltip id="order" place="right" /> */}
            <CustomLink data-tooltip-id="dark" data-tooltip-content="Dark Mode">
              <SideBarIcon
                icon={
                  <MdDarkMode
                    onClick={() => setDarkMode(!darkMode)}
                    size="28"
                  />
                }
              />
            </CustomLink>
            <Tooltip id="dark" place="right" />
            {/* To select last children */}
            <div className="fixed bottom-0 left-0 w-16 m-0 flex flex-col">
              {Auth.loggedIn() ? (
                <>
                  {/* This is where I added profile @Tessa */}
                  <CustomLink
                    to="profile"
                    data-tooltip-id="profile"
                    data-tooltip-content="Profile"
                  >
                    <SideBarIcon icon={<CgProfile size="28" />} />
                  </CustomLink>
                  <Tooltip id="profile" place="right" />
                  {/* Logout */}
                  <CustomLink
                    onClick={Auth.logout}
                    data-tooltip-id="logout"
                    data-tooltip-content="Logout"
                  >
                    <SideBarIcon icon={<MdLogout size="28" />} />
                  </CustomLink>
                  <Tooltip id="logout" place="right" />
                </>
              ) : (
                <CustomLink
                  to="login"
                  data-tooltip-id="login"
                  data-tooltip-content="Login/Signup"
                >
                  <SideBarIcon icon={<MdLogin size="28" />} />
                  <Tooltip id="login" place="right" />
                </CustomLink>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
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
