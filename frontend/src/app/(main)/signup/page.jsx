"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required')
      .matches(/[a-z]/, 'lowercase letter is required')
      .matches(/[A-Z]/, 'uppercase letter is required')
      .matches(/[0-9]/, 'number is required')
      .matches(/\W/, 'special character is required')
      .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string().required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignUpPage = () => {
  // Initializing formik
  const signForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);

      setTimeout(() => {
        // resetForm();
        setSubmitting(false);
      }, 3000);

      // send values to backend
    },
    validationSchema: SignupSchema
  });

  return (
    <div className="flex h-screen bg-black items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#a600ff]">
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#302b63] p-10 rounded-xl shadow-xl w-full max-w-md text-white">
        <h2 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500">
          Create an Account
        </h2>
        <p className="text-gray-400 text-center">Sign up to get started</p>

        {/* Input Fields */}
        <form onSubmit={signForm.handleSubmit} className="mt-6">
          <div className="mt-6 space-y-4">
            {/* Full Name Field */}
            <div className="flex flex-col">
              <div className="flex items-center border rounded-lg p-2 bg-gray-100">
                <FontAwesomeIcon icon={faUser} className="text-gray-500 mx-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full bg-gray-100 outline-none text-black"
                  onChange={signForm.handleChange}
                  onBlur={signForm.handleBlur}
                  value={signForm.values.name}
                />
              </div>
              {signForm.touched.name && signForm.errors.name && (
                <p className="text-red-500 text-sm mt-1">{signForm.errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <div className="flex items-center border rounded-lg p-2 bg-gray-100">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mx-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-100 outline-none text-black"
                  onChange={signForm.handleChange}
                  onBlur={signForm.handleBlur}
                  value={signForm.values.email}
                />
              </div>
              {signForm.touched.email && signForm.errors.email && (
                <p className="text-red-500 text-sm mt-1">{signForm.errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <div className="flex items-center border rounded-lg p-2 bg-gray-100">
                <FontAwesomeIcon icon={faLock} className="text-gray-500 mx-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-gray-100 outline-none text-black"
                  onChange={signForm.handleChange}
                  onBlur={signForm.handleBlur}
                  value={signForm.values.password}
                />
              </div>
              {signForm.touched.password && signForm.errors.password && (
                <p className="text-red-500 text-sm mt-1">{signForm.errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col">
              <div className="flex items-center border rounded-lg p-2 bg-gray-100">
                <FontAwesomeIcon icon={faLock} className="text-gray-500 mx-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full bg-gray-100 outline-none text-black"
                  onChange={signForm.handleChange}
                  onBlur={signForm.handleBlur}
                  value={signForm.values.confirmPassword}
                />
              </div>
              {signForm.touched.confirmPassword && signForm.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{signForm.errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold"
            disabled={signForm.isSubmitting}
          >
            Sign Up
          </button>
        </form>

        {/* Social Signup */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <p className="text-center text-gray-500 mx-2">Or Sign Up With</p>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="bg-white p-4 rounded-full shadow-md cursor-pointer flex items-center justify-center w-12 h-12">
            <img src="icons8-google-48.png" alt="Google" />
          </div>
          <div className="bg-black p-4 rounded-full shadow-md cursor-pointer text-white flex items-center justify-center w-12 h-12">
           <img src="images.png" alt="" />
          </div>
          <div className="bg-blue-600 p-4 rounded-full shadow-md cursor-pointer text-white flex items-center justify-center w-12 h-12">
           <img src="Github-desktop-logo-symbol.svg.png" alt="" />
          </div>
        </div>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
