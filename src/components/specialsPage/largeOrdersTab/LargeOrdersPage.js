import React, { useState } from "react";
import menuInitialState from "../../../productDef/menuInitialHomeState";
import MenuSection from "../SpecialsSection";

const LargeOrdersPage = () => {
	const [menuState, setMenuState] = useState(menuInitialState);

	const sides = menuState[5].menuSections[0];

	console.log(sides)
	return (
		<div>
			<MenuSection key={sides.id} sectionObject={sides} />
		</div>
	);
};

export default LargeOrdersPage;