import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/take-a-pic.css";

import hamburgerImage from "../images/hamburger.jpg";
import cameraPlaceholder from "../images/camera_placeholder.jpg";

const TakeAPic = () => {
  const navigate = useNavigate();
  const [isPictureTaken, setIsPictureTaken] = useState(false);

  const goBackToHomepage = () => {
    navigate("/");
  };

  const takePicture = () => {
    setIsPictureTaken(true);
  };

  const takeAnotherPicture = () => {
    setIsPictureTaken(false);
  };

  const analyzePicture = () => {
    navigate("/hamburger");
  };

  return (
    <div className="take-a-pic-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToHomepage}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1>Take a Pic</h1>
      </header>

      {/* Camera Placeholder */}
      <div className="camera-container">
        {isPictureTaken && (
          <img
            src={hamburgerImage}
            alt="Static Hamburger"
            className="camera-view"
          />
        )}
        {!isPictureTaken && (
          <img
            src={cameraPlaceholder}
            alt="Working Camera"
            className="camera-view"
          />
        )}
      </div>

      {/* Buttons */}
      <div className="action-buttons">
        {!isPictureTaken ? (
          <button className="capture-button" onClick={takePicture}>
            <i className="material-icons">camera</i>
          </button>
        ) : (
          <>
            <button className="secondary-button" onClick={takeAnotherPicture}>
              Take Another Picture
            </button>
            <button className="primary-button" onClick={analyzePicture}>
              Analyze
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TakeAPic;
