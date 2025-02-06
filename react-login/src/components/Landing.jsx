// Landing.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import Header from "./Header";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = "http://localhost:8080/login/google";
  };

  return (
    <>
      <Header />
      <div className="landing-container">
        <div className="landing-content">
          <h1>Welcome to Google OAuth Example</h1>
          <p className="subtitle">Securely login with your Google account</p>
          <button className="google-login-btn" onClick={handleLogin}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google logo" 
              className="google-icon" 
            />
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
