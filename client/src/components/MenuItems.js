import React from "react";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_HISTORY } from "../utils/mutations";
import Auth from "../utils/auth";
import espresso from "../images/espresso2.jpeg";

function MenuItems(props) {
  // shopping cart, does cart need to be an [] or a {}?
  const [cart, setCart] = useState([]);
  const [cartDiv, setDiv] = useState({});

  function addToCart(x) {
    const updateCart = [
      ...cart,
      {
        _id: x.id,
        product_name: x.product_name,
        price: x.price,
      },
    ];
    setCart(updateCart);
  }

  const [addToHistory] = useMutation(ADD_HISTORY);

  const handleCheckout = async (cart) => {
    const order = cart;
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token);
    if (!token) {
      return false;
    }
    try {
      await addToHistory({
        variables: { input: order },
      });
      window.location.assign('/thanks');

    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {props.items.map((x) => (
        <div className="m-10 w-full max-w-sm bg-gray-300 border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img className="p-8 rounded-t-lg" src={espresso} alt="" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {x.product_name}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${x.price}
              </span>
              <a
                href="#"
                className="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={() => {
                  console.log(x);
                  addToCart(x);
                  console.log(cart);
                }}
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
      <div>
        <div className="m-10 w-full pl-2 max-w-sm static font-bold text-xl bg-gray-300 border border-gray-200 rounded-lg shadow">
          Your shopping cart:
          {cart.map((cartItem) => (
            <ul>
              <li>
                {cartItem.product_name} ${cartItem.price}
              </li>
            </ul>
          ))}
          <div className="flex items-center pt-20 pb-5 justify-center">
            <a
              href="#"
              className="text-white static bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => {
                console.log(cart);
                handleCheckout(cart);
              }}
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuItems;
