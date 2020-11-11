import React from "react";
import { Button, useDisclosure } from "@chakra-ui/core";
import CreateDish from "./Create";

const CreateButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variantColor="teal" size="sm" mr="2" onClick={onOpen}>
        Create dish
      </Button>
      {isOpen && <CreateDish isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default CreateButton;
