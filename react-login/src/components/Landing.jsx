
// Landing.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = "http://localhost:8080/login/google"; // Redirect to Go server's login endpoint
  };

  return (
    <div>
      <h1>Welcome to Google OAuth Example</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};
export default Landing;
