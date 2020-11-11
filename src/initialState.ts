import { uniqueId } from "lodash";
import { Dish } from "./model/Dish";
import { Ingredient } from "./model/Ingredient";

export const initialRaw: Ingredient[] = [
  {
    name: "Pork",
    id: "1",
  },
  {
    name: "Eggs",
    id: "2",
  },
  {
    name: "Water",
    id: "7",
  },
  {
    name: "Flour",
    id: "8",
  },
  {
    name: "Milk",
    id: "10",
  },
  {
    name: "Mushroom",
    id: "12",
  },
];

export const initialProcessed: Ingredient[] = [
  {
    name: "Meat",
    id: "3",
    prev: ["1"],
  },
  {
    name: "Ham Eggs",
    id: "5",
    prev: ["2"],
  },
  {
    name: "Bread",
    id: "6",
    prev: ["7", "8"],
  },
  {
    name: "Cheese",
    id: "9",
    prev: ["10"],
  },
  {
    name: "Fried Eggs",
    id: "11",
    prev: ["2"],
  },
];

export const initialCooked: Ingredient[] = [
  {
    name: "Bacon",
    id: "4",
    prev: ["3"],
  },
  {
    name: "Sausages",
    id: "13",
    prev: ["3"],
  },
];

export const initialDishes: Dish[] = [
  {
    id: uniqueId(),
    name: "Bacon and Eggs",
    ingredients: [
      {
        id: uniqueId(),
        ingredients: [{ name: "Pork" }],
        prev: [
          {
            id: uniqueId(),
            ingredients: [{ name: "Meat" }],
            prev: [
              {
                id: uniqueId(),
                ingredients: [{ name: "Bacon" }],
              },
            ],
          },
        ],
      },
      {
        id: uniqueId(),
        ingredients: [{ name: "Eggs" }],
        prev: [
          {
            id: uniqueId(),
            ingredients: [{ name: "Ham Eggs" }],
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    name: "Bread",
    ingredients: [
      {
        id: uniqueId(),
        ingredients: [{ name: "Water" }, { name: "Flour" }],
        prev: [
          {
            id: uniqueId(),
            ingredients: [{ name: "Bread" }],
          },
        ],
      },
    ],
  },
];
