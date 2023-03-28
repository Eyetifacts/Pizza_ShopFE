import React from "react";

const SpecialsCard = ({ special }) => {
	const { image, title, price, description } = special
	return (
		<div className="flex space-x-5 border-b py-10">
			<div>
				<img src={image} alt={title} />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<h3 className="uppercase font-bold text-2xl tracking-tight">
						{title}
					</h3>
					<h3 className="text-red-700 font-bold text-2xl tracking-tight">
						$ {price}
					</h3>
				</div>
				<div className="space-y-3">
					<p className="text-gray-700">{description}</p>
					<button className="btn-primary">order now</button>
				</div>
			</div>
		</div>
	);
};

export default SpecialsCard;