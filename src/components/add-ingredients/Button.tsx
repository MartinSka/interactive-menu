import React from "react";
import { Button, useDisclosure } from "@chakra-ui/core";
import Modal from "./Modal";

const AddIngredientsButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variantColor="teal" size="sm">
        Add ingredient
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddIngredientsButton;
