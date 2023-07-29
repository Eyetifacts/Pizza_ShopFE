import React, { useState } from "react"
import menuInitialState from "../../../productDef/menuInitialHomeState"
import MenuSection from "../MenuSection"

const PapadiasPage = () => {
	const [menuState, setMenuState] = useState(menuInitialState)

	const papadias = menuState[2].menuSections[0]

	console.log(papadias)
	return (
		<div>
			<MenuSection key={papadias.id} sectionObject={papadias} />
		</div>
	)
}

export default PapadiasPage
