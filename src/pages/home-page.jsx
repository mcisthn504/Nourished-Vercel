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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchOptions = [
    "Pizza",
    "Pizza with ham",
    "Hamburger",
    "Cheeseburger",
    "Salad",
    "Tacos",
    "Pasta",
    "Sushi",
    "Chicken Wings",
    "Fried Rice",
    "Hot Dog",
    "Steak",
    "Ice Cream",
    "Pancakes",
    "Grilled Fish",

  ];

  useEffect(() => {
    // Check if the user has already completed the challenge                     // WARNING!!
    const completed = localStorage.getItem("hasCompletedChallenge") === "false"; //CHANGE TO "true" in final version, should be false only in testing
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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      // Filter options based on input
      const filtered = searchOptions.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowDropdown(true);
    } else {
      setFilteredOptions([]);
      setShowDropdown(false);
    }
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setShowDropdown(false);
    navigate("/search", { state: { searchTerm: option } });
  };

  const handleSearchClick = () => {
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
       
       {/* Documentation Button */}
       <Link to="/documentation" className="documentation-button">
          <i className="material-icons">description</i> {/* Document icon */}
        </Link>
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
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="mic-icon">
            <i className="material-icons">mic</i>
          </span>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="dropdown-menu">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))
              ) : (
                <div className="dropdown-item">No results found</div>
              )}
            </div>
          )}
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
          <span className="tag">
            <Link to="/categories/starters" className="see-all-link">
              Starters
            </Link>
          </span>
          <span className="tag">
            <Link to="/categories/mains" className="see-all-link">
              Mains
            </Link>
          </span>
          <span className="tag">
            <Link to="/categories/desserts" className="see-all-link">
              Desserts
            </Link>
          </span>
          <span className="tag">
            <Link to="/categories/appetizers" className="see-all-link">
              Appetizers
            </Link>
          </span>
        </div>
      </div>

      <section className="cards">
        <div className="card" onClick={handleDailyChallengeClick}>
          <h3>Daily Challenge</h3>
          <div className="card-content">
            <img src={DailyChallengeImage} alt="Daily Challenge" />
          </div>
        </div>
        <div className="card" onClick={() => navigate("/camera")}>
          <h3>Take a Pic</h3>
          <div className="card-content">
            <img src={TakeAPicImage} alt="Take a Pic" />
          </div>
        </div>
        <div className="card" onClick={() => navigate("/compare")}>
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
