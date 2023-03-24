import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const MenuPageTabBar = () => {
	const activeStyle = { backgroundColor: "black", color: "white" }
	return (
		<div className="container mx-auto px-3 mt-5">
			<nav className="flex space-x-4 text-center overflow-x-auto px-3 py-5 mb-3">
				<NavLink
					to="/order/menu/pizza"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg font-semibold uppercase tracking-tight whitespace-nowrap"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					{" "}
					Pizza
				</NavLink>
				<NavLink
					to="/order/menu/papa-bowls"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg font-semibold uppercase tracking-tight whitespace-nowrap"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Papa Bowls
				</NavLink>
				<NavLink
					to="/order/menu/papadias"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg font-semibold uppercase tracking-tight whitespace-nowrap"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Papadias
				</NavLink>
				<NavLink
					to="/order/menu/papa-bites"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg font-semibold uppercase tracking-tight whitespace-nowrap"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Papa Bites
				</NavLink>
				<NavLink
					to="/order/menu/wings"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg font-semibold uppercase tracking-tight whitespace-nowrap"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Wings
				</NavLink>
				<NavLink
					to="/order/menu/papadias"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg font-semibold uppercase tracking-tight whitespace-nowrap"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Papadias
				</NavLink>
				<NavLink
					to="/order/menu/papa-bites"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg font-semibold uppercase tracking-tight whitespace-nowrap"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Papa Bites
				</NavLink>
				<NavLink
					to="/order/menu/wings"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white text-lg font-semibold uppercase tracking-tight whitespace-nowrap"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Wings
				</NavLink>
			</nav>
			<Outlet />
		</div>
	)
}

export default MenuPageTabBar
