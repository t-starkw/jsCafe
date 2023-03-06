import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

// import Home from "./Home";
// import Order from "./Order";
// import Profile from "./Profile";

import MenuItems from "../components/MenuItems";
import { QUERY_MENU_ITEMS } from "../utils/queries";

export default function Menu() {
  const { loading, error, data } = useQuery(QUERY_MENU_ITEMS);
  console.log("Data", data);

  const menu_items = data?.menu_items || [];
  console.log("Menu items", menu_items);

  if (loading) return <p className="flex justify-center">Loading...</p>;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex justify-center">
      <MenuItems grid>{JSON.stringify(data)}</MenuItems>;
    </div>
  );
}

// export default function Menu() {
//   const [darkMode, setDarkMode] = useState(false);
//   return (
//     <>
//       <h1 className="flex justify-center align-middle">
//         THIS IS THE MENU PAGE
//       </h1>
//     </>
//   );
// }
