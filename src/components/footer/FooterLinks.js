import React from 'react'
import storefront from '../../images/storefront.webp'

const FooterLinks = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:h-80">
		
			<div className="align-top flex flex-row my-8 gap-20 justify-evenly grow">
				<div className="flex flex-col ml-10 gap-2 text-gray-500">
					<h3 className="font-semibold text-lg text-black">Our Company</h3>
					<a href='/'>About Papa Johns</a>
					<a href='/'>Investor Relations</a>
					<a href='/'>Careers</a>
					<a href='/'>No Contact Delivery</a>
				</div>
				<div className="flex flex-col gap-2 text-gray-500">
					<h3 className="font-semibold text-lg text-black">Our Pizza</h3>
					<a href='/'>Pizza Pages</a>
					<a href='/'>Nutrional Info</a>
					<a href='/'>Allergen Guide</a>
					<a href='/'>Ingredients</a>
					<a href='/'>Quality Guarantee</a>
				</div>
				<div className="flex flex-col gap-2 text-gray-500">
					<h3 className="font-semibold text-lg text-black">Help</h3>
					<a href='/'>Customer Service</a>
					<a href='/'>Ordering</a>
					<a href='/'>Gift Cards</a>
					<a href='/'>Store List</a>
				</div>
			</div>
		
			<button className='flex w-11/12 lg:w-auto items-center p-5 border-2 border-gray-200 rounded-lg ml-auto m-8 grow-0'>
				<img src={storefront} alt='storefront' />
				<h2 className="font-semibold text-2xl p-3">Open A Franchise</h2>
			</button>
		</div>
	)
}

export default FooterLinks
