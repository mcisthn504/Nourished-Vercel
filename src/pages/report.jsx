import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/report.css";

const ReportPage = () => {
  const navigate = useNavigate();
  const [selectedProblem, setSelectedProblem] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to toggle the popup

  const handleProblemSelection = (problem) => {
    setSelectedProblem(problem);
  };

  const handleConfirm = () => {
    if (selectedProblem) {
      setShowPopup(true); // Show the popup
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
    navigate("/"); // Redirect to home after closing the popup
  };

  const handleCancel = () => {
    navigate("/"); // Redirect to home without submitting
  };

  return (
    <div className="report-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={handleCancel}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Report a Problem</h1>
      </header>

      {/* Content */}
      <div className="content">
        <h2>Select the problem you want to report:</h2>
        <div className="button-container">
          <button
            className={`report-button ${
              selectedProblem === "Name Issue" ? "selected" : ""
            }`}
            onClick={() => handleProblemSelection("Name Issue")}
          >
            Name Issue
          </button>
          <button
            className={`report-button ${
              selectedProblem === "Picture Issue" ? "selected" : ""
            }`}
            onClick={() => handleProblemSelection("Picture Issue")}
          >
            Picture Issue
          </button>
          <button
            className={`report-button ${
              selectedProblem === "Nutritional Values Issue" ? "selected" : ""
            }`}
            onClick={() => handleProblemSelection("Nutritional Values Issue")}
          >
            Nutritional Values Issue
          </button>
          <button
            className={`report-button ${
              selectedProblem === "Category Issue" ? "selected" : ""
            }`}
            onClick={() => handleProblemSelection("Category Issue")}
          >
            Category Issue
          </button>
        
            {/* Action Buttons */}
            <div className="action-buttons">
            <button className="cancel-button" onClick={handleCancel}>
                Cancel
            </button>
            <button
                className="confirm-button"
                onClick={handleConfirm}
                disabled={!selectedProblem} // Disable if no problem is selected
            >
                Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>Your report has been submitted.</p>
            <button className="close-popup-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportPage;
