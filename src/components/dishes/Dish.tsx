import {
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
} from "@chakra-ui/core";
import React, { FC, useState } from "react";
import { Dish as IDish } from "../../model/Dish";
import Ingredients from "./Ingredients";

type Props = {
  search: string;
} & IDish;

const Dish: FC<Props> = ({ name, ingredients, search }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => setIsOpen((state) => !state);

  return (
    <AccordionItem isOpen={isOpen}>
      <AccordionHeader
        onClick={handleHeaderClick}
        _expanded={{ bg: "rgba(255,255,255,0.06)" }}
      >
        <Box flex="1" textAlign="left">
          {name}
        </Box>
        <AccordionIcon />
      </AccordionHeader>

      <AccordionPanel pb="1" pl="8">
        {ingredients?.map((ingerdients, index) => (
          <Box key={ingerdients.id} mb="2">
            <Ingredients
              setIsOpen={setIsOpen}
              search={search}
              {...ingerdients}
            />
            {index !== ingredients.length - 1 && <Divider></Divider>}
          </Box>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Dish;
