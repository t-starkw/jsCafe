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
        <>
        <div className="text-center">
            Hello {userData.name}
        </div>
        <div className="text-center">
            Your Favorites:
            {orderHistory.length > 0 &&
            
            orderHistory.map((item) => (
                <ul>
                    <li>{item.product_name} ${item.price}</li>
                </ul>
            ))}
        </div>
        </>
    )
}

export default Profile;