import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';



const Profile = () => {
    const { loading, data } = useQuery(GET_ME);
    let userData = data?.me || {};
    console.log(userData);

    const orderHistory = userData.order_history
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
        // <div class="bg-[#2DD4BF] bg-cover">
        //     <div className="flex justify-center">
        //         Hello {userData.name}
        //     </div>
        //     <div className="grid grid-cols-2">
        //         <div className="flex justify-center">
        //             <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 w-64 mt-6" >
        //                 Your rewards
        //             </div>
        //         </div>
        //         <div >

        //             <h1 className="text-xl">Your Favorites:</h1>
        //             {orderHistory.length > 0 &&

        //                 orderHistory.map((item) => (
        //                     <div className="flex justify-center">
        //                         <div
        //                             class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 w-64 mt-4">
        //                             {item.product_name} ${item.price}
        //                         </div>
        //                     </div>
        //                 ))}
        //         </div>
        //     </div>
        // </div>
        <>
            <div className=" w-screen h-screen bg-[#2DD4BF]">
                <div className="flex justify-center items-center h-full flex-wrap content-around">

                    <div className="max-w-[800px] w-full mx-auto bg-[#CCFBF1] rounded px-10 py-2">
                        <h2 className="text-4xl font-bold text-center py-4">Hello, {userData.name}</h2>
                        <div className="grid grid-cols-[60%_40%] w-full">
                            <div>
                                <h2 className="text-2xl font-bold py-4">Your Rewards</h2>
                                <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700  mt-4">
                                    Congrats u have 1000 stars which means you get 10 cents off your next order
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold ">Your Fav's</h2>
                                <div>
                                    {orderHistory.length > 0 &&

                                        orderHistory.map((item) => (
                                            <div>
                                                <div
                                                    class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700  mt-4">
                                                    {item.product_name} ${item.price}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div></>


    )
}

export default Profile;