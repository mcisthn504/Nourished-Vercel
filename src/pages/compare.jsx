import React from "react";
import { useNavigate } from "react-router-dom";
import { usePhotoContext } from "../contexts/photoContext";
import "../styles/compare.css";

const Compare = () => {
  const navigate = useNavigate();
  const { leftPhoto, rightPhoto } = usePhotoContext();

  const handleTakePictureLeft = () => {
    navigate("/compare/take-a-pic-compare", { state: { side: "left" } });
  };

  const handleTakePictureRight = () => {
    navigate("/compare/take-a-pic-compare", { state: { side: "right" } });
  };

  const handleSearchLeft = () => {
    console.log("Search for left item triggered");
    // Add logic for left search
  };

  const handleSearchRight = () => {
    console.log("Search for right item triggered");
    // Add logic for right search
  };

  const handleCompare = () => {
    const leftFood = "Hamburger"; // Mock left food item
    const rightFood = "Pizza"; // Mock right food item

    const activityLog = JSON.parse(localStorage.getItem("activityLog")) || [];
    activityLog.push({
      type: "Comparison",
      details: `${leftFood} vs ${rightFood}`,
      timestamp: new Date().toLocaleString(),
      comparisonResult: { left: leftFood, right: rightFood }, // Store both foods
    });
    localStorage.setItem("activityLog", JSON.stringify(activityLog));

    navigate("/compare/result"); // Navigate to the comparison result page
  };

  return (
    <div className="compare-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1>Compare</h1>
      </header>

      {/* Left Controls */}
      <div className="left-controls">
        <button className="button" onClick={handleTakePictureLeft}>
          {leftPhoto ? "Retake" : "Take Picture"}
        </button>
        <button className="button" onClick={handleSearchLeft}>
          Search
        </button>
      </div>

      {/* Right Controls */}
      <div className="right-controls">
        <button className="button" onClick={handleTakePictureRight}>
          {rightPhoto ? "Retake" : "Take Picture"}
        </button>
        <button className="button" onClick={handleSearchRight}>
          Search
        </button>
      </div>

      {/* Compare Button */}
      {leftPhoto && rightPhoto && (
        <button className="compare-button" onClick={handleCompare}>
          Compare
        </button>
      )}
    </div>
  );
};

export default Compare;
