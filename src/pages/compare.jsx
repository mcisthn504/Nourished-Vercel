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
        <button className="compare-button" onClick={() => console.log("Comparing...")}>
          Compare
        </button>
      )}
    </div>
  );
};

export default Compare;


