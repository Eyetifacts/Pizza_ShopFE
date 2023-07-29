// import logo from './logo.svg';

import React from "react"
import "./App.css"
import { HashRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import MenuPageTabBar from "./components/menuPage/MenuPageTabBar"
import MenuTabPage from "./components/menuPage/MenuTabPage"

import SpecialsPage from "./pages/SpecialsPage"
import SpecialsPageTabBar from "./components/specialsPage/SpecialsPageTabBar"
import SpecialsTabPage from "./components/specialsPage/SpecialsTabPage"

import PapaRewardsPage from "./pages/PapaRewardsPage";

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
					<Route path=":category" element={<MenuTabPage />} />
					<Route index element={<MenuPage />} />
				</Route>
				<Route exact path="/order/specials" element={<SpecialsPageTabBar />}>
					<Route path="all-specials" element={<SpecialsPage />} />
					<Route path=":category" element={<SpecialsTabPage />} />
					<Route index element={<SpecialsPage />} />
				</Route>
				<Route exact path="/order/papa-rewards" element={<PapaRewardsPage />} />
				<Route exact path="/" element={<HomePage />} />
			</Routes>

			<footer>
				<Footer />
			</footer>
		</HashRouter>
	)
}

export default App
