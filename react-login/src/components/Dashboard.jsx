import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Dashboard.css";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const state = queryParams.get("state");
        const code = queryParams.get("code");

        if (state && code) {
          const response = await fetch(
            `http://localhost:8080/callback?state=${state}&code=${code}`
          );
          const data = await response.json();
          setUserInfo(data);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  if (!userInfo) {
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="profile-section">
            <img 
              src={userInfo.picture || "https://via.placeholder.com/100"} 
              alt="Profile" 
              className="profile-image"
            />
            <h1>Welcome, {userInfo.name}</h1>
            <p className="email">{userInfo.email}</p>
          </div>
          <button className="logout-button" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
