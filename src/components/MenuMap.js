import React from 'react';
import { images } from '../constants';

const menuItems = [
  {
    title: 'Specials',
    image: images.special,
    link: ''
  },
  {
    title: 'Pizza',
    image: images.pizza,
    link: ''
  },
  {
    title: 'Papa Bowls',
    image: images.pizza,
    link: ''
  },
  {
    title: 'Papa Bites',
    image: images.pizza,
    link: ''
  },
  {
    title: 'Papadias',
    image: images.pizza,
    link: ''
  },
  {
    title: 'Wraps',
    image: images.pizza,
    link: ''
  },
  {
    title: 'Sides',
    image: images.sides,
    link: ''
  },
  {
    title: 'Desserts',
    image: images.pizza,
    link: ''
  },
  {
    title: 'Drinks',
    image: images.pizza,
    link: ''
  },
  {
    title: 'Extras',
    image: images.pizza,
    link: ''
  },
]

const MenuMap = () => {
  return (
    <div className=" flex flex-col justify-center items-center xl:mx-64 2xl:mx-96 mb-20">
          <div className="justify-center items-center ">
              <h2 className="text-2xl font-extrabold my-3">EXPLORE OUR MENU</h2>
          </div>

          <div className="flex flex-row justify-center items-center my-3 gap-4 flex-wrap">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <img src={item.image} alt={item.title} className="rounded-full  w-32 h-32" />
                  <p className="text-center font-semibold my-3">{item.title}</p>
                </div>
              ))}
          </div>
    </div>
  )
}

export default MenuMap;