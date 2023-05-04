import React, {useEffect, useState} from "react";
import Card from "./Card";

import { images } from '../../constants';

const carouselItems = [
  {
    title: 'Papa Pairings',
    price: '6.99',
    newItem: true,
    link: '',
    linkText: 'ORDER NOW',
    bgImg: images.sides
  },
  {
    title: 'Epic Stuffed Crust Pizza',
    price: '13.99',
    newItem: false,
    link: '',
    linkText: 'ORDER NOW',
    bgImg: images.special
  },
  {
    title: 'Explore Our Full Menu',
    price: '',
    newItem: false,
    link: '',
    linkText: 'ORDER NOW',
    bgImg: images.fullMenu
  },
  {
    title: 'Now More Rewarding',
    price: '',
    newItem: false,
    link: '',
    linkText: 'LEARN MORE',
    bgImg: images.rewards
  },
  {
    title: 'Create Your Own',
    price: '',
    newItem: false,
    link: '',
    linkText: 'CUSTOMIZE',
    bgImg: images.createOwn
  },
  {
    title: 'Invite Us To Your Next Party',
    price: '',
    newItem: false,
    link: '',
    linkText: 'LEARN MORE',
    bgImg: images.party
  }
];

const CardCarousel = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  return (

      <div className="flex flex-row items-center scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-slate-800 my-20 w-full xl:w-1280 mx-auto">
        {/* {loading && <p>Loading...</p>}
        {!loading && data.map((item) => (
          <Card item={item} key={item.title} />
        ))} */}
      </div>
  );
};

export default CardCarousel;
