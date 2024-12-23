import React /*useEffect */ from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import DailyChallenge from "./pages/daily-challenge";

// Placeholder Components
const Camera = () => <h2>Camera Page</h2>;
const Favorites = () => <h2>Favorites Page</h2>;
const Profile = () => <h2>Profile Page</h2>;
const ActivityLog = () => <h2>Activity Log Page</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daily-challenge" element={<DailyChallenge />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activity-log" element={<ActivityLog />} />
      </Routes>
    </Router>
  );
};

export default App;
