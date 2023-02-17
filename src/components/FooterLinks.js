import React from 'react'
import storefront from '../images/storefront.webp'

const FooterLinks = () => {
	return (
		<div>
			<div>
				{/*
				grid layout?
				dropdowns for small screen...how to do best w/tailwind
				or just standard media queries? */}
				<div>
					<h3>Our Company</h3>
					<a href='/'>link</a>
					<a href='/'>link</a>
					<a href='/'>link</a>
					<a href='/'>link</a>
				</div>
				<div>
					<h3>Our Pizza</h3>
					<a href='/'>link</a>
					<a href='/'>link</a>
					<a href='/'>link</a>
					<a href='/'>link</a>
				</div>
				<div>
					<h3>Help</h3>
					<a href='/'>link</a>
					<a href='/'>link</a>
					<a href='/'>link</a>
					<a href='/'>link</a>
				</div>
			</div>{' '}
			<button className='flex items-center p-5 space-x-5 rounded-lg m-8 shadow-[0_0_10px_rgba(0,0,0,0.35)]'>
				<img src={storefront} alt='storefront' />
				<h2>Open A Franchise</h2>
			</button>
		</div>
	)
}

export default FooterLinks
