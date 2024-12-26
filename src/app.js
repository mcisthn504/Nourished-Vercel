import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import DailyChallenge from "./pages/daily-challenge";
import ExplanationPage from "./pages/explanation";
import TakePicturePage from "./pages/take-a-pic";
import HamburgerPage from "./pages/hamburger";
import PizzaPage from "./pages/pizza";
import Layout from "./pages/layout";
import CategoriesPage from "./pages/categories";
import ProfilePage from "./pages/profile";
import FavoritesPage from "./pages/favorites";
import { FavoritesProvider } from "./contexts/FavoritesContext";

// Placeholder Components
const ActivityLog = () => <h2>Activity Log Page</h2>;

const App = () => {
  return (
    <FavoritesProvider>
      {" "}
      {/* Wraps the Router */}
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
                <TakePicturePage />
              </Layout>
            }
          />
          <Route
            path="/favorites"
            element={
              <Layout>
                <FavoritesPage />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <ProfilePage />
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
          <Route
            path="/hamburger"
            element={
              <Layout>
                <HamburgerPage />
              </Layout>
            }
          />
          <Route
            path="/pizza"
            element={
              <Layout>
                <PizzaPage />
              </Layout>
            }
          />
          <Route
            path="/categories"
            element={
              <Layout>
                <CategoriesPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
