import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Login = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="w-screen h-screen bg-gray-600 text-gray-800 dark:bg-gray-400">
          <div className="flex justify-center items-center h-full flex-wrap content-around">
            <div>
              <form
                className="w-96 h-96 mx-auto bg-gray-400 rounded-3xl px-14 py-2"
                onSubmit={handleFormSubmit}
              >
                <h2 className="text-4xl font-bold text-center text-gray-800 py-4">Log In</h2>

                <div className="pt-8 flex flex-col text-gray-800 mb-1">
                  <input
                    className="border relative bg-teal-600 hover:bg-teal-800 text-gray-800 p-3 rounded-3xl form-input"
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col mb-1 text-gray-800">
                  <input
                    className="border relative bg-teal-600 hover:bg-teal-800 text-gray-800 p-3 rounded-3xl form-input"
                    type="password"
                    placeholder="Your Password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-center pt-5"> 
                <button
                  className="w-2/5 py-3  bg-teal-400 hover:bg-teal-800 relative rounded-3xl text-gray-100 "                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Sign In
                </button>
                <button
                  className="w-2/5  py-3  bg-teal-400 hover:bg-teal-800 relative rounded-3xl text-gray-100 "                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  <Link to="/signup">Sign up</Link>
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
