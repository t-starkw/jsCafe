import React, { useState, useEffect } from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { useQuery } from "@apollo/client";

import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = () => {
  const { loading, data } = useQuery(GET_ME);
  let userData = data?.me || {};
  console.log(userData);

  const orderHistory = userData.order_history;
  console.log(orderHistory);

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return "sorry, you need to login";
  }

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className=" w-screen h-screen bg-gray-600">
        <div className="flex justify-center items-center h-full">
          <div className="flex justify-center items-center flex-col w-2/3 h-2/3 bg-teal-400 rounded-3xl">
            <div className="top-0">
              <h2 className="text-4xl font-bold top-0 text-center">
                Hello, {userData.name}
              </h2>
            </div>
            <div className="flex flex-row">
              <div className="flex items-center justify-center flex-col w-1/2">
                <h2 className="text-2xl font-bold text-center py-4">
                  Your Rewards
                </h2>
                <div className="block  text-center rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700  mt-4">
                  Congrats you are only one star away from 5$ off your next
                  order!
                </div>
                <div className="rounded-lg flex flex-row bg-white p-6 shadow-lg dark:bg-neutral-700 mt-4">
                  <RiStarSFill /> <RiStarSFill /> <RiStarSFill />
                  <RiStarSFill /> <RiStarSLine />
                </div>
              </div>
              <div className="flex items-center justify-center flex-col w-1/2">
                <h2 className="text-2xl font-bold text-center py-4">
                  Your Fav's
                </h2>
                {orderHistory.length > 0 &&
                  orderHistory.map((item) => (
                    <div>
                      <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700  mt-4">
                        {item.product_name} ${item.price}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
