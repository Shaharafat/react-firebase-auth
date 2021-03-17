/*
 *
 * Title: Social Login
 * Description: All social login options listed here
 * Author: Shah Arafat
 * Date: 18-03-2021
 *
 */

import React from "react";
import {
  faFacebookF,
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";
import { Button } from "../components";
import { useAuth } from "../context/AuthContext";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
  twitterProvider,
} from "../firebase";

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
      <Button
        handleClick={() => signInWithSocialAccount(googleProvider)}
        icon={faGoogle}
        bgColor="bg-red-500 hover:bg-red-600"
      >
        Continue with Google
      </Button>

      <Button
        handleClick={() => signInWithSocialAccount(githubProvider)}
        icon={faGithub}
        bgColor="bg-gray-800 hover:bg-gray-900"
      >
        Continue with Github
      </Button>

      <Button
        handleClick={() => signInWithSocialAccount(facebookProvider)}
        icon={faFacebookF}
        bgColor="bg-blue-800 hover:bg-blue-900"
      >
        Continue with Facebook
      </Button>

      <Button
        handleClick={() => signInWithSocialAccount(twitterProvider)}
        icon={faTwitter}
        bgColor="bg-blue-500 hover:bg-blue-600"
      >
        Continue with Twitter
      </Button>
    </div>
  );
};

export default SocialLogin;
