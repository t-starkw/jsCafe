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

import { useQuery } from "@apollo/client";

// import Home from "./Home";
// import Order from "./Order";
// import Profile from "./Profile";

import MenuItems from "../components/MenuItems";
import { QUERY_MENU_ITEMS } from "../utils/queries";

export default function Menu() {
  const { loading, error, data } = useQuery(QUERY_MENU_ITEMS, {
    fetchPolicy: "no-cache",
  });
  console.log("Data", data);

  const menu_items = data?.allMenuItems || [];
  console.log("Menu items", menu_items);

  if (loading) return <p className="flex justify-center">Loading...</p>;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex justify-center">
      <div>
        <div className="grid grid-cols-4 gap-4">
        {
  menu_items &&
    menu_items.map((menu_item) => (
      <div class="m-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            // ADD IMAGES LATER? OR REMOVE ALTOGETHER?
            src=""
            alt=""
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {menu_item.product_name}
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            {/* MAYBE ADD THIS LATER? WHAT ELSE COULD GO HERE? */}
            {/* <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {menu_item.description}
            </span> */}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${menu_item.price}
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    ))
}

        </div>
      </div>
      {/* <MenuItems grid>{JSON.stringify(data)}</MenuItems>; */}
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

