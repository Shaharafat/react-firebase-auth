import React from "react";
import { Link } from "react-router-dom";
import { Form, SocialLogin } from "../components";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { doSingInWithGoogle,doLogout, currentUser } = useAuth();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="content-container">
        <p className="text-gray-600 font-semibold mt-4">Log in to your account</p>
        <Form isSignupPage={true} />
        <p className="text-md text-gray-500 my-3">or</p>
        <SocialLogin />
        <div className="mt-4 py-2 border-t-2 w-full text-center">
          <span>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
