import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

// import Home from "./Home";
// import Order from "./Order";
// import Profile from "./Profile";

import MenuItems from "../components/MenuItems";
import { QUERY_MENU_ITEMS } from "../utils/queries";

export default function Menu() {
  const { loading, error, data } = useQuery(QUERY_MENU_ITEMS, {
    fetchPolicy: "no-cache"
  });
  console.log("Data", data);

  const menu_items = data?.allMenuItems || [];
  console.log("Menu items", menu_items);

  if (loading) return <p className="flex justify-center">Loading...</p>;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex justify-center">
          <div>
      <div>
        {menu_items &&
          menu_items.map((menu_item) => (
            <div>
              <h4>
                {menu_item.product_name} <br />
              </h4>
              <p>
                {menu_item.price} <br />
              </p>
            </div>
          ))}
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
