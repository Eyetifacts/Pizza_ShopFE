import React from "react"
import SpecialsCard from "./SpecialsCard"

const SpecialsSection = ({ sectionObject }) => {
	return (
		<div>
			<h1 className="uppercase text-4xl tracking-tight font-extrabold py-4">
				{sectionObject.title}
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				{sectionObject.specialsCards.map((special) => (
					<SpecialsCard cardDetails={special} key={special.id} />
				))}
			</div>
		</div>
	)
}

export default SpecialsSection
