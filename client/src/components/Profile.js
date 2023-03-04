import About from '/About';
import Home from '/Home';
import Menu from '/Menu';
import Navbar from '/Navbar';
import Profile from '/Profile';

import React from "react";


const Profile = () => {
    return (
        <div className = "relative w-full h-screen bg-pink-400">
           
            <div className="flex justify-center items-center h-full flex-wrap content-around">
                <div>
                    <form className="max-w-[400px] w-full mx-auto bg-white rounded px-10 py-2">
                        <h2 className="text-4xl font-bold text-center py-4">JS CAFE</h2>

                        <div className="flex flex-col mb-1">
                            <label>Username</label>
                            <input className="border relative bg-blue-200 p-2" type= "text"/>
                        </div>

                        <div className="flex flex-col mb-1">
                            <label>Password</label>
                            <input className="border relative bg-blue-400 p-2" type= "password" />
                        </div>

                        <button className="w-full py-3 mt-8 bg-blue-600 relative text-white ">Sign In</button>
                        <p className="flex items-center mt-2"><input className="mr-2" type="checkbox" />Remember Me</p>
                           
                        <p className="text-center mt-8">Not a Member? Sign up now</p>
                    </form>
                </div>

           </div>
        </div>
    )
}

export default Profile