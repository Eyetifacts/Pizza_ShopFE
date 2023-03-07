// import logo from './logo.svg';

import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import SpecialsPage from "./pages/SpecialsPage";
// import PapaRewardsPage from "./pages/PapaRewardsPage";

// Base route "/" must be be the last one listed when using HashRouter below

function App() {
  return (
		<HashRouter>
			<nav>
				<Header />
			</nav>

			<Routes>
				<Route exact path="/order/menu" element={<MenuPage />} />
				<Route exact path="/order/specials" element={<SpecialsPage />} />
				{/* <Route exact path="/order/papa-rewards" element={<PapaRewardsPage />} /> */}
				<Route exact path="/" element={<HomePage />} />
			</Routes>

			<footer>
				<Footer />
			</footer>
		</HashRouter>
  );
}

export default App;