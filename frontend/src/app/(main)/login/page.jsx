import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"; // Import required icons

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#a600ff] backdrop-blur-4xl p-4 lg:p-0">
      <div className="flex flex-col items-center space-y-3 m-5 lg:m-0">
        <p className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500">
          Nexora
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-10">
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#302b63] p-6 lg:p-10 rounded-xl shadow-xl w-full max-w-md text-black">
          <h2 className="text-2xl lg:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center">Please enter your details</p>

          <div className="flex justify-center bg-gray-100 p-1 rounded-lg mt-6">
            <button className="w-1/2 py-2 text-center font-semibold bg-gray-500 rounded-lg shadow-sm">
              Sign In
            </button>
            <button className="w-1/2 py-2 text-center text-gray-500">Signup</button>
          </div>

          {/* Updated Input Fields */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center border rounded-lg p-2 bg-gray-100">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mx-2" />
              <input type="email" placeholder="Email Address" className="w-full bg-gray-100 outline-none" />
            </div>
            <div className="flex items-center border rounded-lg p-2 bg-gray-100">
              <FontAwesomeIcon icon={faLock} className="text-gray-500 mx-2" />
              <input type="password" placeholder="Password" className="w-full bg-gray-100 outline-none" />
            </div>
          </div>

          <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold">
            Continue
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <p className="text-center text-gray-500 mx-2">Or Continue With</p>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <div className="bg-white p-4 rounded-full shadow-md cursor-pointer flex items-center justify-center w-12 h-12">
              <img src="icons8-google-48.png" alt="Google" />
            </div>
            <div className="bg-black p-4 rounded-full shadow-md cursor-pointer text-white flex items-center justify-center w-12 h-12">
             <img src="images.png" alt=""facebook"/>
            </div>
            <div className="bg-blue-600 p-4 rounded-full shadow-md cursor-pointer text-white flex items-center justify-center w-12 h-12">
              <img src="Github-desktop-logo-symbol.svg.png" alt=""github"/>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center w-1/2">
        <img src="Forgot password-rafiki.png" alt="Illustration" className="w-3/4 h-auto" />
      </div>
    </div>
  );
};

export default LoginPage;
