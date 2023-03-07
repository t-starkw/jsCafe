import React, { useState, useEffect } from "react";

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import { Link } from "react-router-dom";

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addProfile({
                variables: { ...formState },
            });

            Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="relative w-full h-screen bg-pink-400">
            <div className="flex justify-center items-center h-full flex-wrap content-around">
                <div>
                    <form
                        className="max-w-[400px] w-full mx-auto bg-white rounded px-10 py-2"
                        onSubmit={handleFormSubmit}
                    >
                        <h2 className="text-4xl font-bold text-center py-4">Sign Up</h2>

                        <div className="flex flex-col mb-1">
                            <label>Name</label>
                            <input
                                className="border relative bg-blue-200 p-2 form-input"
                                placeholder="Your Name"
                                name="name"
                                type="text"
                                value={formState.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col mb-1">
                            <label>Email</label>
                            <input
                                className="border relative bg-blue-200 p-2 form-input"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}

                            />
                        </div>

                        <div className="flex flex-col mb-1">
                            <label>Password</label>
                            <input
                                className="border relative bg-blue-400 p-2 form-input"
                                type="password"
                                placeholder="******"
                                name="password"
                                value={formState.password}
                                onChange={handleChange}

                            />
                        </div>

                        <button
                            className="w-full py-3 mt-8 bg-blue-600 relative text-white "
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Sign Up
                        </button>
                        {/* <p className="flex items-center mt-2">
                            <input className="mr-2" type="checkbox" />
                            Remember Me
                        </p> */}

                        <Link to="/login">Log in</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
