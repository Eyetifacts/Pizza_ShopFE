import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { RiGooglePlayFill } from 'react-icons/ri';
import { images } from '../../constants';


const MobileAppBanner = () => {
  return (
      <div className="flex flex-col lg:flex-row bg-black lg:h-88 md:h-196 h-128 overflow-clip">
          <div className="flex flex-col items-center justify-center lg:ml-14 xl:ml-36 2xl:ml-96">
              <h2 className="text-white font-semibold text-4xl mt-14 lg:mt-0 lg:mr-auto">ORDER FROM OUR APP</h2>
              <div className="flex flex-col lg:flex-row mt-8 lg:mt-10  gap-4 lg:gap-16">
                  <button className="border border-white/70 rounded-lg h-12 py-1 pl-2 pr-3">
                      <div className="flex flex-row">
                          <AiFillApple style={{ color: 'white' }} size={34} className="ml-0" />
                          <div className="flex flex-col whitespace-nowrap ml-1">
                              <p className="text-white text-xs -mb-1 text-left">Download on the</p>
                              <p className="text-white text-xl text-left">App Store</p>
                          </div>
                      </div>
                  </button>
                  <button className="border border-white/70 rounded-lg h-12 py-1 pl-2 pr-3">
                      <div className="flex flex-row">
                          <RiGooglePlayFill style={{ color: 'white' }} size={34} className="" />
                          <div className="flex flex-col whitespace-nowrap ml-1">
                              <p className="text-white text-xs -mb-1 text-left">GET IT ON</p>
                              <p className="text-white text-xl text-left">Google Play</p>
                          </div>
                      </div>
                  </button>
              </div>
          </div>
          <div className="flex flex-row mt-12 gap-1 mx-auto lg:-rotate-[24deg] lg:-mt-20 w-auto md:w-auto">
              <img src={images.mobile1} alt="mobile phone" className="w-auto h-96 md:h-162 lg:mt-24 lg:h-128" />
              <img src={images.mobile2}  alt="mobile phone" className="w-auto h-96 md:h-162 lg:mb-24 lg:h-128"  />
          </div>
      </div>
  )
}

export default MobileAppBanner;