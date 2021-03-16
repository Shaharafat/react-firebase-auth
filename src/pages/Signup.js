import React from "react";
import { Button } from "../components";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { doSingInWithGoogle,doLogout, currentUser } = useAuth();
  console.log(currentUser)
  return (
    <div>
      <Button handleClick={doSingInWithGoogle}>Signup with Google</Button>
      <Button handleClick={doLogout}>Logout</Button>
    </div>
  );
};

export default Signup;
