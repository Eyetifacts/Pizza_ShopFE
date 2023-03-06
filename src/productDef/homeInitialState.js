// Hero video
// Video url
// Video Pause / Play button
// Price
// Interest flag (Limited Time)
// Description
//  Action Button
const initialHomeState = {
  hero: {
    url: "hero.png",
    playPauseButton: true,
    price: 12.99,
    interestFlag: {
      isDisplayed: true,
      text: "Limited Time",
    },
    title: "CRISPY PARM PIZZA",
    description: "Cheese on the bottom?  Flippin' awesome!",
    actionButtonText: "ADD & CUSTOMIZE",
  },
};
//
// 5 Card Carousel
// image url
// Interest Flag
// Price
// Title
// Action Button
const carousel = [
  {
    imageUrl: "carousel1.png",
    interestFlag: {
      isDisplayed: true,
      text: "NEW ITEMS",
    },
    price: {
      isDisplayed: true,
      priceAmount: 6.99,
    },
    title: "PAPA PAIRINGS",
    actionButtonText: "ADD TO ORDER",
  },
  {
    imageUrl: "carousel2.png",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
    price: {
      isDisplayed: true,
      priceAmount: 13.99,
    },
    title: "EPIC STUFFED CRUST PIZZA",
    actionButtonText: "ADD TO ORDER",
  },
  {
    imageUrl: "carousel3.png",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
    price: {
      isDisplayed: true,
      priceAmount: 4.99,
    },
    title: "PAPA BITES: SAVORY. SPICY. SWEET.",
    actionButtonText: "ADD TO ORDER",
  },
  {
    imageUrl: "carousel4.png",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
    price: {
      isDisplayed: true,
      priceAmount: 26,
    },
    title: "TWO PIZZA OFFER",
    actionButtonText: "ADD TO ORDER",
  },
  {
    imageUrl: "carousel5.png",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
    price: {
      isDisplayed: false,
      priceAmount: null,
    },
    title: "TWO PIZZA OFFER",
    actionButtonText: "ADD TO ORDER",
  },
];
//
// Menu Map
// Title
// One menu link component per Menu page
// image url
// menu Title
const menuMap = {
  title: "EXPLORE OUR MENU",
  menuLinks: [
    {
      imageUrl: "menu1.png",
      description: "Specials",
    },
    {
      imageUrl: "menu2.png",
      description: "Pizza",
    },
    {
      imageUrl: "menu3.png",
      description: "Papa Bowls",
    },
    {
      imageUrl: "menu4.png",
      description: "Papadias",
    },
    {
      imageUrl: "menu5.png",
      description: "Papa Bites",
    },
    {
      imageUrl: "menu6.png",
      description: "Wings",
    },
    {
      imageUrl: "menu7.png",
      description: "Sides",
    },
    {
      imageUrl: "menu8.png",
      description: "Desserts",
    },
    {
      imageUrl: "menu9.png",
      description: "Drinks",
    },
    {
      imageUrl: "menu10.png",
      description: "Extras",
    },
  ],
};
//
// App Marketing panel
// App Store marketing
// backrgound image url
// Description
// Apple Store url
// Apple Store icon url
// Apple Store button text
// Google Play Store url
// Google Play store icon url
const appStores = {
  backgroundImage: "appStore.png",
  description: "ORDER FROM OUR APP",
  buttonGroup: [
    {
      storeUrl: "apple.png",
      storeIconUrl: "appleIcon.png",
      buttonText: "download on the App Store",
    },
    {
      storeUrl: "google.png",
      storeIconUrl: "googleIcon.png",
      buttonText: "GET IT ON Google Play",
    },
  ],
};
//
// Info Cards (4 Cards)
// image url
// Title
// Description
// Action Button
const infoCards = [
  {
    imageUrl: "info1.png",
    title: "PAPA JOHNS GIFT CARDS",
    description:
      "Take the guesswork out of gift-giving! Select your gift card value up to $100 and send it toda or on a date of your choice.",
    actionButtonText: "LEARN MORE",
  },
  {
    imageUrl: "info2.png",
    title: "NO CONTACT DELIVERY",
    description:
      "No contact delivey is a request you can make that allows you to complete your order with limited personal interaction.",
    actionButtonText: "LEARN MORE",
  },
  {
    imageUrl: "info3.png",
    title: "JOIN THE PAPA JOHNS TEAM",
    description: "You love pizza, we love pizza - it's a perfect fit.",
    actionButtonText: "JOIN NOW",
  },
  {
    imageUrl: "info4.png",
    title: "NOW MORE REWARDIG",
    description: "Papa Rewards now let's you earn more than free pizza.",
    actionButtonText: "LEARN MORE",
  },
];
//
// Information Map
// 3 Lists
// Title
// link description
// info url
// Franchise info image url
// Franchise description
// Franchise page url
const infoMap = [
  {
    title: "Our Company",
    franchise: {
      imageUrl: "franchise.png",
      title: "OPEN A FRANCHISE",
    },
    linkList: [
      {
        linkUrl: "linkUrl1.png",
        text: "About Papa Johns",
      },
      {
        linkUrl: "linkUrl2.png",
        text: "Investor Relations",
      },
      {
        linkUrl: "linkUrl3.png",
        text: "Careers",
      },
      {
        linkUrl: "linkUrl4.png",
        text: "No Contact Delivery",
      },
    ],
  },
  {
    title: "Our Pizza",
    linkList: [
      {
        linkUrl: "linkUrl5.png",
        text: "Pizza Pages",
      },
      {
        linkUrl: "linkUrl6.png",
        text: "Nutritional Info",
      },
      {
        linkUrl: "linkUrl7.png",
        text: "Allergen Guide",
      },
      {
        linkUrl: "linkUrl8.png",
        text: "Ingredients",
      },
      {
        linkUrl: "linkUrl9.png",
        text: "Quality Guarantee",
      },
    ],
  },
  {
    title: "Our Pizza",
    linkList: [
      {
        linkUrl: "linkUrl10.png",
        text: "Customer Service",
      },
      {
        linkUrl: "linkUrl11.png",
        text: "Ordering",
      },
      {
        linkUrl: "linkUrl12.png",
        text: "Gift Cards",
      },
      {
        linkUrl: "linkUrl13.png",
        text: "Store List",
      },
    ],
  },
];
