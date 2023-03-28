import React from "react"
import SpecialsCard from "./SpecialsCard"

const SpecialsSection = ({ sectionObject }) => {
	return (
		<div>
			<h1 className="uppercase text-4xl tracking-tight font-extrabold py-4">
				Specials
			</h1>
			<div>
				{sectionObject.specialsCards.map((special) => (
					<SpecialsCard cardDetails={special} key={special.id} />
				))}
			</div>
		</div>
	)
}

export default SpecialsSection
