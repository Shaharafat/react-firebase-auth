import React from "react";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../components";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { currentUser, doLogout, doRemoveUser } = useAuth();
  const { displayName, email, photoURL } = currentUser;
  const history = useHistory();

  // logout user
  const logoutUser = async () => {
    try {
      await doLogout();
      history.push("/");
    } catch (error) {
      console.error("Error: while signing out...", error.message);
    }
  }
  
  // remove user
  const removeUser = async () => {
    try {
      await doRemoveUser();
      history.push("/");
    } catch (error) {
      console.error("Error: while deleting user...", error.message);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="content-container">
        {photoURL && <img src={photoURL} alt="user" className="rounded-full border-4 border-gray-800" /> }
        <h2 className="text-gray-800 text-xl font-bold mt-3">{displayName}</h2>
        <h5 className="text-sm text-gray-600">{email}</h5>
        <Button icon={faEraser} bgColor="bg-red-600" handleClick={removeUser}>Delete Account</Button>
        
        <div className="mt-4 py-2 border-t-2 w-full text-center">
          <span onClick={logoutUser} className="text-blue-500 hover:underline" >Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
