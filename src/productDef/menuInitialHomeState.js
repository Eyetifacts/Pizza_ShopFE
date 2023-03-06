// **************** Pizza *********************
//
// Modal popup special
// Title
// background image
// featuring
// product Title
// price
// qualification text
// Action button text
//
// Menu navigation bar
// linkButto Array (9 - no Specials page access)
// buttonText
// interstFlag
const menuNavBar = [
  {
    buttonText: "PIZZA",
    buttonLink: "menu1",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
  },
  {
    buttonText: "PAPA BOWLS",
    buttonLink: "menu2",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
  },
  {
    buttonText: "PAPADIAS",
    buttonLink: "menu3",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
  },
  {
    buttonText: "PAPA BITES",
    buttonLink: "menu4",
    interestFlag: {
      isDisplayed: true,
      text: "NEW!",
    },
  },
  {
    buttonText: "WINGS",
    buttonLink: "menu5",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
  },
  {
    buttonText: "SIDES",
    buttonLink: "menu6",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
  },
  {
    buttonText: "DESSERTS",
    buttonLink: "menu7",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
  },
  {
    buttonText: "DRINKS",
    buttonLink: "menu8",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
  },
  {
    buttonText: "EXTRAS",
    buttonLink: "menu9",
    interestFlag: {
      isDisplayed: false,
      text: "",
    },
  },
];
//
// create Pizza panel
// InfoCard
// Title
// description
// Array of product cards
// image url
// title
// description
// action button text
const menuPanel = {
  title: "CREATE YOUR OWN PIZZA",
  description: "Get started with one of our signature crusts",
  crustCarousel: [
    {
      imageUrl: "crust1.png",
      title: "Original Crust",
      description:
        "Our signature dough. Fresh, never frozen. Made with 6 simple indgredients & hand-tossed.",
      actionButtonsText: ["CUSTOMIZE"],
    },
    {
      imageUrl: "crust2.png",
      title: "Crispy Parm Crust",
      description:
        "A layer of buttery, toasted parmesan cheese baked on the underside of our signature thin crust.",
      actionButtonsText: ["CUSTOMIZE"],
    },
    {
      imageUrl: "crust3.png",
      title: "Epic Stuffed Crust",
      description:
        "Our original dough stuffed with melty cheese and baked to a crispy, golden goodness.",
      actionButtonsText: ["CUSTOMIZE"],
    },
    {
      imageUrl: "crust4.png",
      title: "Epic Pepperoni-Stuffed Crust",
      description:
        "Our original fresh dough baked into a seasoned crust, hand-stuffed with pepperoni and cheese.",
      actionButtonsText: ["CUSTOMIZE"],
    },
    {
      imageUrl: "crust5.png",
      title: "NY Style Crust",
      description:
        "Hand-stretched, oversized, foldable slices with just the right balance of crust.",
      actionButtonsText: ["CUSTOMIZE"],
    },
    {
      imageUrl: "crust6.png",
      title: "Thin Crust",
      description:
        "Lighter than our Original Crust, and just a little bit crispy.",
      actionButtonsText: ["CUSTOMIZE"],
    },
    {
      imageUrl: "crust7.png",
      title: "Gluten-Free Crust",
      description:
        "Made with sorghum, teff, amaranth, and quinona.  Not recommended for those with Celiac Disease.",
      actionButtonsText: ["CUSTOMIZE"],
    },
  ],
};
//
// Array of productCards
// image url
// title
// price
// description
// details url
// Selection Form
// Size
// quantity
// Crust type
// Crust flavor
// Action button array
// button text
const papaPicks = {
  title: "PAPA PICKS",
  productCards: [
    {
      title: "Peperoni Pizza",
      detailsUrl: "detailsUrl1",
      price: 17.5,
      descrption: "320 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Sausage Pizza",
      detailsUrl: "detailsUrl2",
      price: 17.5,
      descrption: "330 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Cheese Pizza",
      detailsUrl: "detailsUrl3",
      price: 17.5,
      descrption: "330 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
  ],
};
//
// Product Higlight Panel
// image url
// price
// title
// description
// action button text
const productHighlightPanel = {
  imageUrl: "highlight.png",
  price: 13.99,
  interestFlag: {
    isDisplayed: false,
    text: "",
  },
  title: "EPIC STUFFED CRUST PIZZA",
  description:
    "Choose your topping. Chees your crust. Epicness is now even easier.  Indulge in your favorite 1-topping pizza ow paired with a pillowy, cheese-filled crust.",
  actionButtonsText: ["ADD & CUSTOMIZE"],
};
//
// Product Highlight Cards
// image url
// interest flag
// price
// title
// details url
// action button array
// action button text
// description (optional)
const highlightCards = {
  title: "CRISPY PARM CRUST",
  description:
    "A layer of buttery, toasted parmesan cheese baked on the underside of our signature thin crust.",
  cardPanels: [
    {
      imageUrl: "parm1.png",
      price: 12.99,
      interestFlag: {
        isDisplayed: true,
        text: "LIMITED TIME",
      },
      title: "CREATE YOUR OWN CRISPY PARM PIZZA",
      detailsUrl: "parm1Url",
      actionButtonsText: ["CUSTOMIZE"],
      description: "",
    },
    {
      imageUrl: "parm2.png",
      price: 12.99,
      interestFlag: {
        isDisplayed: true,
        text: "LIMITED TIME",
      },
      title: "DELUXE CHEESE CRISPY PARM PIZZA",
      detailsUrl: "parm2Url",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
      description:
        "Two melty cheeses atop alfredo and pizza sauces on our Crispy Parm Crust create layers of cheesy, crispy goodness.  Finished with Italian Seasoning.",
    },
  ],
};
//
// Specialty section
// title
// Array of Product Cards (same as above)
//
// Specialty section (meatless)
// title
// Array of Product Cards (same as above)
//
// Gluten Free section
// title
// Product Card
// No Form display
//
// Local Flavors
// title
// Array of Product Cards
const standardSpecialties = {
  title: "HANDCRAFTED SPECIALTIES",
  productCards: [
    {
      title: "The Works Pizza",
      imageUrl: "detailsUrl1.png",
      detailsUrl: "detailsUrl1",
      price: 19.0,
      descrption: "340 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "The Meats Pizza",
      imageUrl: "detailsUrl2.png",
      detailsUrl: "detailsUrl2",
      price: 19.0,
      descrption: "380 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Zesty Italian Trio Pizza",
      imageUrl: "detailsUrl3.png",
      detailsUrl: "detailsUrl3",
      price: 19.0,
      descrption: "370 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Meatball Pepperoni Pizza",
      imageUrl: "detailsUrl4.png",
      detailsUrl: "detailsUrl4",
      price: 19.0,
      descrption: "360 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Super Hawaiian Pizza",
      imageUrl: "detailsUrl5.png",
      detailsUrl: "detailsUrl5",
      price: 19.0,
      descrption: "340 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Ultimate Pepperoni Pizza",
      imageUrl: "detailsUrl6.png",
      detailsUrl: "detailsUrl6",
      price: 19.0,
      descrption: "360 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "BBQ Chicken Bacon Pizza",
      imageUrl: "detailsUrl7.png",
      detailsUrl: "detailsUrl7",
      price: 19.0,
      descrption: "350 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Fiery Buffalo Chicken Pizza",
      imageUrl: "detailsUrl8.png",
      detailsUrl: "detailsUrl8",
      price: 19.0,
      descrption: "330 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Philly Cheesesteak Pizza",
      imageUrl: "detailsUrl9.png",
      detailsUrl: "detailsUrl9",
      price: 19.0,
      descrption: "330 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Pepperoni, Sausage & Six Cheese Pizza",
      imageUrl: "detailsUrl10.png",
      detailsUrl: "detailsUrl10",
      price: 19.0,
      descrption: "330 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
  ],
};
//
//
const meatlessSpecialties = {
  title: "HANDCRAFTED MEATLESS SPECIALTIES",
  productCards: [
    {
      title: "Extra Cheesy Alfredo Pizza",
      imageUrl: "detailsUrl1.png",
      detailsUrl: "detailsUrl1",
      price: 19.0,
      descrption: "320 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Fresh Spinach & Tomato Alfredo Pizza",
      imageUrl: "detailsUrl2.png",
      detailsUrl: "detailsUrl2",
      price: 19.0,
      descrption: "290 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Garden Fresh Pizza",
      imageUrl: "detailsUrl3.png",
      detailsUrl: "detailsUrl3",
      price: 19.0,
      descrption: "280 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Tuscan Six Cheese Pizza",
      imageUrl: "detailsUrl4.png",
      detailsUrl: "detailsUrl4",
      price: 19.0,
      descrption: "320 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
  ],
};
//
//
const glutenFreeSpecialties = {
  title: "GLUTEN-FREE CRUST WITH ANCIENT GRAINS",
  productCards: [
    {
      title: "Create Your Own Gluten-Free Crust",
      imageUrl: "detailsUrl1.png",
      detailsUrl: "detailsUrl1",
      price: 12.5,
      descrption: "150 cal / slice, 6 slices",
      sizeDefault: null,
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["CUSTOMIZE"],
    },
  ],
};
//
//
const localSpecialties = {
  title: "LOCAL FLAVORS",
  productCards: [
    {
      title: "Hawaiian BBQ Chicken Pizza",
      imageUrl: "detailsUrl1.png",
      detailsUrl: "detailsUrl1",
      price: 19.0,
      descrption: "360 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "White Garden Pizza",
      imageUrl: "detailsUrl2.png",
      detailsUrl: "detailsUrl2",
      price: 19.0,
      descrption: "300 cal / slice, 8 slices",
      sizeDefault: "Large",
      quantityDefault: 1,
      crustDefault: "Original Crust",
      crustFlavorGhostText: "Add Crust Flavor",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
  ],
};
//
//
const subFooter = {
  text: "2,000 calories a day is used for general nutrition advice, but calorie needs vary.  Additional nutrition information available upon request.",
};
//
// **************** Papa Bowls *********************
//
//
const papaBowlCards = {
  title: "PAPA BOWLS",
  description: "",
  cardPanels: [
    {
      imageUrl: "bowl1.png",
      price: 8.49,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      title: "ITALIAN MEATS TRIO PAPA BOWL",
      detailsUrl: "bowl1Url",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
      description:
        "Pepperoni, sausage, meatballs, and veggies topped with three cheeses and Italian seasoning, baked to perfection in our signature pizza sauce.",
    },
    {
      imageUrl: "bowl2.png",
      price: 8.49,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      title: "GARDEN VEGGIE PAPA BOWL",
      detailsUrl: "bowl2Url",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
      description:
        "Spinach, mushrooms, onions, green peppers, tomatoes, and banana peppers baked in a bowl with our original sauce, cheese, and Italian seasoning.",
    },
    {
      imageUrl: "bowl3.png",
      price: 8.49,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      title: "CHICKEN ALFREDO PAPA BOWL",
      detailsUrl: "bowl3Url",
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
      description:
        "Creamy alfredo, grilled chicken, and crisp veggies baked in a bowl with three cheeses and finished with Italian seasoning.",
    },
  ],
  productCards: [
    {
      title: "Create Your Own Papa Bowl",
      imageUrl: "bowl4.png",
      detailsUrl: null,
      price: 8.49,
      descrption: "",
      sizeDefault: null,
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["CUSTOMIZE"],
    },
  ],
};
//
// **************** Papadias *********************
//
//
const parmesanPapadiasCards = {
  title: "PARMESAN CRUSTED PAPADIAS",
  productCards: [
    {
      title: "Parmesan Crusted Create Your Own Papadia",
      imageUrl: "papadias1.png",
      detailsUrl: null,
      price: 8.0,
      descrption: "",
      sizeDefault: null,
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["CUSTOMIZE"],
    },
  ],
  productCards: [
    {
      title: "Parmesan Crusted Philly Cheesesteak Papadia",
      detailsUrl: "detailsUrl1",
      price: 8.0,
      descrption: "930 cal",
      sizeDefault: "Parmesan Crusted Papadia",
      quantityDefault: 1,
      crustDefault: "Special Garlic Sauce",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Parmesan Crusted BBQ Chicken & Bacon Papadia",
      detailsUrl: "detailsUrl2",
      price: 8.0,
      descrption: "960 cal",
      sizeDefault: "Parmesan Crusted Papadia",
      quantityDefault: 1,
      crustDefault: "Barbeque Sauce",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Parmesan Crusted Grilled Buffalo Chicken Papadia",
      detailsUrl: "detailsUrl3",
      price: 8.0,
      descrption: "1,050 cal",
      sizeDefault: "Parmesan Crusted Papadia",
      quantityDefault: 1,
      crustDefault: "Ranch Sauce",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Parmesan Crusted Meatball Pepperoni Papadia",
      detailsUrl: "detailsUrl4",
      price: 8.0,
      descrption: "1,060 cal",
      sizeDefault: "Parmesan Crusted Papadia",
      quantityDefault: 1,
      crustDefault: "Pizza Sauce",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
    {
      title: "Parmesan Crusted Italian Papadia",
      detailsUrl: "detailsUrl5",
      price: 8.0,
      descrption: "1,070 cal",
      sizeDefault: "Parmesan Crusted Papadia",
      quantityDefault: 1,
      crustDefault: "Pizza Sauce",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER", "CUSTOMIZE"],
    },
  ],
};
//
//
// **************** Papa Bites *********************
//
//
const papaBitesCards = {
  title: "PAPA BITES",
  description:
    "Eight tasty pop-able morsels can be enjoyed in three exciting NEW flavors:",
  productCards: [
    {
      title: "OREO® COOKIE PAPA BITES",
      imageUrl: "papaBites1.png",
      detailsUrl: "papaBites1",
      price: 6.29,
      interestFlag: {
        isDisplayed: true,
        text: "NEW",
      },
      descrption: null,
      sizeDefault: "Cream Cheese Icing",
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "CHICKEN PARMESAN PAPA BITES",
      imageUrl: "papaBites2.png",
      detailsUrl: "papaBites2",
      price: 6.29,
      interestFlag: {
        isDisplayed: true,
        text: "NEW",
      },
      descrption: null,
      sizeDefault: "Pizza Sauce",
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "JALAPEÑO PAPA BITES",
      imageUrl: "papaBites3.png",
      detailsUrl: "papaBites3",
      price: 6.29,
      interestFlag: {
        isDisplayed: true,
        text: "NEW RECIPE",
      },
      descrption: null,
      sizeDefault: "Ranch Sauce",
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
//
//
// **************** Wings *********************
//
//
const papaWings = {
  title: "PAPA WINGS",
  productCards: [
    {
      title: "Unsauced Roasted Wings",
      detailsUrl: "detailsUrl1",
      price: 12.0,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      descrption: "810 cal",
      sizeDefault: "8 Piece",
      quantityDefault: 1,
      crustDefault: "Normal Bake",
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Hot Lemon Pepper Wings",
      detailsUrl: "detailsUrl2",
      price: 12.0,
      interestFlag: {
        isDisplayed: true,
        text: "NEW FLAVOR",
      },
      descrption: "960 cal",
      sizeDefault: "8 Piece",
      quantityDefault: 1,
      crustDefault: "Normal Bake",
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Garlic Parmesan Wings",
      detailsUrl: "detailsUrl3",
      price: 12.0,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      descrption: "1,040 cal",
      sizeDefault: "8 Piece",
      quantityDefault: 1,
      crustDefault: "Normal Bake",
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Buffalo Wings",
      detailsUrl: "detailsUrl4",
      price: 12.0,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      descrption: "1,040 cal",
      sizeDefault: "8 Piece",
      quantityDefault: 1,
      crustDefault: "Normal Bake",
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "BBQ Wings",
      detailsUrl: "detailsUrl5",
      price: 12.0,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      descrption: "880 cal",
      sizeDefault: "8 Piece",
      quantityDefault: 1,
      crustDefault: "Normal Bake",
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Honey Chipotle Wings",
      detailsUrl: "detailsUrl6",
      price: 12.0,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      descrption: "900 cal",
      sizeDefault: "8 Piece",
      quantityDefault: 1,
      crustDefault: "Normal Bake",
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
//
//
const papaPoppers = {
  title: "PAPA POPPERS",
  productCards: [
    {
      title: "Chicken Poppers",
      imageUrl: "popper1.png",
      detailsUrl: "detailsUrl1",
      price: 9.5,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      descrption: "530 cal",
      sizeDefault: "10 Piece",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Hot Lemon Pepper Chicken Poppers",
      imageUrl: "popper2.png",
      detailsUrl: "detailsUrl2",
      price: 9.5,
      interestFlag: {
        isDisplayed: true,
        text: "NEW FLAVOR",
      },
      descrption: "690 cal",
      sizeDefault: "10 Piece",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Buffalo Chicken Poppers",
      imageUrl: "popper3.png",
      detailsUrl: "detailsUrl3",
      price: 9.5,
      interestFlag: {
        isDisplayed: true,
        text: "NEW FLAVOR",
      },
      descrption: "590 cal",
      sizeDefault: "10 Piece",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "BBQ Chicken Poppers",
      imageUrl: "popper4.png",
      detailsUrl: "detailsUrl4",
      price: 9.5,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      descrption: "620 cal",
      sizeDefault: "10 Piece",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Barbeque Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Honey Chipotle Chicken Poppers",
      imageUrl: "popper5.png",
      detailsUrl: "detailsUrl5",
      price: 9.5,
      interestFlag: {
        isDisplayed: false,
        text: "",
      },
      descrption: "650 cal",
      sizeDefault: "10 Piece",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Buffalo Spicy Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
//
//
// **************** Sides *********************
//
//
const papaSidesCards = {
  title: "PAPA STARTERS",
  description: null,
  advertCards: [
    {
      title: "CHICKEN PARMESAN PAPA BITES",
      imageUrl: "papaSides1.png",
      detailsUrl: "papaSides1",
      price: 6.29,
      interestFlag: {
        isDisplayed: true,
        text: "NEW",
      },
      descrption: null,
      sizeDefault: null,
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "JALAPEÑO PAPA BITES",
      imageUrl: "papaSides2.png",
      detailsUrl: "papaSides2",
      price: 6.29,
      interestFlag: {
        isDisplayed: true,
        text: "NEW RECIPE",
      },
      descrption: null,
      sizeDefault: null,
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
  productCards: [
    {
      title: "Pepperoni Rolls",
      detailsUrl: "detailsUrl1",
      price: 7.0,
      interestFlag: {
        isDisplayed: true,
        text: "NEW",
      },
      descrption: null,
      sizeDefault: "Pepperoni Rolls",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Garlic Knots",
      detailsUrl: "detailsUrl2",
      price: 7.5,
      interestFlag: {
        isDisplayed: true,
        text: "NEW",
      },
      descrption: "110 cal / knot, 8 knots",
      sizeDefault: "Garlic Knots",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Original Breadsticks",
      detailsUrl: "detailsUrl3",
      price: 7.29,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "150 cal /stick, 10 sticks",
      sizeDefault: "Breadsticks Original",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Garlic Parmesan Breadsticks",
      detailsUrl: "detailsUrl4",
      price: 7.59,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "170 cal /stick, 10 sticks",
      sizeDefault: "Breadsticks Original",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Cheesesticks",
      detailsUrl: "detailsUrl5",
      price: 7.99,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "90 cal /stick, 14 sticks",
      sizeDefault: "Cheesesticks 10inch",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Bacon Cheesesticks",
      detailsUrl: "detailsUrl6",
      price: 8.99,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "110 cal /stick, 14 sticks",
      sizeDefault: "Cheesesticks 10inch",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Tuscan 6-Cheese Cheesesticks",
      detailsUrl: "detailsUrl7",
      price: 8.99,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "110 cal /stick, 14 sticks",
      sizeDefault: "Six Cheese Cheesesticks 10inch",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Jalapeño Cheesesticks",
      detailsUrl: "detailsUrl8",
      price: 11.49,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "110 cal /stick, 16 sticks",
      sizeDefault: "Cheesesticks 12inch",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Ranch Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Jalapeño Bacon",
      detailsUrl: "detailsUrl9",
      price: 11.5,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "130 cal /stick, 16 sticks",
      sizeDefault: "Cheesesticks 12inch",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: "Pizza Sauce",
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
//
//
// **************** Desserts *********************
//
//
const papaDessertsCards = {
  title: "DESSERTS",
  description: null,
  advertCards: [
    {
      title: "OREO® COOKIE PAPA BITES",
      imageUrl: "papaDesserts1.png",
      detailsUrl: "papaDesserts1",
      price: 6.29,
      interestFlag: {
        isDisplayed: true,
        text: "NEW",
      },
      descrption: null,
      sizeDefault: null,
      quantityDefault: null,
      crustDefault: null,
      crustFlavorGhostText: "Cream Cheese Icing",
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
  productCards: [
    {
      title: "Cinnamon Pull Aparts",
      imageUrl: "desserts1.png",
      detailsUrl: "detailsUrl1",
      price: 7.5,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Cinnamon Pull Apart",
      quantityDefault: 1,
      crustDefault: "1,960 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Chocolate Chip Cookie",
      imageUrl: "desserts2.png",
      detailsUrl: "detailsUrl2",
      price: 7.5,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Choclate Chip Cookie",
      quantityDefault: 1,
      crustDefault: "190 cal /slice, 8 slices",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Double Chocolate Chip Brownie",
      imageUrl: "desserts3.png",
      detailsUrl: "detailsUrl3",
      price: 7.5,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Double Choclate Chip Brownie",
      quantityDefault: 1,
      crustDefault: "240 cal /square, 9 squares",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
//
//
// **************** Desserts *********************
//
//
const papaDrinksCards = {
  title: "ICE COLD PEPSI BEVERAGES",
  description: null,
  productCards: [
    {
      title: "Pepsi",
      imageUrl: "drinks1.png",
      detailsUrl: "drinksUrl1",
      price: 3.49,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "2-Liter",
      quantityDefault: 1,
      crustDefault: "150 cal /12 oz",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Mountain Dew",
      imageUrl: "drinks2.png",
      detailsUrl: "drinksUrl2",
      price: 3.49,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Mountain Dew",
      quantityDefault: 1,
      crustDefault: "170 cal /12 oz",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Diet Pepsi",
      imageUrl: "drinks3.png",
      detailsUrl: "drinksUrl3",
      price: 3.49,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Mountain Dew",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Aquafina",
      imageUrl: "drinks4.png",
      detailsUrl: "drinksUrl4",
      price: 2.39,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Aquafina",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Starry",
      imageUrl: "drinks5.png",
      detailsUrl: "drinksUrl5",
      price: 3.49,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "150 cal /12 oz",
      sizeDefault: "2-Liter",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Crush Orange",
      imageUrl: "drinks6.png",
      detailsUrl: "drinksUrl6",
      price: 3.49,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "195 cal /12 oz",
      sizeDefault: "Orange Crush",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
//
//
// **************** Extras *********************
//
//
const papaSaucesCards = {
  title: "DIPPING SAUCES",
  description: null,
  productCards: [
    {
      title: "Special Garlic Sauce",
      imageUrl: "extras1.png",
      detailsUrl: "extrasUrl1",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Special Garlic Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "150 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Spicy Garlic Sauce",
      imageUrl: "extras2.png",
      detailsUrl: "extrasUrl2",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Spicy Garlic Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "153 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Pizza Sauce",
      imageUrl: "extras3.png",
      detailsUrl: "extrasUrl3",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Pizza Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "20 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Ranch Sauce",
      imageUrl: "extras4.png",
      detailsUrl: "extrasUrl4",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Ranch Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "100 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Blue  Cheese Sauce",
      imageUrl: "extras5.png",
      detailsUrl: "extrasUrl5",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Blue Cheese Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "160 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Honey Mustard Sauce",
      imageUrl: "extras6.png",
      detailsUrl: "extrasUrl6",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Honey Mustard Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "150 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Buffalo Spicy Sauce",
      imageUrl: "extras7.png",
      detailsUrl: "extrasUrl7",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Buffalo Spicy Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "15 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Barbeque Sauce",
      imageUrl: "extras8.png",
      detailsUrl: "extrasUrl8",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Barbeque Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "45 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Garlic Parmesan Sauce",
      imageUrl: "extras9.png",
      detailsUrl: "extrasUrl9",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Garlic Parm Cup",
      quantityDefault: 1,
      crustDefault: "220 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Cheese Sauce",
      imageUrl: "extras10.png",
      detailsUrl: "extrasUrl10",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Cheese Dipping Sauce",
      quantityDefault: 1,
      crustDefault: "40 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Cream Cheese Icing",
      imageUrl: "extras11.png",
      detailsUrl: "extrasUrl11",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Cream Cheese Icing Dipping",
      quantityDefault: 1,
      crustDefault: "150 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
//
//
const papaSeasoningCards = {
  title: "SEASONING PACKETS",
  description: null,
  productCards: [
    {
      title: "Special Seasonings",
      imageUrl: "seasonings1.png",
      detailsUrl: "seasoningsUrl1",
      price: 0.3,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Seasoning Shaker",
      quantityDefault: 1,
      crustDefault: "5 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Crushed Red Pepper",
      imageUrl: "seasonings2.png",
      detailsUrl: "seasoningsUrl2",
      price: 0.3,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Crushed Red Pepper Shaker",
      quantityDefault: 1,
      crustDefault: "5 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Parmesan Cheese",
      imageUrl: "seasonings3.png",
      detailsUrl: "seasoningsUrl3",
      price: 0.3,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Parmesan Cheese Shaker",
      quantityDefault: 1,
      crustDefault: "15 cal",
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
//
//
const papaExtrasCards = {
  title: "EXTRAS",
  description: null,
  productCards: [
    {
      title: "Pepperoncinis",
      imageUrl: "extras1.png",
      detailsUrl: "extrasUrl1",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: null,
      sizeDefault: "Pepperoncini Peppers",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Jalapeño Peppers",
      imageUrl: "extras2.png",
      detailsUrl: "extrasUrl2",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "5 cal /each",
      sizeDefault: "Jalapeno Peppers",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Banana Peppers",
      imageUrl: "extras3.png",
      detailsUrl: "extrasUrl3",
      price: 0.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "5 cal /each",
      sizeDefault: "Jalapeno Peppers",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
    {
      title: "Anchovies",
      imageUrl: "extras4.png",
      detailsUrl: "extrasUrl4",
      price: 1.75,
      interestFlag: {
        isDisplayed: false,
        text: null,
      },
      descrption: "30 cal /each",
      sizeDefault: "Anchovies",
      quantityDefault: 1,
      crustDefault: null,
      crustFlavorGhostText: null,
      actionButtonsText: ["ADD TO ORDER"],
    },
  ],
};
