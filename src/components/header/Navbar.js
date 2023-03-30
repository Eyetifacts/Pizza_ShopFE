import React from "react"
import { HiShoppingCart } from "react-icons/hi"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	let activeStyle = {
		textDecoration: "underline",
	}

	return (
		<div className="flex flex-row items-center gap-3 text-4xl h-16 lg:h-24 shadow-lg">
			<div className="flex-row flex flex-1 items-center lg:border-r lg:border-r-gray h-20">
				<div className="flex flex-row gap-8 ml-7 font-black">
					<NavLink
						to="/order/menu"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						MENU
					</NavLink>
					<NavLink
						to="/order/specials"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						SPECIALS
					</NavLink>
					<NavLink
						to="/order/papa-rewards"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						PAPA REWARDS
					</NavLink>
				</div>
				<form className="hidden ml-auto items-center lg:flex flex-row">
					<input
						type="text"
						className="pl-4 border rounded-l-md italic h-14 text-2xl w-72"
						placeholder="Enter a promo code"
					/>
					<button className="bg-black text-white text-2xl p-2 h-14 rounded-r-md my-0 font-semibold mr-5">
						APPLY
					</button>
				</form>
			</div>
			<div className="ml-4 mr-4 lg:flex flex-none font-semibold">
				<div className="flex flex-row">
					<HiShoppingCart className="text-4xl" style={{ color: "#333333" }} />
					<h2 className="sm:max-lg:hidden text-3xl pl-2" style={{ color: "red" }}>
						$0.00
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Navbar
