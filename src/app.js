import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import DailyChallenge from "./pages/daily-challenge";
import ExplanationPage from "./pages/explanation";
import TakePicturePage from "./pages/take-a-pic";
import ComparePage from "./pages/compare";
import CompareResultPage from "./pages/compare-result-page"; // Import the new page
import HamburgerPage from "./pages/hamburger";
import PizzaPage from "./pages/pizza";
import Layout from "./pages/layout";
import CategoriesPage from "./pages/categories";
import ProfilePage from "./pages/profile";
import FavoritesPage from "./pages/favorites";
import ReportPage from "./pages/report.jsx";
import SearchPage from "./pages/search-page.jsx";
import SearchPageCompare from "./pages/search-page-compare.jsx";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { PhotoProvider } from "./contexts/photoContext"; // Add this
import TakeAPicCompare from "./pages/take-a-pic-compare.jsx";
import ActivityLog from "./pages/activity-log";
import StartersPage from "./pages/starters";
import MainsPage from "./pages/mains";

//const ActivityLog = () => <h2>Activity Log Page</h2>;

const App = () => {
  return (
    <FavoritesProvider>
      <PhotoProvider>
        {" "}
        {/* Wrap the entire app */}
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
              path="/compare/take-a-pic-compare"
              element={
                <Layout>
                  <TakeAPicCompare />
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
              path="/compare/result"
              element={
                <Layout>
                  <CompareResultPage />
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
              path="/compare"
              element={
                <Layout>
                  <ComparePage />
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
              path="/daily-challenge/:quizId"
              element={
                <Layout>
                  <DailyChallenge />
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
            <Route path="/categories/starters" element={<StartersPage />} />
            <Route path="/categories/mains" element={<MainsPage />} />
            <Route
              path="/report"
              element={
                <Layout>
                  <ReportPage />
                </Layout>
              }
            />
            <Route
              path="/search"
              element={
                <Layout>
                  <SearchPage />
                </Layout>
              }
            />
            <Route
              path="/compare/search"
              element={
                <Layout>
                  <SearchPageCompare />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </PhotoProvider>
    </FavoritesProvider>
  );
};

export default App;
