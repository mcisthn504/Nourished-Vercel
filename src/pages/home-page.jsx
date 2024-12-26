import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/home-page.css";
import DailyChallengeImage from "../images/daily-challenge.png";
import TakeAPicImage from "../images/take-a-pic.png";
import CompareImage from "../images/compare.png";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSearchClick = () => {
    // Navigate to /pizza when the search button is clicked
    navigate("/pizza");
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <h1>NourishED</h1>
        </div>
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
      </header>

      <div className="categories">
        <div className="categories-header">
          <h2>Categories</h2>
          {/* Use Link here to navigate to /categories */}
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
        <div className="card">
          <Link to="/daily-challenge">
            <h3>Daily Challenge</h3>
            <div className="card-content">
              <img src={DailyChallengeImage} alt="Daily Challenge" />
            </div>
          </Link>
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
          <h3>Compare</h3>
          <div className="card-content">
            <img src={CompareImage} alt="Compare" />
          </div>
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
    </div>
  );
};

export default HomePage;
