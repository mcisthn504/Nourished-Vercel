import React from "react";
import { Link } from "react-router-dom";
import "../styles/home-page.css";

const Layout = ({ children }) => {
  return (
    <div className="content-with-padding">
      {children}

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

export default Layout;
