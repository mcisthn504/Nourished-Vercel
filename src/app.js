import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import DailyChallenge from "./pages/daily-challenge";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daily-challenge" element={<DailyChallenge />} />
      </Routes>
    </Router>
  );
};

export default App;
