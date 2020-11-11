import React, { ChangeEvent, FC, useCallback, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/core";
import IngredientsList from "./IngredientsList";
import { uniqueId } from "lodash";
import { useDishes } from "../../context/dishes";
import { Dish, DishForm } from "../../model/Dish";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const createNewDish = (name: string, dishes: DishForm[]): Dish => ({
  id: uniqueId(),
  name,
  ingredients: dishes.map(({ cooked, processed, raw }) => ({
    id: uniqueId(),
    ingredients: raw,
    prev: processed?.length
      ? [
          {
            id: uniqueId(),
            ingredients: processed,
            prev: cooked?.length
              ? [
                  {
                    id: uniqueId(),
                    ingredients: cooked,
                  },
                ]
              : undefined,
          },
        ]
      : undefined,
  })) as Dish[],
});

const CreateDish: FC<Props> = ({ isOpen, onClose }) => {
  const { setDishes } = useDishes();
  const [name, setName] = useState("");
  const [partialDishes, setPartialDishes] = useState<DishForm[]>([]);

  const handleCreate = () => {
    const newDish = createNewDish(name, partialDishes);
    setDishes((dishes) => [...dishes, newDish]);
    onClose();
  };

  const isDisable: boolean =
    !name.length ||
    !partialDishes.length ||
    !!partialDishes.reduce(
      (disable, { raw }) => disable || !raw?.length,
      false
    );

  const handleName = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setName(target.value);

  const handleAddIngredient = () => {
    const newDish: DishForm = { id: uniqueId() };
    setPartialDishes((currentDishes) => [...currentDishes, newDish]);
  };

  const handleDishChange = useCallback(
    (dishForm: DishForm, index: number) =>
      setPartialDishes((partial) => [
        ...partial.slice(0, index),
        { ...partial[index], ...dishForm },
        ...partial.slice(index + 1, partial.length),
      ]),
    []
  );

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new dish</ModalHeader>
        <ModalCloseButton onClick={onClose} />

        <ModalBody>
          <Input
            mb="4"
            value={name}
            placeholder="Dish name"
            onChange={handleName}
          />

          {partialDishes.map((props, index) => (
            <IngredientsList
              id={props.id}
              index={index}
              key={`list_${props.id}`}
              onChange={handleDishChange}
            />
          ))}

          <Button mt="2" onClick={handleAddIngredient}>
            Add ingredient
          </Button>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="ghost">
            Cancel
          </Button>

          <Button
            variantColor="teal"
            isDisabled={isDisable}
            onClick={handleCreate}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateDish;
