import React from "react"
import ProductCardForm from "./ProductCardForm"
import FlagComponent from "../FlagComponent"

const FancierProductCard = ({ cardDetails }) => {
	const displayProductCardForm = (cardDetails) => {
		if (cardDetails.productCardForm) {
			return <ProductCardForm fields={cardDetails.productCardForm} />
		}
	}

	return (
		<div className="relative h-650 w-96 border-2 mx-2 mt-5 rounded-3xl border-gray-300">
			<img
				src={cardDetails.image.imageUrl}
				alt=""
				className="rounded-3xl h-full object-cover"
			/>
			{cardDetails.interestFlag.isDisplayed && (
				<FlagComponent text={cardDetails.interestFlag.text} />
			)}
			<div className="absolute left-0 bottom-0">
				<div>
					<p className="text-white bg-red-600 px-3 py-2 ml-3 mb-8 text-4xl font-extrabold -skew-y-6 w-36">
						{`$ ${cardDetails.price}`}
					</p>
				</div>
				<div className="flex justify-between">
					<h2 className="text-white text-2xl font-extrabold mt-2 ml-3">
						{cardDetails.title}
					</h2>
				</div>
				<div>
					<h2 className="text-white text-xl font-semibold mt-2 mx-3 underline">
						{cardDetails.details.text}
					</h2>
				</div>
				<div>{displayProductCardForm(cardDetails)}</div>
				<div className="h-20 mt-2 mb-5 pt-8 left-0 bottom-0">
					{cardDetails.buttonGroup.map((btn) => (
						<button key={btn.id} className="ml-3 btn-primary">
							{btn.buttonText}
						</button>
					))}
				</div>
				{cardDetails.description && (
					<p className="text-white text-lg mt-1 p-3 border-white border-t-2">
						{`${cardDetails.description}`}
					</p>
				)}
			</div>
		</div>
	)
}

export default FancierProductCard
