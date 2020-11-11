import { Ingredient } from "./Ingredient";

export interface Dish {
  id?: string;
  name?: string;
  ingredients?: Dish[];
  prev?: Dish[];
}

export interface DishForm {
  id: string;
  raw?: Ingredient[];
  processed?: Ingredient[];
  cooked?: Ingredient[];
}
