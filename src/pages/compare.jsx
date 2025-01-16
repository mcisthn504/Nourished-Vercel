import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePhotoContext } from "../contexts/photoContext";
import "../styles/compare.css";

const Compare = () => {
  const navigate = useNavigate();
  const { leftPhoto, rightPhoto, setLeftPhoto, setRightPhoto } = usePhotoContext();
  const [popupMessage, setPopupMessage] = useState("");

  const handleTakePictureLeft = () => {
    navigate("/compare/take-a-pic-compare", { state: { side: "left" } });
  };

  const handleTakePictureRight = () => {
    navigate("/compare/take-a-pic-compare", { state: { side: "right" } });
  };

  const handleSearchLeft = () => {
    navigate("/compare/search", { state: { side: "left" } });
  };

  const handleSearchRight = () => {
    navigate("/compare/search", { state: { side: "right" } });
  };

  const handleCancelLeft = () => {
    setLeftPhoto(null); // Reset the left photo
  };

  const handleCancelRight = () => {
    setRightPhoto(null); // Reset the right photo
  };

  const handleCompareClick = () => {
    if (!leftPhoto || !rightPhoto) {
      setPopupMessage("Please select two items before comparing");
      return;
    }

    const leftFood = "Hamburger";
    const rightFood = "Pizza";

    const activityLog = JSON.parse(localStorage.getItem("activityLog")) || [];
    activityLog.push({
      type: "Comparison",
      details: `${leftFood} vs ${rightFood}`,
      timestamp: new Date().toLocaleString(),
      comparisonResult: { left: leftFood, right: rightFood },
    });
    localStorage.setItem("activityLog", JSON.stringify(activityLog));

    setLeftPhoto(null); // Reset the left photo
    setRightPhoto(null); // Reset the right photo

    navigate("/compare/result");
  };

  const handleClosePopup = () => {
    setPopupMessage("");
  };

  const handleGoBack = () => {
    setLeftPhoto(null); // Reset the left photo
    setRightPhoto(null); // Reset the right photo
    navigate("/");
  };

  return (
    <div className="compare-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={handleGoBack}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1>Compare</h1>
      </header>

      {/* Left Controls */}
      <div className="left-controls">
        {leftPhoto ? (
          <button className="cancel-button-compare" onClick={handleCancelLeft}>
            Cancel Selection
          </button>
        ) : (
          <>
            <button className="icon-button" onClick={handleTakePictureLeft}>
              <i className="material-icons">camera_alt</i>
            </button>
            <button className="icon-button" onClick={handleSearchLeft}>
              <i className="material-icons">search</i>
            </button>
          </>
        )}
      </div>

      {/* Right Controls */}
      <div className="right-controls">
        {rightPhoto ? (
          <button className="cancel-button-compare" onClick={handleCancelRight}>
            Cancel Selection
          </button>
        ) : (
          <>
            <button className="icon-button" onClick={handleTakePictureRight}>
              <i className="material-icons">camera_alt</i>
            </button>
            <button className="icon-button" onClick={handleSearchRight}>
              <i className="material-icons">search</i>
            </button>
          </>
        )}
      </div>

      {/* Compare Button */}
      <button className="compare-button" onClick={handleCompareClick}>
        Compare
      </button>

      {/* Popup Message */}
      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <h2>Ooops!</h2>
            <p>{popupMessage}.</p>
            <button className="close-popup-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compare;
