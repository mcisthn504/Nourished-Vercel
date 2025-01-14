import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css"; // Reuse the existing CSS

const ProfilePage = () => {
  const navigate = useNavigate();

  const goBackToHomePage = () => {
    navigate("/");
  };

  // State for user info
  const [userInfo, setUserInfo] = useState(() => {
    const savedData = localStorage.getItem("userInfo");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "John Doe",
          age: "30",
          location: "New York, USA",
          interests: "Food, Technology, Traveling",
          favoriteFood: "Pizza, Sushi, Hamburger",
          bio: "I am a food enthusiast who loves exploring new cuisines and experimenting with recipes. When I'm not in the kitchen, I enjoy learning about emerging technologies and traveling to new places.",
        };
  });

  const [isEditing, setIsEditing] = useState(false);

  // Save user info to localStorage when it's updated
  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);


  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Format field name for display
  const formatFieldName = (fieldName) => {
    return fieldName
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase words
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  };

  return (
    <div className="profile-info-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToHomePage}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Profile</h1>
        <button className="edit-button" onClick={toggleEditMode}>
          <i className="material-icons">{isEditing ? "save" : "edit"}</i>
        </button>
      </header>

      {/* Content */}
      <div className="content">
        <div className="profile-container">
          <div className="profile-picture-placeholder"></div>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="editable-input"
            />
          ) : (
            <h2 className="profile-name">{userInfo.name}</h2>
          )}
        </div>
        <div className="info-list">
          {["age", "location", "interests", "favoriteFood", "bio"].map((field) => (
            <div className="info-row" key={field}>
              <h3>{formatFieldName(field)}</h3>
              {isEditing ? (
                field === "bio" ? (
                  <textarea
                    name={field}
                    value={userInfo[field]}
                    onChange={handleInputChange}
                    className="editable-input"
                    style={{ width: "100%", height: "150px", resize: "vertical" }} // Larger text area for bio
                  />
                ) : (
                  <input
                    type="text"
                    name={field}
                    value={userInfo[field]}
                    onChange={handleInputChange}
                    className="editable-input"
                    style={{
                      width: field === "age" ? "50px" : "100%",
                    }} // Small input for age, full width for others
                  />
                )
              ) : (
                <p>{userInfo[field]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
