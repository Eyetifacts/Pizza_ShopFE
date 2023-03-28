import React, { useState } from "react";
import { useParams } from "react-router-dom";
import menuInitialState from "../../productDef/menuInitialHomeState";
import SpecialsSection from "./SpecialsSection";

const SpecialsTabPage = ({ params }) => {
	function getCategory(menuSelection) {
		switch (menuSelection) {
			case "all-specials":
				return 0
			case "large-orders":
				return 1
			default:
				return 0
		}
	}

	let cat = useParams();
	let x = getCategory(cat.category);

	const [menuState] = useState(menuInitialState);
	const category = menuState[x].menuSections[0];

	return (
		<div>
			<SpecialsSection key={category.id} sectionObject={category} />
		</div>
	);
};

export default SpecialsTabPage;