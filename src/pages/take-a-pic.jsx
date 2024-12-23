import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/take-a-pic.css";

import hamburgerImage from "../images/hamburger.png"; // Replace with the static hamburger image path

const TakeAPic = () => {
  const navigate = useNavigate();

  const goBackToHomepage = () => {
    navigate("/");
  };

  const goToHamburgerPage = () => {
    navigate("/hamburger-page"); // Replace with the actual route of the hamburger page
  };

  return (
    <div className="take-a-pic-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToHomepage}>
          <i className="material-icons">arrow_back</i>
          Back
        </button>
        <h1>Take a Pic</h1>
      </header>

      {/* Camera Placeholder */}
      <div className="camera-container">
        <img
          src={hamburgerImage}
          alt="Static Hamburger"
          className="camera-view"
        />
      </div>

      {/* Capture Button */}
      <button className="capture-button" onClick={goToHamburgerPage}>
        <i className="material-icons">camera</i>
      </button>
    </div>
  );
};

export default TakeAPic;
