import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
    const { loading, data } = useQuery(GET_ME);
    let userData = data?.me || {};
    console.log(userData);

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
            {console.log(userData.order_history[10].product_name)}
            {userData.order_history[10].product_name}
        </div>
        </>
    )
}

export default Profile;