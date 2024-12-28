import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePhotoContext } from "../contexts/photoContext";
import "../styles/take-a-pic.css";

const TakeAPicCompare = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const side = location.state?.side; // "left" or "right"
  const { setLeftPhoto, setRightPhoto } = usePhotoContext();

  const handleTakePicture = () => {
    const mockPhoto = "data:image/png;base64,MOCK_PHOTO_DATA"; // Replace with actual photo logic

    if (side === "left") {
      setLeftPhoto(mockPhoto);
    } else if (side === "right") {
      setRightPhoto(mockPhoto);
    }

    navigate("/compare");
  };

  return (
    <div className="take-a-pic-page">
      <div className="header">
        <button className="back-button" onClick={() => navigate("/compare")}>
          &larr;
        </button>
        <h1>Take a Picture</h1>
      </div>
      <div className="camera-container">
        <div className="camera-view">Camera Preview</div>
      </div>
      <button className="capture-button" onClick={handleTakePicture}>
        Capture
      </button>
    </div>
  );
};

export default TakeAPicCompare;

