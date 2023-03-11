// Product
// options
// crust, cheese, meat, vegtables, size, sauce
// crust type dicates allowable pizza sizes
// NY Style:  X-Large
// Gluten Free: Small
// Epic Stuffed:  Large
// Crispy Parm:  Large

const menuType = {
  product: "pizza",
  buildFlows: [
    {
      flowName: "baseFlow",
      optionSelections: [
        {
          options: [
            {
              optionName: "crustType",
              optionRule: {
                ruleName: "conditionSelect",
                selectionIsMandatory: true,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: [
                        "OriginalCrust",
                        "Crispy Parm Crust",
                        "Epic Stuffed Crust",
                        "Epic Pepperoni-Stuffed Crust",
                        "NY Style Crust",
                        "Thin Crust",
                        "Gluten-Free Crust",
                      ],
                    },
                  },
                ],
              },
            },
          ],
          buildFlows: [
            {
              flowName: "sizeFlow",
              optionSelections: [
                {
                  options: [
                    {
                      optionName: "pizzaSize",
                      optionRule: {
                        ruleName: "conditionSelect",
                        isMandatory: true,
                        optionSelections: [
                          {
                            inputType: "crustType",
                            condition: ["Original Crust"],
                            actionType: "selectList",
                            result: {
                              resultType: "selectList",
                              result: [
                                "Small",
                                "Medium",
                                "Large",
                                "Extra Large",
                              ],
                            },
                          },
                          {
                            inputType: "crustType",
                            crustType: [
                              "Crispy Parm Crust",
                              "Epic Stuffed Crust",
                              "Epic Pepperoni-Stuffed Crust",
                              "NY Style Crust",
                              "Thin Crust",
                            ],
                            actionType: "selectList",
                            result: {
                              resultType: "selectList",
                              result: ["Large"],
                            },
                          },
                          {
                            inputType: "crustType",
                            crustType: ["Gluten-Free Crust"],
                            actionType: "selectList",
                            result: {
                              resultType: "selectList",
                              result: ["Small"],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          options: [
            {
              optionName: "crustFlavor",
              optionRule: {
                ruleName: "conditionSelect",
                selectionIsMandatory: true,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: ["None", "Garlic Parmesan Cheese"],
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          options: [
            {
              optionName: "sauceFlavor",
              optionRule: {
                ruleName: "conditionSelect",
                selectionIsMandatory: true,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: [
                        "None",
                        "Barbecue",
                        "Ranch",
                        "Original",
                        "Garlic",
                        "Buffalo",
                        "Alfredo Sauce",
                      ],
                    },
                  },
                ],
              },
            },
          ],
          buildFlow: [
            {
              flowName: "sauceAmountFlow",
              optionSelections: [
                {
                  options: [
                    {
                      optionName: "sauceAmount",
                      optionRule: {
                        ruleName: "conditionSelect",
                        isMandatory: true,
                        optionSelections: [
                          {
                            inputType: "sauceFlavor",
                            condition: [
                              "Barbecue",
                              "Ranch",
                              "Original",
                              "Garlic",
                              "Buffalo",
                              "Alfredo Sauce",
                            ],
                            actionType: "selectList",
                            result: {
                              resultType: "selectList",
                              result: ["Normal", "Light", "Extra"],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          options: [
            {
              optionName: "cutType",
              optionRule: {
                ruleName: "conditionSelect",
                selectionIsMandatory: true,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: [
                        "Normal Cut",
                        "Square Cut",
                        "Clean Cut",
                        "No Cut",
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          options: [
            {
              optionName: "bakeType",
              optionRule: {
                ruleName: "conditionSelect",
                selectionIsMandatory: true,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: ["Normal Bake", "Well Done"],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      flowName: "cheeseFlow",
      optionSelections: [
        {
          options: [
            {
              optionName: "cheeseAmount",
              optionRule: {
                ruleName: "conditionSelect",
                selectionIsMandatory: true,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: ["Normal Cheese", "Light Cheese", "No Cheese"],
                    },
                  },
                ],
              },
            },
            {
              optionName: "additionalCheeseToppings",
              optionRule: {
                ruleName: "multipleSelect",
                selectionIsMandatory: false,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: [
                        "Parmesan Romano",
                        "Extra Cheese",
                        "3-Cheese Blend",
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      flowName: "meatFlow",
      optionSelections: [
        {
          options: [
            {
              optionName: "meatToppings",
              optionRule: {
                ruleName: "multipleSelect",
                selectionIsMandatory: false,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: [
                        {
                          name: "Canadian Bacon",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Sausage",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Philly Steak",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Bacon",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Salami",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Beef",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Meatball",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Grilled Chicken",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Pepperoni",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Anchovies",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Spicy Italian Sausage",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    {
      flowName: "veggieFlow",
      optionSelections: [
        {
          options: [
            {
              optionName: "veggieToppings",
              optionRule: {
                ruleName: "multipleSelect",
                selectionIsMandatory: false,
                optionSelections: [
                  {
                    inputType: null,
                    condition: [],
                    actionType: "getSelectList",
                    result: {
                      resultType: "selectList",
                      result: [
                        {
                          name: "Onions",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Black Olives",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Fresh Spinach",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Mushrooms",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Roma Tomatoes",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Banana Peppers",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Jalapeño Peppers",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Pineapple",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: "Green Peppers",
                          buildFlows: [
                            {
                              flowName: "pizzaCoverage",
                              optionSelections: [
                                {
                                  options: [
                                    {
                                      optionName: "halfOrWhole",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: [
                                                "Half1",
                                                "Whole",
                                                "Half2",
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      optionName: "ingredientAmount",
                                      optionRule: {
                                        ruleName: "conditionalSelect",
                                        selectionIsMandatory: true,
                                        optionSelections: [
                                          {
                                            inputType: null,
                                            condition: [],
                                            actionType: "getSelectList",
                                            result: {
                                              resultType: "selectList",
                                              result: ["Normal", "Extra"],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
