import React from 'react'
import { images } from '../constants';
import { BsGlobe } from 'react-icons/bs';
import { GoChevronDown } from 'react-icons/go';

const LogoBar = () => {
	return (
		<div className='h-16 flex flex-row items-center gap-3 text-lg px-3 border-b border-b-gray'>
			<img width='150px' src={images.logo} alt='delicious pizza' />
			<div className="flex flex-row font-semibold gap-3 justify-end ml-auto items-center">
				<div>START YOUR ORDER</div>
				<button className="flex flex-row gap-2 align-center hover:bg-gray p-3 rounded-lg items-center">
					<BsGlobe size={24} />
					<h2>EN</h2>
					<GoChevronDown size={20} style={{ color: 'black' }} />
				</button>
				<button className="flex flex-row gap-2 align-center hover:bg-gray p-3 rounded-lg items-center">
					<h2>LOG IN</h2>
					<GoChevronDown size={20} style={{ color: 'black' }} />
				</button>
				<button className="rounded-full bg-black text-white px-3 py-2 uppercase">SIGN UP</button>
			</div>
		</div>
	)
}

export default LogoBar
