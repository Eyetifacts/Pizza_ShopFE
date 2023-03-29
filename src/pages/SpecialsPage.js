import React, { useState } from "react"
import SpecialsSection from "../components/specialsPage/SpecialsSection"
import specialsState from "../productDef/specialsInitialHomeState"

const SpecialsPage = () => {
	const [specials] = useState(specialsState)

	const sectionOne = specials[0].menuSections[0]

	return (
		<div>
			<SpecialsSection key={sectionOne.id} sectionObject={sectionOne} />
		</div>
	)
}

export default SpecialsPage
