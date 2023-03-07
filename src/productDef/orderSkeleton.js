const order = {
  productType: "",
  productName: "Custom Pizza",
  orderId: "oi1",
  orderInfo: {
    base: {
      size: { pizzaSize: "Large", priceAlteration: 2.0 },
      crust: { type: "Original", priceAlteration: 0.0 },
      crustFlavor: { flavor: "None", priceAlteration: 0.0 },
      sauce: {
        flavor: { flavor: "Original", priceAlteration: 0.0 },
        amount: { sauceAmount: "Normal", priceAlteration: 0.0 },
      },
      cut: { cutType: "Normal", priceAlteration: 0.0 },
      bake: { bakeType: "Normal", priceAlteration: 0.0 },
    },
    cheese: {
      quantity: {
        amount: "Normal",
        priceAlteration: 0.0,
      },
      cheeseAdditions: {
        extraCheese: {
          selected: false,
          priceAlteration: 0.0,
        },
        threeCheese: {
          selected: true,
          priceAlteration: 1.0,
        },
        parmesanRomano: {
          selected: false,
          priceAlteration: 0.0,
        },
      },
    },
    meats: {
      spicyItalianSausage: {
        selected: true,
        whole: true,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 2.0,
      },
      phillySteak: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      salami: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      grilledChicken: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      canadianBacon: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      beef: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      pepperoni: {
        selected: true,
        whole: true,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 2.0,
      },
      sausage: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      meatball: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      anchovies: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
    },
    veggies: {
      greenPeppers: {
        selected: true,
        whole: true,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 1.0,
      },
      romaTomatoes: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      blackOlives: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      pineapple: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      onions: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      freshSpinach: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      bananaPeppers: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      mushrooms: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
      jalapenoPeppers: {
        selected: false,
        whole: false,
        halves: { firstHalf: false, seconhalf: false },
        amount: "Normal",
        priceAlteration: 0.0,
      },
    },
  },
};