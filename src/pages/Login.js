import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, SocialLogin } from "../components";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { doLogout } = useAuth();


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="content-container">
        <p className="text-gray-600 font-semibold mt-4">Sign up for your account</p>
        <Form />
        {/* social login options */}
        <p className="text-md text-gray-500 my-3">or</p>
        <SocialLogin />
        <div className="mt-4 py-2 border-t-2 w-full text-center">
          <span>New User? <Link to="/signup" className="text-blue-500 hover:underline">Create an account</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
