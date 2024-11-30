import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Animation Page</h1>
      <button className="start-button" onClick={() => navigate("/animation")}>
        Start Animation
      </button>
    </div>
  );
};

export default HomePage

