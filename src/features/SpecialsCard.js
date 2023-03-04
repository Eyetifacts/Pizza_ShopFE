import React from "react"
import specials1 from "../images/specials/specials1.webp"

const SpecialsCard = () => {
	return (
		<div>
			<img src={specials1} alt="specials1 name" height="50px" width="50px" />
			<div>
				<div>
					<h3 className="uppercase">Papa pairings</h3>
					<h3 className="text-red">$ 6.99</h3>
				</div>
				<div>
					<p>
						Craving what you see? Our newest addition to your Papa Pairings
						possibilities: Wings! Get any of these and more delectable Papa
						Johns favorites for just $6.99 each when you pair two or more.
					</p>
					<button className="btn-secondary">order now</button>
					<button className="btn-primary">order now</button>
					<button className="btn-primary-lg">order now</button>
				</div>
			</div>
		</div>
	)
}

export default SpecialsCard
