import React from "react"
import { HiShoppingCart } from "react-icons/hi"

const Navbar = () => {
	return (
		<div className="flex flex-row items-center gap-3 text-xl lg:text-2xl h-12 lg:h-20">
			<div className="flex-row flex flex-1 items-center lg:border-r lg:border-r-gray h-20">
				<div className="flex flex-row gap-6 ml-5 font-semibold">
					<div>MENU</div>
					<div>SPECIALS</div>
					<div>PAPA REWARDS</div>
				</div>
				<form className="hidden ml-auto h-10 items-center lg:flex flex-row">
					<input
						type="text"
						className="pl-2 border rounded-l-md h-10 italic text-base w-60"
						placeholder="Enter a promo code"
					/>
					<button className="bg-black text-white text-sm p-2 h-10 rounded-r-md my-0 font-semibold mr-5">
						APPLY
					</button>
				</form>
			</div>
			<div className="hidden ml-auto mr-5 lg:flex flex-none font-semibold">
				<div className="flex flex-row">
					<HiShoppingCart size={40} style={{ color: "#333333" }} />
					<h2 className="text-4xl" style={{ color: "darkred" }}>
						$0.00
					</h2>
				</div>
			</div>
			<button className="lg:hidden flex rounded-full bg-black text-white font-semibold text-base px-3 py-1 mr-1 uppercase">
				LOG IN
			</button>
		</div>
	)
}

export default Navbar
