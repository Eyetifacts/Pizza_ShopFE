import React from "react"
import { images } from "../../constants"

const promos = [
	{
		title: "Papa Johns Gift Cards",
		description:
			"Take the guesswork out of gift-giving! Select your gift card value up to $100 and send it today or on a date of your choice.",
		img: images.rewards,
		btnText: "Learn More",
		alt: "",
	},
	{
		title: "No Contact Delivery",
		description:
			"No contact delivery is a request you can make that allows you to complete your order with limited personal interaction.",
		img: images.rewards,
		btnText: "Learn More",
		alt: "",
	},
	{
		title: "Join The Papa Johns Team",
		description: "You love pizza, we love pizza - it's a perfect fit.",
		img: images.rewards,
		btnText: "Learn More",
		alt: "",
	},
	{
		title: "Now More Rewarding",
		description: "Papa Rewards now lets you earn more than free pizza",
		img: images.rewards,
		btnText: "Learn More",
		alt: "",
	},
]
const PromoCards = () => {
	return (
		<div className="w-full h-full">
			<div className="flex flex-col place-content-center justify-center lg:grid lg:grid-cols-2 my-24 mx-auto lg:w-800 gap-8">
				{promos.map((promo) => (
					<div
						className="w-11/12 h-auto lg:h-120 lg:w-96 border rounded-3xl lg:place-self-center mx-auto"
						key={promo.title}>
						<img
							src={promo.img}
							className="h-52 w-full object-cover rounded-t-3xl"
							alt={promo.alt}
						/>
						<h2 className="mt-8 mx-8 text-3xl font-semibold uppercase">
							{promo.title}
						</h2>
						<p className="mt-5 mx-8 text-md whitespace-normal">
							{promo.description}
						</p>
						<button className="my-7 mx-8 btn-primary">{promo.btnText}</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default PromoCards
