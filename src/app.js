import React /*useEffect */ from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import DailyChallenge from "./pages/daily-challenge";
import ExplanationPage from "./pages/explanation";
import Layout from "./pages/layout";

// Placeholder Components
const Camera = () => <h2>Camera Page</h2>;
const Favorites = () => <h2>Favorites Page</h2>;
const Profile = () => <h2>Profile Page</h2>;
const ActivityLog = () => <h2>Activity Log Page</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/daily-challenge"
          element={
            <Layout>
              <DailyChallenge />
            </Layout>
          }
        />
        <Route
          path="/explanation/:id"
          element={
            <Layout>
              <ExplanationPage />
            </Layout>
          }
        />
        <Route
          path="/camera"
          element={
            <Layout>
              <Camera />
            </Layout>
          }
        />
        <Route
          path="/favorites"
          element={
            <Layout>
              <Favorites />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/activity-log"
          element={
            <Layout>
              <ActivityLog />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
