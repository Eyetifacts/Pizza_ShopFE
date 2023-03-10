const customizeRules = {
  productId: "ABC123",
  productType: "Customer Pizza",
  ruleFlow: {
    ruleFlowId: "rfABC123",
    ruleName: "Base Selections",
    flowPath: {
      id: "flowPath1",
      flow: [
        {
          choiceGroupId: "gc1",
          choiceHierarchy: {
            choiceType: "Crust",
            choices: [
              "Original",
              "Crispy Parm",
              "Epic Stuffed",
              "Epic Pepperoni Stuffed",
            ],
            childLevels: [
              {
                choiceGroupId: "gc2",
                choiceHierarchy: {
                  choiceType: "Pizza Size",
                  choices: ["Small", "Medium", "Large", "X-Large"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc3",
                choiceHierarchy: {
                  choiceType: "Crust Flavor",
                  choices: ["None", "Garlic Parmesan Cheese"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc4",
                choiceHierarchy: {
                  choiceType: "Sauce",
                  choices: [
                    "None",
                    "BBQ",
                    "Ranch",
                    "Original",
                    "Garlic",
                    "Buffalo",
                    "Alfredo Sauce",
                  ],
                  childLevels: [
                    {
                      choiceGroupId: "gc5",
                      choiceHierarchy: {
                        choiceType: "Sauce Amount",
                        choices: ["Normal", "Light", "Extra"],
                        childLevels: [],
                      },
                    },
                  ],
                },
              },
              {
                choiceGroupId: "gc6",
                choiceHierarchy: {
                  choiceType: "Cut",
                  choices: ["Normal Cut", "Square Cut", "Clean Cut", "No Cut"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc7",
                choiceHierarchy: {
                  choiceType: "Bake",
                  choices: ["Normal Bake", "Well Done"],
                  childLevels: [],
                },
              },
            ],
          },
        },
        {
          choiceGroupId: "gc8",
          choiceHierarchy: {
            choiceType: "Crust",
            choices: ["NY Style"],
            childLevels: [
              {
                choiceGroupId: "gc9",
                choiceHierarchy: {
                  choiceType: "Pizza Size",
                  choices: ["X-Large"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc3",
                choiceHierarchy: {
                  choiceType: "Crust Flavor",
                  choices: ["None", "Garlic Parmesan Cheese"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc4",
                choiceHierarchy: {
                  choiceType: "Sauce",
                  choices: [
                    "None",
                    "BBQ",
                    "Ranch",
                    "Original",
                    "Garlic",
                    "Buffalo",
                    "Alfredo Sauce",
                  ],
                  childLevels: [
                    {
                      choiceGroupId: "gc5",
                      choiceHierarchy: {
                        choiceType: "Sauce Amount",
                        choices: ["Normal", "Light", "Extra"],
                        childLevels: [],
                      },
                    },
                  ],
                },
              },
              {
                choiceGroupId: "gc6",
                choiceHierarchy: {
                  choiceType: "Cut",
                  choices: ["Normal Cut", "Square Cut", "Clean Cut", "No Cut"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc7",
                choiceHierarchy: {
                  choiceType: "Bake",
                  choices: ["Normal Bake", "Well Done"],
                  childLevels: [],
                },
              },
            ],
          },
        },

        {
          choiceGroupId: "gc12",
          choiceHierarchy: {
            choiceType: "Crust",
            choices: ["Thin"],
            childLevels: [
              {
                choiceGroupId: "gc13",
                choiceHierarchy: {
                  choiceType: "Pizza Size",
                  choices: ["Small"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc3",
                choiceHierarchy: {
                  choiceType: "Crust Flavor",
                  choices: ["None", "Garlic Parmesan Cheese"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc4",
                choiceHierarchy: {
                  choiceType: "Sauce",
                  choices: [
                    "None",
                    "BBQ",
                    "Ranch",
                    "Original",
                    "Garlic",
                    "Buffalo",
                    "Alfredo Sauce",
                  ],
                  childLevels: [
                    {
                      choiceGroupId: "gc5",
                      choiceHierarchy: {
                        choiceType: "Sauce Amount",
                        choices: ["Normal", "Light", "Extra"],
                        childLevels: [],
                      },
                    },
                  ],
                },
              },
              {
                choiceGroupId: "gc6",
                choiceHierarchy: {
                  choiceType: "Cut",
                  choices: ["Normal Cut", "Square Cut", "Clean Cut", "No Cut"],
                  childLevels: [],
                },
              },
              {
                choiceGroupId: "gc7",
                choiceHierarchy: {
                  choiceType: "Bake",
                  choices: ["Normal Bake", "Well Done"],
                  childLevels: [],
                },
              },
            ],
          },
        },
      ],
    },
  },
};
