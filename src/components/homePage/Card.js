import React from "react"

const Card = ({ item }) => {
	const { title, price, newItem, bgImg, linkText } = item

	return (
		<div className="relative mx-5 mb-10 w-80 shrink-0 h-96 cursor-pointer">
			<div className="absolute top-0 bottom-0 left-0 right-0">
				<img
					src={bgImg}
					alt={title}
					className="w-full rounded-3xl h-96 object-cover"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl  bg-gradient-to-t from-black/80 via-black/20 to-transparent ">
				{newItem && (
					<p className="absolute mt-8 bg-red-600 text-white w-auto text-center font-semibold px-2 uppercase">
						New Items
					</p>
				)}
				{price && (
					<h2 className="absolute ml-5 mt-44 p-1 px-2 text-2xl font-semibold bg-red-600 text-white -skew-y-6 w-auto text-center uppercase">{`STARTING AT $${price}`}</h2>
				)}
				<h2 className="absolute ml-5 mt-60 text-2xl font-semibold text-white uppercase">
					{title}
				</h2>
				<button className="absolute ml-5 bottom-10 btn-secondary">
					{linkText}
				</button>
			</div>
		</div>
	)
}

export default Card
