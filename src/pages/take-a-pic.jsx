import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/take-a-pic.css";

const TakeAPic = () => {
  const navigate = useNavigate();
  const [isPictureTaken, setIsPictureTaken] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // State for popup
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // Check if the device is mobile

    if (!isPictureTaken) {
      // Access the camera based on the device type
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: isMobile
              ? { exact: "environment" } // Use rear camera on mobile
              : "user", // Use front camera on desktop
          },
        })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err);
          alert(
            "Unable to access the camera. Please check your browser settings."
          );
        });
    } else {
      // Stop the camera when a picture is taken
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

  const takeAnotherPicture = () => {
    setIsPictureTaken(false);
    setPhoto(null);
  };

  const analyzePicture = () => {
    setIsProcessing(true); // Show popup
    setTimeout(() => {
      // Save to activity log
      const activityLog = JSON.parse(localStorage.getItem("activityLog")) || [];
      activityLog.push({
        type: "Pic Analysis",
        details: `Hamburger`,
        timestamp: new Date().toLocaleString(),
        foodResult: "Hamburger", // Pass the detected food name
      });
      localStorage.setItem("activityLog", JSON.stringify(activityLog));

      setIsProcessing(false); // Hide popup
      navigate("/hamburger");
    }, 2000); // Wait for 2 seconds
  };

  return (
    <div className="take-a-pic-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1>Take a Pic</h1>
      </header>

      {/* Camera Container */}
      <div className="camera-container">
        {!isPictureTaken ? (
          <video ref={videoRef} autoPlay className="camera-view"></video>
        ) : (
          <img src={photo} alt="Captured" className="camera-view" />
        )}
        <canvas
          ref={canvasRef}
          style={{ display: "none" }}
          width="640"
          height="480"
        ></canvas>
      </div>

      {/* Popup for processing */}
      {isProcessing && (
        <div className="processing-popup">
          <p>Processing image...</p>
        </div>
      )}

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
