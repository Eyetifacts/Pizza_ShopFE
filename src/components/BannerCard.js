import React from "react"
import FlagComponent from "./FlagComponent"

const BannerCard = ({ cardDetails }) => {
	const { image, title, interestFlag, description, buttonGroup } = cardDetails
	return (
		<div className="rounded-3xl my-20 mx-5 lg:mx-20 flex flex-col md:flex-row h-96 md:h-64">
			<div className="relative flex-1">
				<img
					src={image.imageUrl}
					className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none h-44 w-full md:h-full object-cover"
					alt={image.imageName}
				/>
				{interestFlag.isDisplayed && <FlagComponent text={interestFlag.text} />}
			</div>
			<div className="bg-orange-100 rounded-b-xl  md:rounded-r-xl md:rounded-bl-none text-center md:text-left md:px-10 space-y-3 p-5 pb-7 flex-1">
				<h2 className="tracking-tight font-extrabold uppercase text-3xl pt-2">
					{title}
				</h2>
				<p className="text-slate-700 leading-tight pb-3">{description}</p>
				{buttonGroup.map((btn) => (
					<button key={btn.id} className="btn-primary">
						{btn.buttonText}
					</button>
				))}
			</div>
		</div>
	)
}

export default BannerCard
