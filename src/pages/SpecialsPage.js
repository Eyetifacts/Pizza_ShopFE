import React from "react"
import SpecialsCard from "../features/SpecialsCard"

const SpecialsPage = () => {
	return (
		<>
			<div>
				<button>All Specials</button>
				<button>Large Orders</button>
			</div>
			<div>
				<h1 className="uppercase">Specials</h1>
				<SpecialsCard />
			</div>
		</>
	)
}

export default SpecialsPage
