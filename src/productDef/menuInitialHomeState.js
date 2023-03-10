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
            description: null,
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
  {
    title: "papadiasMenu",
    menuSections: [
      {
        title: "PARMESAN CRUSTED PAPADIAS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Parmesan Crusted Create Your Own Papadia",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
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
          {
            title: "Parmesan Crusted Philly Cheesesteak Papadia",
            imgae: {
              imageName: "card2",
              imageUrl: "card1Ur2.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "930 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Special Garlic Sauce",
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
            title: "Parmesan Crusted BBQ Chicken & Bacon Papadia",
            imgae: {
              imageName: "card3",
              imageUrl: "card1Ur3.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "960 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Barbeque Sauce",
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
            title: "Parmesan Crusted Grilled Buffalo Chicken Papadia",
            imgae: {
              imageName: "card4",
              imageUrl: "card1Ur4.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,050 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
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
            title: "Parmesan Crusted Meatball Pepperoni Papadia",
            imgae: {
              imageName: "card5",
              imageUrl: "card1Ur5.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,060 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
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
            title: "Parmesan Crusted Italian Papadia",
            imgae: {
              imageName: "card6",
              imageUrl: "card1Ur6.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,070 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
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
      {
        title: "PAPADIAS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Create Your Own Papadia",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
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
          {
            title: "Philly Cheesesteak Papadia",
            imgae: {
              imageName: "card2",
              imageUrl: "card1Ur2.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "800 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Special Garlic Sauce",
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
            title: "BBQ Chicken & Bacon Papadia",
            imgae: {
              imageName: "card3",
              imageUrl: "card1Ur3.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "830 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Barbeque Sauce",
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
            title: "Grilled Buffalo Chicken Papadia",
            imgae: {
              imageName: "card4",
              imageUrl: "card1Ur4.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "910 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: false,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
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
            title: "Meatball Pepperoni Papadia",
            imgae: {
              imageName: "card5",
              imageUrl: "card1Ur5.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "990 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
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
            title: "Italian Papadia",
            imgae: {
              imageName: "card6",
              imageUrl: "card1Ur6.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "940 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
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
    ],
  },
  {
    title: "papaBitesMenu",
    menuSections: [
      {
        title: "PAPA BITES",
        description:
          "Eight tasty pop-able morsels can be enjoyed in three exciting NEW flavors:",
        type: "advertRowCard",
        adverRowCards: [
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            title: "OREO?? COOKIE PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: null },
            description: null,
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
                isDisplayed: true,
                value: "Cream Cheese Icing",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert2",
              imageUrl: "advert1Ur2.png",
            },
            title: "CHICKEN PARMESAN PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW" },
            description: null,
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
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert2",
              imageUrl: "advert1Ur2.png",
            },
            title: "JALAPE??O PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW RECIPE" },
            description: null,
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
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
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
            description: null,
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
  {
    title: "wingsMenu",
    menuSections: [
      {
        title: "PAPA WINGS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Unsauced Roasted Wings",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "810 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Hot Lemon Pepper Wings",
            imgae: {
              imageName: "card2",
              imageUrl: "card1Ur2.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: true, text: "NEW FLAVOR" },
            description: "960 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Garlic Parmesan Wings",
            imgae: {
              imageName: "card3",
              imageUrl: "card1Ur3.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,040 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Buffalo Wings",
            imgae: {
              imageName: "card4",
              imageUrl: "card1Ur4.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "840 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "BBQ Wings",
            imgae: {
              imageName: "card5",
              imageUrl: "card1Ur5.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "880 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Honey Chipotle Wings",
            imgae: {
              imageName: "card6",
              imageUrl: "card1Ur6.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "900 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
      {
        title: "PAPA POPPERS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Chicken Poppers",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "530 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Hot Lemon Pepper Chicken Poppers",
            imgae: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: true, text: "NEW FLAVOR" },
            description: "690 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Buffalo Chicken Poppers",
            imgae: {
              imageName: "card3",
              imageUrl: "card3UrL.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "590 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Buffalo Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "BBQ Chicken Poppers",
            imgae: {
              imageName: "card4",
              imageUrl: "card4UrL.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "590 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Barbeque Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Honey Chipotle Chicken Poppers",
            imgae: {
              imageName: "card5",
              imageUrl: "card5UrL.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "650 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Special Garlic Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "sidesMenu",
    menuSections: [
      {
        title: "PAPA STARTERS",
        description: null,
        type: "advertRowCard, productCard",
        adverRowCards: [
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            title: "CHICKEN PARMESAN PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW" },
            description: null,
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
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert2",
              imageUrl: "advert2Url.png",
            },
            title: "JALAPE??O PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW RECIPE" },
            description: null,
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
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
        productCards: [
          {
            title: "Pepperoni Rolls",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: true, text: "NEW!" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Pepperoni Rolls",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Garlic Knots",
            imgae: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 7.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "110 cal /knot, 8 knots",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Garlic Knots",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Original Breadsticks",
            imgae: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 7.29,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal /stick, 10 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Original Breadsticks",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Garlic Parmesan Breadsticks",
            imgae: {
              imageName: "card4",
              imageUrl: "card4Url.png",
            },
            price: 7.59,
            interestFlag: { isDisplayed: false, text: null },
            description: "170 cal /stick, 10 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Garlic Parmesan Breadsticks",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Cheesesticks",
            imgae: {
              imageName: "card5",
              imageUrl: "card5Url.png",
            },
            price: 7.99,
            interestFlag: { isDisplayed: false, text: null },
            description: "90 cal /stick, 14 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheesesticks 10inch",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Bacon Cheesesticks",
            imgae: {
              imageName: "card6",
              imageUrl: "card6Url.png",
            },
            price: 7.99,
            interestFlag: { isDisplayed: false, text: null },
            description: "110 cal /stick, 14 stick",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheesesticks 10inch",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Tuscan 6-Cheese Cheesestick",
            imgae: {
              imageName: "card7",
              imageUrl: "card7Url.png",
            },
            price: 8.99,
            interestFlag: { isDisplayed: false, text: null },
            description: "110 cal /stick, 14 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Six Cheese Cheesesticks 10",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Jalape??o Cheesesticks",
            imgae: {
              imageName: "card8",
              imageUrl: "card8Url.png",
            },
            price: 11.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "110 cal /stick, 16 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheesesticks 12inch",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Jalape??o Bacon",
            imgae: {
              imageName: "card8",
              imageUrl: "card8Url.png",
            },
            price: 11.5,
            interestFlag: { isDisplayed: false, text: null },
            description: " 130 cal /stick, 16 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheesesticks 12inch",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "dessertsMenu",
    menuSections: [
      {
        title: "DESSERTS",
        description: null,
        type: "advertRowCard, productCard",
        adverRowCards: [
          {
            type: "advertRowCard",
            imgae: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            title: "OREO?? COOKIE PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW" },
            description: null,
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
                isDisplayed: true,
                value: "Cream Cheese Icing",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
        productCards: [
          {
            title: "Cinnamon Pull Aparts",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 7.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,960 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cinnamon Pull Apart",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Chocolate Chip Cookie",
            imgae: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 7.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "190 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Choclate Chip Cookie",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Double Choclate Chip Brownie",
            imgae: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 7.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "240 cal /square, 9 squares",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Double Choclate Chip Brownie",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "drinksMenu",
    menuSections: [
      {
        title: "ICE COLD PEPSI BEVERAGES",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Pepsi",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal /12 oz",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "2-Liter",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Mountain Dew",
            imgae: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "170 cal /12 oz",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Mountain Dew",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Diet Pepsi",
            imgae: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "2-Liter",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Aquafina",
            imgae: {
              imageName: "card4",
              imageUrl: "card4Url.png",
            },
            price: 2.39,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Aquafina",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Starry",
            imgae: {
              imageName: "card5",
              imageUrl: "card5Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal /12 oz",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "2-Liter",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Starry",
            imgae: {
              imageName: "card6",
              imageUrl: "card6Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "195 cal /12 oz",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Orange Crush",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "extrasMenu",
    menuSections: [
      {
        title: "DIPPING SAUCES",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Special Garlic Sauce",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Special Garlic Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Spicy Garlic Sauce",
            imgae: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "153 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Spicy Garlic Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Pizza Sauce",
            imgae: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "20 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "2-Liter",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Ranch Sauce",
            imgae: {
              imageName: "card4",
              imageUrl: "card4Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "100 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Ranch Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Blue Cheese Sauce",
            imgae: {
              imageName: "card5",
              imageUrl: "card5Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "160 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Blue Cheese Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Honey Mustard Sauce",
            imgae: {
              imageName: "card6",
              imageUrl: "card6Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Honey Mustard Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Buffalo Spicy Sauce",
            imgae: {
              imageName: "card7",
              imageUrl: "card7Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "15 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Buffalo Spicy Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Barbeque Sauce",
            imgae: {
              imageName: "card8",
              imageUrl: "card8Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "45 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Barbeque Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Garlic Parmesan Sauce",
            imgae: {
              imageName: "card9",
              imageUrl: "card9Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "220 cal/cup",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Garlic Parm Cup",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Cheese Sauce",
            imgae: {
              imageName: "card10",
              imageUrl: "card10Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "40 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheese Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Cream Cheese Icing",
            imgae: {
              imageName: "card11",
              imageUrl: "card11Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cream Cheese Icing Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
      {
        title: "SEASONING PACKETS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Special Seasonings",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 0.3,
            interestFlag: { isDisplayed: false, text: null },
            description: "5 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Seasoning Shaker",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Crushed Red Pepper",
            imgae: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 0.3,
            interestFlag: { isDisplayed: false, text: null },
            description: "5 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Crushed Red Pepper Shaker",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Parmesan Cheese",
            imgae: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 0.3,
            interestFlag: { isDisplayed: false, text: null },
            description: "15 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Cheese Shaker",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
      {
        title: "EXTRAS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Pepperoncinis",
            imgae: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Pepperoncinis Peppers",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Jalape??o Peppers",
            imgae: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "5 cal /each",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Jalapeno Peppers",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Banana Peppers",
            imgae: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "5 cal /each",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Banana Peppers",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Anchovies",
            imgae: {
              imageName: "card4",
              imageUrl: "card4Url.png",
            },
            price: 1.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "30 cal /each",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Anchovies",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
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
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
];


export default menuState;