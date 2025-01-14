import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/starters.css";

import startersImage1 from "../images/starters1.jpg";
import startersImage2 from "../images/starters2.jpg";
import startersImage3 from "../images/starters3.jpg";
import startersImage4 from "../images/starters4.jpg";

const StartersPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const starters = [
    { name: "Bruschetta", image: startersImage1 },
    { name: "Garlic Bread", image: startersImage2 },
    { name: "Caprese Salad", image: startersImage3 },
    { name: "Stuffed Mushrooms", image: startersImage4 },
  ];

  return (
    <div className="starters-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToCategories}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Starters</h1>
      </header>

      {/* Starters List */}
      <div className="starters-list">
        {starters.map((starter, index) => (
          <div className="starter-item" key={index}>
            <img src={starter.image} alt={starter.name} className="starter-image" />
            <h3 className="starter-name">{starter.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartersPage;
