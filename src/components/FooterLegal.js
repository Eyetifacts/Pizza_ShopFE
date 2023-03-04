import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const FooterLegal = () => {
	return (
		<div className='text-gray-dark p-3 space-y-6'>
			<div className='footer-main space-y-2'>
				<select
					className='p-3 rounded-md'
					name='regions'
					id='region-select'
					aria-label='Select Region'>
					<option value=''>International Sites</option>
					<option value='northAmerica' aria-label='North America'>
						North America
					</option>
					<option value='europe' aria-label='Europe'>
						Europe
					</option>
					<option value='asia' aria-label='Asia'>
						Asia
					</option>
				</select>
				<div className='footer-links space-x-5'>
					<a href='/'>Privacy</a>
					<a href='/'>Cookies</a>
					<a href='/'>Terms of Use</a>
					<a href='/'>Site Map</a>
					<a href='/'>Text & Email Offers</a>
					<a href='/'>Pizza Deals & Specials</a>
				</div>
				<div className='social-icons flex space-x-3'>
					<div>
						<FaFacebookF />
					</div>
					<div>
						<FaInstagram />
					</div>
					<div>
						<FaTwitter />
					</div>
					<div>
						<FaYoutube />
					</div>
				</div>
			</div>
			<div className='space-y-4 text-sm'>
				<p>
					<b>Papa Thomas Pizza Stores in The United States</b>: Georgia |
					Alabama | Kansas | Arizona | California{' '}
				</p>
				<p>
					<b>Papa Thomas Pizza Stores in Canada</b>: Alberta | British Columbia
					| Manitoba{' '}
				</p>
				<p>
					Customer Care Team <a href='/'>Contact Us</a>. If you are using a
					screen reader and are having problems using this website, please call{' '}
					<a href='tel:1112223333' aria-label='1 1 1. 2 2 2. 3 3 3 3.'>
						(111) 222-3333
					</a>{' '}
					for assistance.
				</p>
				<p>
					©2023 PapaThomas. All Rights Reserved. Adults and youth (ages 13 and
					older) need an average of 2,000 calories a day, and children (ages 4
					to 12) need an average of 1,500 calories a day. However, individual
					needs vary.
				</p>
			</div>
		</div>
	)
}

export default FooterLegal
