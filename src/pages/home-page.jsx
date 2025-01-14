import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home-page.css";
import DailyChallengeImage from "../images/daily-challenge.png";
import TakeAPicImage from "../images/take-a-pic.png";
import CompareImage from "../images/compare.png";

const HomePage = () => {
  const navigate = useNavigate();
  const [hasCompletedChallenge, setHasCompletedChallenge] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already completed the challenge
    const completed = localStorage.getItem("hasCompletedChallenge") === "true";
    setHasCompletedChallenge(completed);
  }, []);

  const handleDailyChallengeClick = () => {
    if (hasCompletedChallenge) {
      // Show the popup if the challenge is already completed
      setPopupVisible(true);
    } else {
      // Mark challenge as completed and store in localStorage
      setHasCompletedChallenge(true);
      localStorage.setItem("hasCompletedChallenge", "true");
      navigate("/daily-challenge");
    }
  };

  const handleSearchClick = () => {
    const searchBar = document.querySelector(".search-bar");
    const searchTerm = searchBar ? searchBar.value : "";
  
    navigate("/search", { state: { searchTerm } });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="homepage">
       <header className="header">
        <div className="logo">
          <h1>NourishED</h1>
        </div>
      </header>

      <div className="search-section">
        <div className="search-bar-container">
          <span className="search-icon" onClick={handleSearchClick}>
            <i className="material-icons">search</i>
          </span>
          <input
            type="text"
            className="search-bar"
            placeholder="Search food..."
          />
          <span className="mic-icon">
            <i className="material-icons">mic</i>
          </span>
        </div>
      </div>

      <div className="categories">
        <div className="categories-header">
          <h2>Categories</h2>
          <Link to="/categories" className="see-all-link">
            See all
          </Link>
        </div>
        <div className="category-tags">
          <span className="tag">Seconds</span>
          <span className="tag">Fruits</span>
          <span className="tag">Proteic Foods</span>
          <span className="tag">Appetizers</span>
        </div>
      </div>

      <section className="cards">
        <div className="card" onClick={handleDailyChallengeClick}>
          <h3>Daily Challenge</h3>
          <div className="card-content">
            <img src={DailyChallengeImage} alt="Daily Challenge" />
          </div>
        </div>
        <div className="card">
          <Link to="/camera">
            <h3>Take a Pic</h3>
            <div className="card-content">
              <img src={TakeAPicImage} alt="Take a Pic" />
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/compare">
            <h3>Compare</h3>
            <div className="card-content">
              <img src={CompareImage} alt="Compare" />
            </div>
          </Link>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/" className="active">
          <i className="material-icons">home</i>
          <span>Home</span>
        </Link>
        <Link to="/camera">
          <i className="material-icons">camera_alt</i>
          <span>Camera</span>
        </Link>
        <Link to="/favorites">
          <i className="material-icons">favorite</i>
          <span>Favorites</span>
        </Link>
        <Link to="/profile">
          <i className="material-icons">person</i>
          <span>Profile</span>
        </Link>
        <Link to="/activity-log">
          <i className="material-icons">history</i>
          <span>Activity Log</span>
        </Link>
      </nav>

      {/* Popup Modal */}
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>You have already completed the Daily Challenge!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
