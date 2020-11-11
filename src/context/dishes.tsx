import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  initialRaw,
  initialProcessed,
  initialCooked,
  initialDishes,
} from "../initialState";
import { Dish } from "../model/Dish";
import { Ingredient } from "../model/Ingredient";

interface Context {
  raw: Ingredient[];
  processed: Ingredient[];
  cooked: Ingredient[];
  dishes: Dish[];
  setRaw: Dispatch<React.SetStateAction<Ingredient[]>>;
  setCooked: Dispatch<React.SetStateAction<Ingredient[]>>;
  setProcessed: Dispatch<React.SetStateAction<Ingredient[]>>;
  setDishes: Dispatch<React.SetStateAction<Dish[]>>;
}

const DishesContext = createContext<Context | null>(null);

export const DishesProvider: FC = (props) => {
  const [raw, setRaw] = useState(initialRaw);
  const [processed, setProcessed] = useState(initialProcessed);
  const [cooked, setCooked] = useState(initialCooked);
  const [dishes, setDishes] = useState<Dish[]>(initialDishes);

  const value = useMemo(
    () => ({
      raw,
      processed,
      cooked,
      dishes,
      setRaw,
      setProcessed,
      setCooked,
      setDishes,
    }),
    [raw, processed, cooked, dishes, setRaw, setProcessed, setCooked, setDishes]
  );

  return <DishesContext.Provider value={value} {...props} />;
};

export const useDishes = () => {
  const context = useContext(DishesContext);

  if (!context) {
    throw new Error(`useDishes must be used within a DishesProvider`);
  }

  return context;
};
