import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePhotoContext } from "../contexts/photoContext";
import "../styles/take-a-pic.css";

const TakeAPic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { side } = location.state || {}; // Get the side ("left" or "right")

  const { setLeftPhoto, setRightPhoto } = usePhotoContext(); // Use the context
  const [isPictureTaken, setIsPictureTaken] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // State for popup
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isPictureTaken) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: isMobile ? { exact: "environment" } : "user",
          },
        })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err);
          alert("Unable to access the camera. Please check your browser settings.");
        });
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    }
  }, [isPictureTaken]);

  const takePicture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/png");
      setPhoto(imageData);
      setIsPictureTaken(true);
    }
  };

  const savePicture = () => {
    setIsProcessing(true); // Show popup
    setTimeout(() => {
      if (side === "left") {
        setLeftPhoto(photo);
      } else if (side === "right") {
        setRightPhoto(photo);
      }
      setIsProcessing(false); // Hide popup
      navigate("/compare");
    }, 2000); // Wait for 2 seconds
  };

  return (
    <div className="take-a-pic-page">
      <header className="header">
        <button className="back-button" onClick={() => navigate("/compare")}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1>Take a Picture</h1>
      </header>

      <div className="camera-container">
        {!isPictureTaken ? (
          <video ref={videoRef} autoPlay className="camera-view" />
        ) : (
          <img src={photo} alt="Captured" className="camera-view" />
        )}
        <canvas ref={canvasRef} style={{ display: "none" }} width="640" height="480"></canvas>
      </div>

      {/* Popup for processing */}
      {isProcessing && (
        <div className="processing-popup">
          <p>The image is being processed...</p>
        </div>
      )}

      <div className="action-buttons">
        {!isPictureTaken ? (
          <button className="capture-button" onClick={takePicture}>
            <i className="material-icons">camera</i>
          </button>
        ) : (
          <>
            <button className="secondary-button" onClick={() => setIsPictureTaken(false)}>
              Retake
            </button>
            <button className="primary-button" onClick={savePicture}>
              Use Photo
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TakeAPic;
