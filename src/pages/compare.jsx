import React from "react";
import { useNavigate } from "react-router-dom";
import { usePhotoContext } from "../contexts/photoContext";
import "../styles/compare.css";

const Compare = () => {
  const navigate = useNavigate();
  const { leftPhoto, rightPhoto } = usePhotoContext();

  const handleTakePicture = (side) => {
    navigate("/compare/take-a-pic-compare", { state: { side } });
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
      <div className="left-triangle">
        <button className="button" onClick={() => handleTakePicture("left")}>
          {leftPhoto ? "Retake" : "Camera"}
        </button>
      </div>

      <div className="right-triangle">
        <button className="button" onClick={() => handleTakePicture("right")}>
          {rightPhoto ? "Retake" : "Camera"}
        </button>
      </div>

      <div className="vs-circle">VS</div>

      {leftPhoto && rightPhoto && (
        <button className="compare-button" onClick={handleCompare}>
          Compare
        </button>
      )}
    </div>
  );
};

export default Compare;
