import React from "react";
import FlagComponent from "../FlagComponent";

const MenuCarouselCard = ({ item, bgImg }) => {
	return (
		<div className="relative flex flex-col border-2 mx-2 rounded-3xl border-gray-300">
			<div className="relative mb-5 w-96 shrink-0 h-96">
				<div className="absolute">
					<img
						src={bgImg}
						alt={item.title}
						className="rounded-3xl h-96 object-cover"
					/>
					<div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl  bg-gradient-to-t from-black/80 via-black/20 to-transparent">
						{item.interestFlag.isDisplayed && (
							<FlagComponent text={item.interestFlag.text} />
						)}
					</div>
				</div>
			</div>

			<div className="my-5 h-80 ml-3">
				<h2 className="text-3xl font-semibold">{item.title}</h2>
				<p className="mt-5 text-2xl">{item.description}</p>
			</div>

			<div className="absolute h-24 mb-5 pt-8 left-0 bottom-0">
				<button className="ml-3 btn-primary">
					{item.buttonGroup[0].buttonText}
				</button>
				<button className="mx-5 btn-secondary">
					{item.buttonGroup[0].buttonText}
				</button>
			</div>
		</div>
	);
};

export default MenuCarouselCard;