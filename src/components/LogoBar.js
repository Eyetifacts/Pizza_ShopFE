import React, { useState } from "react"
import { images } from "../constants"
import { BsGlobe } from "react-icons/bs"
import { GoChevronDown } from "react-icons/go"
import { GiHamburgerMenu } from "react-icons/gi"

const LogoBar = () => {
	const [toggle, setToggle] = useState(false)
	const toggleSidebar = () => {
		setToggle(!toggle)
	}

	return (
		<>
			<div className="h-16 flex flex-row items-center gap-3 text-lg px-3 border-b border-b-gray">
				<img width="150px" src={images.logo} alt="delicious pizza" />
				<div className="flex flex-row font-semibold gap-3 justify-end ml-auto items-center">
					<div>START YOUR ORDER</div>
					<button className="hidden lg:flex flex-row gap-2 align-center hover:bg-gray p-3 rounded-lg items-center">
						<BsGlobe size={24} />
						<h2>EN</h2>
						<GoChevronDown size={20} style={{ color: "black" }} />
					</button>
					<button className="hidden lg:flex flex-row gap-2 align-center hover:bg-gray p-3 rounded-lg items-center">
						<h2>LOG IN</h2>
						<GoChevronDown size={20} style={{ color: "black" }} />
					</button>
					<button className="hidden lg:flex btn-primary-lg">SIGN UP</button>
					<GiHamburgerMenu
						size={32}
						style={{ color: "black" }}
						className="lg:hidden"
						onClick={toggleSidebar}
					/>
				</div>
			</div>
			{toggle && (
				<div className="lg:hidden h-full w-4/5 absolute right-0 bg-gray-200 z-20">
					<div className="h-24 mx-5 border-b border-gray-300">
						<button className="ml-3 my-5 bg-red-800 text-white text-xl font-semibold px-3 py-2 rounded-full">
							SIGN UP
						</button>
					</div>
					<div className="flex flex-row h-24 mx-5 border-b border-gray-300">
						<h2 className="ml-3 my-5 text-xl font-semibold">LOG IN</h2>
						<GoChevronDown
							size={20}
							style={{ color: "black" }}
							className="ml-3 my-5"
						/>
					</div>
					<div className="flex flex-row h-24 mx-5 border-b border-gray-300">
						<h2 className="ml-3 my-5 text-xl font-semibold">ENGLISH</h2>
						<GoChevronDown
							size={20}
							style={{ color: "black" }}
							className="ml-3 my-5"
						/>
					</div>
					<div className="h-36 mx-5 border-b border-gray-300 align-middle">
						<h2 className="ml-3 my-2 text-xl font-semibold">
							APPLY PROMO CODE
						</h2>
						<form className=" ml-3 h-10 items-center flex flex-row">
							<input
								type="text"
								className="pl-2 border rounded-l-md h-10 italic text-base w-120"
								placeholder="Enter a promo code"
							/>
							<button className="bg-black text-white text-sm p-2 h-10 rounded-r-md my-0 font-semibold mr-5">
								APPLY
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default LogoBar
