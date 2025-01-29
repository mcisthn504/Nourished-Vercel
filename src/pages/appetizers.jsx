import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css"; // Update this if the file path or style name differs

// Import appetizer images
import wingsImage from "../images/chickenWingsImage.jpg";
import friesImage from "../images/potatoes.png"; // Assuming this is for fries or roasted potatoes

const AppetizersPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  // Define the appetizers array with their navigation paths
  const appetizers = [
    { name: "Chicken Wings", image: wingsImage, path: "/chicken-wings" },
    { name: "Potatoes", image: friesImage, path: "/potatoes" }, 
  ];

  // Function to handle navigation on card click
  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="desserts-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToCategories}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Appetizers</h1>
      </header>

      {/* Appetizers List */}
      <div className="desserts-list">
        {appetizers.map((appetizer, index) => (
          <div
            className="dessert-item"
            key={index}
            onClick={() => handleNavigate(appetizer.path)}
            style={{
              cursor: appetizer.path ? "pointer" : "not-allowed",
              opacity: appetizer.path ? 1 : 0.6,
            }}
          >
            <img
              src={appetizer.image}
              alt={appetizer.name}
              className="dessert-image"
            />
            <h3 className="dessert-name">{appetizer.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppetizersPage;
