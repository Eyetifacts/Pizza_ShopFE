import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const tabLinks = [
	{ text: "All Specials", to: "all-specials", id: 1 },
	{ text: "Large Orders", to: "large-orders", id: 2 },
]

const SpecialsPageTabBar = () => {
	const activeStyle = { backgroundColor: "black", color: "white" }
	return (
		<div className="mx-auto px-3 mt-5 md:px-5 lg:px-8 xl:px-15">
			<nav className="flex space-x-4 text-center overflow-x-auto px-3 py-5 mb-3">
				{tabLinks.map((link) => (
					<NavLink
						to={`/order/specials/${link.to}`}
						key={link.id}
						className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg md:text-2xl font-semibold uppercase tracking-tight whitespace-nowrap"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						{" "}
						{link.text}
					</NavLink>
				))}
			</nav>
			<Outlet />
		</div>
	)
}

export default SpecialsPageTabBar
