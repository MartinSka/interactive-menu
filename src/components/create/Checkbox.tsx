import React, { ChangeEvent, FC, useState } from "react";
import { Checkbox as ChakraCheckbox } from "@chakra-ui/core";
import { xor, intersection, compact } from "lodash";
import { Ingredient } from "../../model/Ingredient";

type Props = {
  type: string;
  ingredients: Ingredient[];
  next?: Ingredient[];
  onChange: (ingredients: Ingredient[]) => void;
};

const Checkbox: FC<Props> = ({ ingredients, next, onChange }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const nextIngreidients = next?.filter(
    ({ prev }) =>
      prev?.filter((ingredient) => selected.includes(ingredient)).length
  );

  const handleState = (e: ChangeEvent<HTMLInputElement>) => {
    const newSelection = xor(selected, [e.target.value]);
    setSelected(newSelection);

    const ingredientsData = compact(
      newSelection.map((selectedId) =>
        ingredients.find(({ id }) => id === selectedId)
      )
    );

    onChange(ingredientsData);
  };

  const ingredientsFiltered = ingredients.filter(
    ({ id }) =>
      !selected.length ||
      selected.includes(id) ||
      nextIngreidients?.find(({ prev }) => !!intersection(prev, [id]).length)
  );

  return (
    <>
      {ingredientsFiltered.map(({ id, name }) => (
        <ChakraCheckbox
          key={`check-${id}`}
          onChange={handleState}
          value={id}
          isChecked={selected.includes(id)}
        >
          {name}
        </ChakraCheckbox>
      ))}
    </>
  );
};

export default Checkbox;
