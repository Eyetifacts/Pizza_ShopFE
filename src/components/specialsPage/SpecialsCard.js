import React from "react"
import FlagComponent from "../FlagComponent"

const SpecialsCard = ({ cardDetails }) => {
	return (
		<div className="grid grid-cols-3 space-x-5 border-b md:border md:rounded-xl pt-3 md:pt-0 pb-8 md:pb-0">
			<div className="relative col-span-1">
				<img
					src={cardDetails.image.imageUrl}
					alt={cardDetails.title}
					className="md:rounded-l-xl"
				/>
				{cardDetails.interestFlag.isDisplayed && (
					<FlagComponent text={cardDetails.interestFlag.text} />
				)}
			</div>
			<div className="col-span-2 md:px-3 md:py-4 lg:py-6">
				<div className="flex justify-between mb-2">
					<h3 className="uppercase font-bold text-2xl tracking-tight">
						{cardDetails.title}
					</h3>
					<h3 className="text-red-700 font-bold text-2xl tracking-tight whitespace-nowrap">
						$ {cardDetails.price}
					</h3>
				</div>
				<div className="space-y-3">
					<p className="text-gray-700">{cardDetails.description}</p>
					{cardDetails.buttonGroup.map((btn) => (
						<button key={btn.id} className="btn-primary">
							{btn.buttonText}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default SpecialsCard
