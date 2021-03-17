import React from "react";
import { Link } from "react-router-dom";
import { Form, SocialLogin } from "../components";

const Login = () => {
  
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="content-container">
        <p className="text-gray-600 font-semibold mt-4">Login to your account</p>
        <Form />
        {/* social login options */}
        <p className="text-md text-gray-500 my-3">or</p>
        <SocialLogin />
        <div className="mt-4 py-2 border-t-2 w-full text-center flex flex-col">
          <span><Link to="/forgotPassword" className="text-blue-500 hover:underline">Forgot password?</Link></span>
          <span className="inline-block mt-3">New User? <Link to="/signup" className="text-blue-500 hover:underline">Create an account</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
