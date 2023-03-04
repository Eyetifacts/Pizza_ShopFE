import React from "react"
import FooterLegal from "./FooterLegal"
import FooterLinks from "./FooterLinks"

const Footer = () => {
	return (
		<div className="my-10 mx-24">
			<hr className="text-gray-light border-2" />
			<FooterLinks />
			<hr width="90%" className="mx-auto text-gray-light" />
			<FooterLegal />
		</div>
	)
}

export default Footer
