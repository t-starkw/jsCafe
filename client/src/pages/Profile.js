import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { useQuery } from "@apollo/client";

import { GET_ME } from '../utils/queries';
import { Link } from "react-router-dom";

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
        <div>
            Hello welcome to ur profile
        </div>
        </>
    )
}

export default Profile;