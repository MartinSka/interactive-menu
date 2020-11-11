import React, { FC, useEffect, useState } from "react";
import { Stack, Divider } from "@chakra-ui/core";
import Checkbox from "./Checkbox";
import { useDishes } from "../../context/dishes";
import { Ingredient } from "../../model/Ingredient";
import { DishForm } from "../../model/Dish";

type Props = {
  onChange: (dishForm: DishForm, index: number) => void;
  index: number;
  id: string;
};

const filter = (ingredients: Ingredient[], prevIngredient?: Ingredient[]) =>
  ingredients?.filter(
    ({ prev }) =>
      prev?.filter((ingredient) =>
        prevIngredient?.find(({ id }) => id === ingredient)
      ).length === prev?.length
  );

const IngredientsList: FC<Props> = ({ onChange, index, id }) => {
  const { raw, processed, cooked } = useDishes();
  const [dish, set] = useState<DishForm>({ id });

  useEffect(() => {
    onChange(dish, index);
  }, [dish, onChange, index]);

  const onRawChange = (raw: Ingredient[]) => {
    set(({ id }) => ({
      id,
      raw,
    }));
  };

  const onProcessedChange = (processed: Ingredient[]) => {
    set(({ raw, id }) => ({
      id,
      raw,
      processed,
    }));
  };

  const onCookedChange = (cooked: Ingredient[]) => {
    set((dish) => ({
      ...dish,
      cooked,
    }));
  };

  const processedFiltered = filter(processed, dish?.raw);
  const cookedFiltered = filter(cooked, dish?.processed);

  return (
    <>
      <Stack isInline spacing={4}>
        <Stack spacing={1}>
          <Checkbox
            type="raw"
            next={processed}
            ingredients={raw}
            onChange={onRawChange}
          />
        </Stack>
        {!!dish?.raw?.length && (
          <Stack spacing={1}>
            <Checkbox
              type="processed"
              onChange={onProcessedChange}
              ingredients={processedFiltered}
            />
          </Stack>
        )}
        {!!dish?.processed?.length && (
          <Stack spacing={1}>
            <Checkbox
              type="cooked"
              onChange={onCookedChange}
              ingredients={cookedFiltered}
            />
          </Stack>
        )}
      </Stack>
      <Divider />
    </>
  );
};

export default IngredientsList;
