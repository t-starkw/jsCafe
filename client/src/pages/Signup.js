import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
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
    <>
      <div className="w-screen h-screen bg-gray-600 text-gray-800 dark:bg-gray-400">
        <div className="flex justify-center items-center h-full flex-wrap content-around">
          <div>
            <form
              className="w-96 h-96 gap-3 mx-auto bg-gray-400 text-gray-800 rounded-3xl px-14 py-2"
              onSubmit={handleFormSubmit}
            >
              <h2 className="text-4xl font-bold text-center text-gray-800 py-4">
                Sign Up
              </h2>

              <div className="pt-4 flex flex-col mb-1 text-gray-800">
                <input
                  className="border relative bg-teal-600 hover:bg-teal-800 p-3 rounded-3xl form-input"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col mb-1 text-gray-800">
                <input
                  className="border relative bg-teal-600 hover:bg-teal-800 p-3 rounded-3xl form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col mb-1 text-gray-800">
                <input
                  className="border relative bg-teal-600 hover:bg-teal-800 p-3 rounded-3xl form-input"
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-center pt-5">
                <button
                  className="w-2/5 py-3  bg-teal-400 hover:bg-teal-800 relative rounded-3xl text-gray-100 "
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
