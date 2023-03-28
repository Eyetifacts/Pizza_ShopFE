import React from "react"
import FlagComponent from "../FlagComponent"

const SpecialsCard = ({ cardDetails }) => {
	return (
		<div className="flex space-x-5 border-b py-10">
			<div className="relative">
				<img src={cardDetails.image.imageUrl} alt={cardDetails.title} />
				{cardDetails.interestFlag.isDisplayed && (
					<FlagComponent text={cardDetails.interestFlag.text} />
				)}
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<h3 className="uppercase font-bold text-2xl tracking-tight">
						{cardDetails.title}
					</h3>
					<h3 className="text-red-700 font-bold text-2xl tracking-tight">
						$ {cardDetails.price}
					</h3>
				</div>
				<div className="space-y-3">
					<p className="text-gray-700">{cardDetails.description}</p>
					{cardDetails.buttonGroup.map((btn) => (
						<button key={btn.id} className="ml-3 btn-primary">
							{btn.buttonText}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default SpecialsCard
