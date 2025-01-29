import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import DailyChallenge from "./pages/daily-challenge";
import ExplanationPage from "./pages/explanation";
import TakePicturePage from "./pages/take-a-pic";
import ComparePage from "./pages/compare";
import CompareResultPage from "./pages/compare-result-page";
import DocumentationPage from "./pages/documentation";
import HamburgerPage from "./pages/hamburger";
import PizzaPage from "./pages/pizza";
import TacoPage from "./pages/taco.jsx";
import Layout from "./pages/layout";
import PastaPage from "./pages/pasta.jsx";
import SushiPage from "./pages/sushi.jsx";
import FriedRicePage from "./pages/fried-rice.jsx";
import ChickenWingsPage from "./pages/chickenWings.jsx";
import HotDogInfoPage from "./pages/hotdog.jsx";
import SteakPage from "./pages/steak.jsx";
import IceCreamPage from "./pages/ice-cream.jsx";

import PancakesPage from "./pages/pancakes.jsx";
import GrilledFishPage from "./pages/grilled-fish.jsx";
import PizzaWithHamPage from "./pages/pizza-with-ham.jsx";
import CheeseburgerPage from "./pages/cheeseburger.jsx";
import SaladPage from "./pages/salad.jsx";




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
import DessertsPage from "./pages/desserts.jsx";
import AppetizersPage from "./pages/appetizers.jsx";
import SnacksPage from "./pages/snacks.jsx";
import VegetarianPage from "./pages/vegeterian.jsx";
import VeganPage from "./pages/vegan.jsx";
import GlutenFreePage from "./pages/glutenFree.jsx";
import LowCaloriePage from "./pages/lowCalorie.jsx";
import YogurtPage from "./pages/yogurt.jsx";
import CitrusCakePage from "./pages/citruscake.jsx";
import PotatoesPage from "./pages/potatoes.jsx";
import BruschettaPage from "./pages/Bruschetta.jsx";
import GarlicBreadPage from "./pages/garlic-bread.jsx";
import CapreseSaladPage from "./pages/capreseSalad.jsx";
import StuffedMushroomPage from "./pages/stuffed-mushroom.jsx";
import GrilledChickenPage from "./pages/grilled-chicken.jsx";
import FishFilletPage from "./pages/fish-fillet.jsx";
import TacoVeganPage from "./pages/taco-vegan.jsx";




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
              path="/documentation"
              element={
                <Layout>
                  <DocumentationPage />
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
              path="/tacos"
              element={
                <Layout>
                  <TacoPage />
                </Layout>
              }
            />
            <Route
              path="/taco-vegan"
              element={
                <Layout>
                  <TacoVeganPage />
                </Layout>
              }
            />
            <Route
              path="/pasta"
              element={
                <Layout>
                  <PastaPage />
                </Layout>
              }
            />
            <Route
              path="/yogurt"
              element={
                <Layout>
                  <YogurtPage />
                </Layout>
              }
            />
            <Route
              path="/citrus-cake"
              element={
                <Layout>
                  <CitrusCakePage />
                </Layout>
              }
            />
            <Route
              path="/potatoes"
              element={
                <Layout>
                  <PotatoesPage />
                </Layout>
              }
            />
            <Route
              path="/bruschetta"
              element={
                <Layout>
                  <BruschettaPage />
                </Layout>
              }
            />
            <Route
              path="/garlic-bread"
              element={
                <Layout>
                  <GarlicBreadPage />
                </Layout>
              }
            />
             <Route
              path="/caprese-salad"
              element={
                <Layout>
                  <CapreseSaladPage />
                </Layout>
              }
            />
            <Route
              path="/stuffed-mushrooms"
              element={
                <Layout>
                  <StuffedMushroomPage />
                </Layout>
              }
            />
            <Route
              path="/grilled-chicken"
              element={
                <Layout>
                  <GrilledChickenPage />
                </Layout>
              }
            />
            <Route
              path="/fish-fillet"
              element={
                <Layout>
                  <FishFilletPage />
                </Layout>
              }
            />
            <Route
              path="/sushi"
              element={
                <Layout>
                  <SushiPage />
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
              path="/chicken-wings"
              element={
                <Layout>
                  <ChickenWingsPage />
                </Layout>
              }
            />
            <Route
              path="/fried-rice"
              element={
                <Layout>
                  <FriedRicePage />
                </Layout>
              }
            />
            <Route
              path="/hot-dog"
              element={
                <Layout>
                  <HotDogInfoPage />
                </Layout>
              }
            />
            <Route
              path="/steak"
              element={
                <Layout>
                  <SteakPage />
                </Layout>
              }
            />
            <Route
              path="/ice-cream"
              element={
                <Layout>
                  <IceCreamPage />
                </Layout>
              }
            />
            <Route
              path="/pancakes"
              element={
                <Layout>
                  <PancakesPage />
                </Layout>
              }
            />
            <Route
              path="/grilled-fish"
              element={
                <Layout>
                  <GrilledFishPage />
                </Layout>
              }
            />
            <Route
              path="/pizza-with-ham"
              element={
                <Layout>
                  <PizzaWithHamPage />
                </Layout>
              }
            />
            <Route
              path="/cheeseburger"
              element={
                <Layout>
                  <CheeseburgerPage />
                </Layout>
              }
            />
             <Route
              path="/salad"
              element={
                <Layout>
                  <SaladPage />
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
            <Route
              path="/categories/starters"
              element={
                <Layout>
                  <StartersPage />
                </Layout>
              }
            />
            <Route
              path="/categories/mains"
              element={
                <Layout>
                  <MainsPage />
                </Layout>
              }
            />
            <Route
              path="/categories/desserts"
              element={
                <Layout>
                  <DessertsPage />
                </Layout>
              }
            />
            <Route
              path="/categories/appetizers"
              element={
                <Layout>
                  <AppetizersPage />
                </Layout>
              }
            />
            <Route
              path="/categories/snacks"
              element={
                <Layout>
                  <SnacksPage />
                </Layout>
              }
            />
            <Route
              path="/categories/vegetarian"
              element={
                <Layout>
                  <VegetarianPage />
                </Layout>
              }
            />
            <Route
              path="/categories/vegan"
              element={
                <Layout>
                  <VeganPage />
                </Layout>
              }
            />
            <Route
              path="/categories/glutenFree"
              element={
                <Layout>
                  <GlutenFreePage />
                </Layout>
              }
            />
            <Route
              path="/categories/low-calorie"
              element={
                <Layout>
                  <LowCaloriePage />
                </Layout>
              }
            />
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
