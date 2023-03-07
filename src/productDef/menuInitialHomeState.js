// menuState
// pizzaMenu
// pizzaMenuSections
// papaBowlsMenu
// papaBowlMenuSections
// ...

const menuState = [
  {
    title: "pizzaMenu",
    menuSections: [
      {
        title: null,
        description: null,
        type: "menuCarousel",
        menuCarousel: {
          leadCard: {
            type: "leadCarouselCard",
            title: "CREATE YOUR OWN PIZZA",
            description: " Get started with one of our signature crusts",
          },
          carouselCards: [
            {
              type: "menuCarouselCard",
              imgae: {
                imageName: "Name1",
                imageUrl: "name1Url.png",
              },
              title: "Original Crust",
              description:
                "Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              imgae: {
                imageName: "Name2",
                imageUrl: "name2Url.png",
              },
              title: "Crispy Parm Crust",
              description:
                "A layer of buttery, toasted parmesan cheese baked on the underside of our signature thin crust.",
              interestFlag: { isDisplayed: true, text: "LIMITED TIME" },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              imgae: {
                imageName: "Name3",
                imageUrl: "name3Url.png",
              },
              title: "Epic Stuffed Crust",
              description:
                "Our original dough stuffed with melty cheese and baked to a crispy, golden goodness.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              imgae: {
                imageName: "Name4",
                imageUrl: "name4Url.png",
              },
              title: "Epic Pepperoni-Stuffed Crust",
              description:
                "Our original fresh dough baked into a seasoned crust, hand-stuffed with pepperoni and cheese.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              imgae: {
                imageName: "Name5",
                imageUrl: "name5Url.png",
              },
              title: "NY Style Crust",
              description:
                "Hand-stretched, oversized, foldable slices with just the right balance of crust.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              imgae: {
                imageName: "Name6",
                imageUrl: "name6Url.png",
              },
              title: "Thin Crust",
              description:
                "Lighter than our Original Crust, and just a little bit crispy.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              imgae: {
                imageName: "Name7",
                imageUrl: "name7Url.png",
              },
              title: "Gluten-Free Crust",
              description:
                "Made with sorghum, teff, amaranth and quinoa. Not recommended for those with Celiac Disease.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
          ],
        },
      },
      {
        title: "PAPA PICKS",
        description: null,
        type: "productCards",
        productCards: {
          productCardArray: [
            {
              title: "Pepperoni Pizza",
              imgae: {
                imageName: "card1",
                imageUrl: "card1Url.png",
              },
              price: 17.5,
              interestFlag: { isDisplayed: true, text: "Limited Time" },
              description: "320 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Sausage Pizza",
              imgae: {
                imageName: "card2",
                imageUrl: "card2Url.png",
              },
              price: 17.5,
              interestFlag: { isDisplayed: true, text: "Limited Time" },
              description: "330 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Cheese Pizza",
              imgae: {
                imageName: "card2",
                imageUrl: "card2Url.png",
              },
              price: 17.5,
              interestFlag: { isDisplayed: true, text: "Limited Time" },
              description: "270 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
          ],
        },
      },
      {
        title: null,
        description: null,
        type: "advertRowCard",
        advertRowCard: {
          imgae: {
            imageName: "advert1",
            imageUrl: "advert1Url.png",
          },
          title: "EPIC STUFFED CRUST PIZZA",
          price: 13.99,
          interestFlag: { isDisplayed: true, text: "Limited Time" },
          description:
            "Choose your topping. Cheese your crust. Epicness is now even easier. Indulge in your favorite 1-topping pizza now paired with a pillowy, cheese-filled crust.",
          details: {
            text: "Details",
            detailsUrl: "details1Url",
          },
          buttonGroup: [
            {
              buttonStyle: "dark",
              buttonText: "CUSTOMIZE",
              buttonFunction: "customizeFunction",
            },
          ],
        },
      },
      {
        title: "CRISPY PARM CRUST",
        description:
          "A layer of buttery, toasted parmesan cheese baked on the underside of our signature thin crust.",
        type: "advertCards",
        advertCards: [
          {
            title: "CREATE YOUR OWN CRISPY PARM PIZZA",
            price: 12.99,
            interestFlag: { isDisplayed: true, text: "LIMITED TIME" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            imgae: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "DELUXE CHEESE CRISPY PARM PIZZA",
            price: 12.99,
            interestFlag: { isDisplayed: true, text: "LIMITED TIME" },
            description:
              "Two melty cheeses atop alfredo and pizza sauces on our Crispy Parm Crust create layers of cheesy, crispy goodness. Finished with Italian Seasoning.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            imgae: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
      {
        title: "HANDCRAFTED SPECIALTIES",
        description: null,
        type: "productCards",
        productCards: {
          productCardArray: [
            {
              title: "The Works Pizza",
              imgae: {
                imageName: "card1",
                imageUrl: "card1Url.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "340 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "The Meats Pizza",
              imgae: {
                imageName: "card2",
                imageUrl: "card2Url.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "380 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Zesty Italian Trio Pizza",
              imgae: {
                imageName: "card3",
                imageUrl: "card2Ur3.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "370 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Super Hawaiian Pizza",
              imgae: {
                imageName: "card5",
                imageUrl: "card2Ur5.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "340 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Ultimate Pepperoni Pizza",
              imgae: {
                imageName: "card6",
                imageUrl: "card2Ur6.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "360 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "BBQ Chicken Bacon Pizza",
              imgae: {
                imageName: "card7",
                imageUrl: "card2Ur7.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "350 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Fiery Buffalo Chicken Pizza",
              imgae: {
                imageName: "card8",
                imageUrl: "card2Ur8.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "330 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Philly Cheesesteak Pizza",
              imgae: {
                imageName: "card9",
                imageUrl: "card2Ur9.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "360 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Pepperoni, Sausage & Six Cheese Pizza",
              imgae: {
                imageName: "card10",
                imageUrl: "card2Ur10.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "390 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
          ],
        },
      },
      {
        title: "HANDCRAFTED MEATLESS SPECIALTIES",
        description: null,
        type: "productCards",
        productCards: {
          productCardArray: [
            {
              title: "Extra Cheesy Alfredo Pizza",
              imgae: {
                imageName: "card1",
                imageUrl: "card1Url.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "320 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Fresh Spinach & Tomato Alfredo Pizza",
              imgae: {
                imageName: "card2",
                imageUrl: "card2Url.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "290 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Garden Fresh Pizza",
              imgae: {
                imageName: "card3",
                imageUrl: "card2Ur3.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "280 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "Tuscan Six Cheese Pizza",
              imgae: {
                imageName: "card3",
                imageUrl: "card2Ur3.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "320 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
          ],
        },
      },
      {
        title: "GLUTEN-FREE CRUST WITH ANCIENT GRAINS",
        description: null,
        type: "productCards",
        productCards: {
          productCardArray: [
            {
              title: "Create Your Own Gluten-Free Crust",
              imgae: {
                imageName: "card1",
                imageUrl: "card1Url.png",
              },
              price: 12.5,
              interestFlag: { isDisplayed: false, text: null },
              description: "150 cal /slice, 6 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: false,
                  value: null,
                },
                quantity: {
                  isDisplayed: false,
                  value: null,
                },
                type: {
                  isDisplayed: false,
                  value: null,
                },
                flavor: {
                  isDisplayed: false,
                  value: null,
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
          ],
        },
      },
      {
        title: "LOCAL FLAVORS",
        description: null,
        type: "productCards",
        productCards: {
          productCardArray: [
            {
              title: "Hawaiian BBQ Chicken Pizza",
              imgae: {
                imageName: "card1",
                imageUrl: "card1Url.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "360 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              title: "White Garden Pizza",
              imgae: {
                imageName: "card2",
                imageUrl: "card2Url.png",
              },
              price: 19.0,
              interestFlag: { isDisplayed: false, text: null },
              description: "300 cal /slice, 8 slices",
              details: {
                text: "Details",
                detailsUrl: "details1Url",
              },
              productCardForm: {
                size: {
                  isDisplayed: true,
                  value: "Large",
                },
                quantity: {
                  isDisplayed: true,
                  value: 1,
                },
                type: {
                  isDisplayed: true,
                  value: "Original Crust",
                },
                flavor: {
                  isDisplayed: true,
                  value: "Add Crust Flavor",
                },
              },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "ADD TO ORDER",
                  buttonFunction: "addToOrderFunction",
                },
                {
                  buttonStyle: "light",
                  buttonText: "CUSTOMIZE",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    title: "papaBowlsMenu",
    menuSections: [
      {
        title: "PAPA BOWLS",
        description: null,
        type: "advertRowCard, productCard",
        adverRowCards: [
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            title: "ITALIAN MEATS TRIO PAPA BOWL",
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description:
              "Pepperoni, sausage, meatballs, and veggies topped with three cheeses and Italian seasoning, baked to perfection in our signature pizza sauce.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert2",
              imageUrl: "advert2Url.png",
            },
            title: "GARDEN VEGGIE PAPA BOWL",
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description:
              "Spinach, mushrooms, onions, green peppers, tomatoes, and banana peppers baked in a bowl with our original sauce, cheese, and Italian seasoning.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert3",
              imageUrl: "advert3Url.png",
            },
            title: "CHICKEN ALFREDO PAPA BOWL",
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description:
              "Creamy alfredo, grilled chicken, and crisp veggies baked in a bowl with three cheeses and finished with Italian seasoning.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
        productCards: [
          {
            title: "Create Your Own Papa Bowl",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description: nul,
            details: {
              text: null,
              detailsUrl: null,
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
    ],
  },
];
