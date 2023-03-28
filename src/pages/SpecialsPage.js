import React, { useState } from "react"
import SpecialsSection from "../components/specialsPage/SpecialsSection"
import specialsState from "../productDef/specialsInitialHomeState"

const SpecialsPage = () => {
	const [specials, setSpecials] = useState(specialsState)

	const sectionOne = specials[0].menuSections[0]

	return (
		<div className="p-2 sm:p-12">
			<SpecialsSection key={sectionOne.id} sectionObject={sectionOne} />
		</div>
	)
}

export default SpecialsPage
