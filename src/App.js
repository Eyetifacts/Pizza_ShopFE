// import logo from './logo.svg';

import React from "react"
import "./App.css"
import { HashRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import MenuPageTabBar from "./components/menuPage/MenuPageTabBar"
import PapaBowlsPage from "./components/menuPage/papaBowlsTab/PapaBowlsPage"
import PapadiasPage from "./components/menuPage/papadiasTab/PapadiasPage"
import PapaBitesPage from "./components/menuPage/papaBitesTab/PapaBitesPage"
import WingsPage from "./components/menuPage/wingsTab/WingsPage"
import SidesPage from "./components/menuPage/sidesTab/SidesPage"
import DessertsPage from "./components/menuPage/dessertsTab/DessertsPage"
import DrinksPage from "./components/menuPage/drinksTab/DrinksPage"
import ExtrasPage from "./components/menuPage/extrasTab/ExtrasPage"

import SpecialsPage from "./pages/SpecialsPage"
// import PapaRewardsPage from "./pages/PapaRewardsPage";

// Base route "/" must be be the last one listed when using HashRouter below

function App() {
	return (
		<HashRouter>
			<nav>
				<Header />
			</nav>

			<Routes>
				<Route exact path="/order/menu" element={<MenuPageTabBar />}>
					<Route path="pizza" element={<MenuPage />} />
					<Route path="papa-bowls" element={<PapaBowlsPage />} />
					<Route path="papadias" element={<PapadiasPage />} />
					<Route path="papa-bites" element={<PapaBitesPage />} />
					<Route path="wings" element={<WingsPage />} />
					<Route path="sides" element={<SidesPage />} />
					<Route path="desserts" element={<DessertsPage />} />
					<Route path="drinks" element={<DrinksPage />} />
					<Route path="extras" element={<ExtrasPage />} />
					<Route index element={<MenuPage />} />
				</Route>
				<Route exact path="/order/specials" element={<SpecialsPage />} />
				{/* <Route exact path="/order/papa-rewards" element={<PapaRewardsPage />} /> */}
				<Route exact path="/" element={<HomePage />} />
			</Routes>

			<footer>
				<Footer />
			</footer>
		</HashRouter>
	)
}

export default App
