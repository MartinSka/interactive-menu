import { Accordion } from "@chakra-ui/core";
import React, { FC } from "react";
import { useDishes } from "../../context/dishes";
import Dish from "./Dish";

type Props = {
  search: string;
};

const Dishes: FC<Props> = ({ search }) => {
  const { dishes } = useDishes();

  return (
    <Accordion mt="4" borderRightWidth={1} borderLeftWidth={1}>
      {dishes.map((dish) => (
        <Dish search={search} key={dish.id} {...dish}></Dish>
      ))}
    </Accordion>
  );
};

export default Dishes;
