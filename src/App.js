import React from "react";
import { Button } from "./components";
import { AuthProvider } from "./context/AuthContext";
import { Signup } from "./pages";

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  )
}

export default App;
