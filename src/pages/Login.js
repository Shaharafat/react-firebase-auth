import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form } from "../components";
import { useAuth } from "../context/AuthContext";
import { faGoogle, faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const { doSignInWithGoogle, doLogout, currentUser } = useAuth();
  const history = useHistory();
  const signInWithGoogle = async () => {
    try {
      await doSignInWithGoogle();
      history.push("/");
    } catch (error) {
      console.error("error while signing up with google", error.message);
    }
  };

  const logout = async () => {
    try {
      await doLogout();
      history.push("/");
    } catch (error) {
      console.error("Error: while signing out...", error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center w-5/6 md:w-3/6 lg:w-2/5 xl:w-1/3 p-4 shadow rounded-lg">
        <p className="text-gray-600 font-semibold mt-4">Sign up for your account</p>
        <Form />
        {/* social login options */}
        <p className="text-md text-gray-500 my-3">or</p>
        <Button handleClick={signInWithGoogle} icon={faGoogle} bgColor="bg-red-500">Continue with Google</Button>
        <Button handleClick={signInWithGoogle} icon={faGithub} bgColor="bg-gray-800">Continue with Github</Button>
        <Button handleClick={signInWithGoogle} icon={faFacebookF} bgColor="bg-blue-900">Continue with Facebook</Button>
        <Button handleClick={signInWithGoogle} icon={ faTwitter } bgColor="bg-blue-500">Continue with Twitter</Button>

        <div className="mt-4 py-2 border-t-2 w-full text-center">
          <span>New User? <Link to="/signup" className="text-blue-500 hover:underline">Create an account</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
