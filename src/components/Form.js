/*
 *
 * Title: Sign up and Login form
 * Description: This form will be used in signup and login page.
 *              validation message shown differently for different page.
 * Author: Shah Arafat
 * Date: 17-03-2021
 *
 */

import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useAuth } from "../context/AuthContext";
import { loginSchema, signUpSchema } from "../helper/schemas";

const Form = ({ isSignupPage = false }) => {
  const [error, setError] = useState("");

  const {
    doSignupWithEmailPass,
    doSigninWithEmailPass,
  } = useAuth();

  const history = useHistory();

  const { register, errors, handleSubmit } = useForm({
    mode: "onTouched",
    resolver: isSignupPage
      ? yupResolver(signUpSchema)
      : yupResolver(loginSchema),
  });

  // this will executed when signup attempt taken
  const signup = async (data) => {
    const { email, password } = data;
    try {
      setError('');
      await doSignupWithEmailPass(email, password);
      history.push("/");
    } catch (error) {
      setError(error.message)
      console.error("Error signing up", error.message);
    }
  };

  // this will executed when login attempt taken
  const login = async (data) => {
    const { email, password } = data;
    try {
      setError('');
      await doSigninWithEmailPass(email, password);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(isSignupPage ? signup : login)} // handlesubmit depending on operation
    >
      <div hidden={!isSignupPage}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          ref={register}
          className="form-input"
          autoComplete="on"
        />
        <p className="text-sm text-red-600">{errors.name?.message}</p>
      </div>

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

      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          ref={register}
          className="form-input"
          autoComplete="on"
        />
        <p className="text-sm text-red-600">
          {isSignupPage &&
            errors.password?.message &&
            "Password must contain at least 1 capital letter, 1 small letter, 1 numeric digit and 1 special characters (#,$,_) and minimum length should be 8 characters"}
        </p>
      </div>
      <p className="text-red-600 text-sm mt-2">{error}</p>
      <button
        type="submit"
        className="form-input bg-green-500 hover:bg-green-600 text-white font-semibold text-md"
      >
        {isSignupPage ? "Sign up" : "Login"}
      </button>
    </form>
  );
};

export default Form;
