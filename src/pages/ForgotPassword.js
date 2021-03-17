/*
 *
 * Title: Password Reset
 * Description: Reset password using email confirmation
 * Author: Shah Arafat
 * Date: 17-03-2021
 *
 */

import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const [success,setSuccess] = useState("");
  const [error,setError] = useState("");
  const { doResetPassword } = useAuth();
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(
      yup.object().shape({ email: yup.string().email().required() }) // yup schema
    ),
  });

  const resetPassword = async (data) => {
    let { email } = data;
    try {
      setSuccess("")
      setError("")
      await doResetPassword(email);
      setSuccess("Password reset mail sent. Check email to reset");
    } catch (error) {
      // setError('No user found with this email')
      setError(error.message)
      console.log("Password reset operation failed.", error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="content-container">
        <p className="text-gray-600 font-semibold mt-4">Reset password</p>

        <form
          className="w-full"
          onSubmit={handleSubmit(resetPassword)} // handlesubmit depending on operation
        >
          <div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              ref={register}
              className="form-input"
              autoComplete="on"
            />
            <p className="text-sm text-red-600">{errors.email?.message}</p>
          </div>

          {success && <p className="text-sm text-green-600 mt-2">{success}</p> }
          {error && <p className="text-sm text-red-600 mt-2">{error}</p> }

          <button
            type="submit"
            className="form-input bg-green-500 hover:bg-green-600 text-white font-semibold text-md"
          >
            Reset Password
          </button>
        </form>

        {/* extra options to navigate */}
        <div className="mt-4 py-2 border-t-2 w-full text-center">
          <span>
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
