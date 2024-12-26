import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css"; // Reuse the existing CSS

const ProfilePage = () => {
  const navigate = useNavigate();

  const goBackToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="profile-info-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToHomePage}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Profile</h1>
      </header>

      {/* Content */}
      <div className="content">
        <div className="profile-container">
          <div className="profile-picture-placeholder"></div>
          <h2 className="profile-name">John Doe</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Age</h3>
            <p>30</p>
          </div>
          <div className="info-row">
            <h3>Location</h3>
            <p>New York, USA</p>
          </div>
          <div className="info-row">
            <h3>Interests</h3>
            <p>Food, Technology, Traveling</p>
          </div>
          <div className="info-row">
            <h3>Favorite Food</h3>
            <p>Pizza, Sushi, Hamburger</p>
          </div>
          <div className="info-row">
            <h3>Bio</h3>
            <p>
              I am a food enthusiast who loves exploring new cuisines and
              experimenting with recipes. When Im not in the kitchen, I enjoy
              learning about emerging technologies and traveling to new places.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
