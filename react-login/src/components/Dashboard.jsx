
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userInfo.name}</h1>
      <p>Email: {userInfo.email}</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Dashboard;
