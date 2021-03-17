import React from 'react';
import { faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { googleProvider, facebookProvider, githubProvider, twitterProvider } from '../firebase';
import { Button } from "../components";

const SocialLogin = () => {
  const { doSocialSignIn } = useAuth();

  const history = useHistory();
  
  const signInWithSocialAccount = async (provider) => {
    try {
      await doSocialSignIn(provider);
      history.push("/");
    } catch (error) {
      console.error("error while signing up with google", error.message);
    }
  };

  return (
    <div>
      <Button handleClick={() => signInWithSocialAccount(googleProvider)} icon={faGoogle} bgColor="bg-red-500 hover:bg-red-600">Continue with Google</Button>
      <Button handleClick={() => signInWithSocialAccount(githubProvider)} icon={faGithub} bgColor="bg-gray-800 hover:bg-gray-900">Continue with Github</Button>
      <Button handleClick={() => signInWithSocialAccount(facebookProvider)} icon={faFacebookF} bgColor="bg-blue-800 hover:bg-blue-900">Continue with Facebook</Button>
      <Button handleClick={() => signInWithSocialAccount(twitterProvider)} icon={ faTwitter } bgColor="bg-blue-500 hover:bg-blue-600">Continue with Twitter</Button>
    </div>
  )
}

export default SocialLogin
