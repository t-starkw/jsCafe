import React from 'react';

import MenuItems from "../components/MenuItems";


// import Home from "./Home";
// import Order from "./Order";
// import Profile from "./Profile";

const menuItems = 
  [
    {
        "_id": 1,
        "product_name": "Espresso",
        "price": 2

    },
    {
        "_id": 2,
        "product_name": "Iced Coffee",
        "price": 4

    },
    {
        "_id": 3,
        "product_name": "Latte",
        "price": 4

    },
    {
        "_id": 4,
        "product_name": "Americano",
        "price": 2

    },
    {
        "_id": 5,
        "product_name": "Cappuccino",
        "price": 3

    },
    {
        "_id": 6,
        "product_name": "Bagel",
        "price": 2

    },
    {
        "_id": 7,
        "product_name": "Chocolate Croissant",
        "price": 3

    },
    {
        "_id": 8,
        "product_name": "Blueberry Muffin",
        "price": 3

    }
]




  // const [cart, setCart] = useState([]);
  // const [history, setHistory] = useState([]);
  // const [addToHistory] = useMutation(ADD_HISTORY);
  // const { loading, error, data } = useQuery(QUERY_MENU_ITEMS, {
  //   fetchPolicy: "no-cache",
  // });
  // console.log("Data", data);

  // const menu_items = data?.allMenuItems || [];
  // console.log("Menu items", menu_items);

  // if (loading) { return <p className="flex justify-center">Loading...</p> };
  // if (error) { return `Error! ${error.message}` };
  export default function Menu() {


  return (
    <div className="flex justify-center ml-20">
      <div>
        <div className="grid grid-cols-4 gap-4">
          <MenuItems items={menuItems} />

        </div>

        {/* TESTING GROUNDS */}

      </div>

      {/* <MenuItems grid>{JSON.stringify(data)}</MenuItems>; */}
    </div >
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
