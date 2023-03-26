import React, { useState } from "react"
import SpecialsCard from "../components/specialsPage/SpecialsCard"
import specials1 from "../images/specials/specials1.webp"

const SPECIALS = [
	{
		id: 1,
		title: "Papa pairings",
		price: "6.99",
		image: specials1,
		description:
			"Craving what you see? Our newest addition to your Papa Pairings possibilities: Wings! Get any of these and more delectable Papa Johns favorites for just $6.99 each when you pair two or more.",
		url: "#",
	},
	{
		id: 2,
		title: "Papa pairings",
		price: "6.99",
		image: specials1,
		description:
			"Craving what you see? Our newest addition to your Papa Pairings possibilities: Wings! Get any of these and more delectable Papa Johns favorites for just $6.99 each when you pair two or more.",
		url: "#",
	},
	{
		id: 3,
		title: "Papa pairings",
		price: "6.99",
		image: specials1,
		description:
			"Craving what you see? Our newest addition to your Papa Pairings possibilities: Wings! Get any of these and more delectable Papa Johns favorites for just $6.99 each when you pair two or more.",
		url: "#",
	},
	{
		id: 4,
		title: "Papa pairings",
		price: "6.99",
		image: specials1,
		description:
			"Craving what you see? Our newest addition to your Papa Pairings possibilities: Wings! Get any of these and more delectable Papa Johns favorites for just $6.99 each when you pair two or more.",
		url: "#",
	},
]

const SpecialsPage = () => {
	const [specials] = useState(SPECIALS)
	return (
		<div className="p-12">
			<nav className="flex space-x-4">
				<a
					href="#"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white active:bg-black active:text-white text-lg font-semibold uppercase tracking-tight">
					All Specials
				</a>
				<a
					href="#"
					className="px-2 py-1 rounded-full hover:bg-black hover:text-white active:bg-black active:text-white text-lg font-semibold uppercase tracking-tight">
					Large Orders
				</a>
			</nav>
			<div>
				<h1 className="uppercase text-4xl tracking-tight font-extrabold py-4">
					Specials
				</h1>
				{specials.map((special) => (
					<SpecialsCard special={special} key={special.id} />
				))}
			</div>
		</div>
	)
}

export default SpecialsPage
