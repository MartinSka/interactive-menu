import React, { ChangeEvent, FC, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
  ModalFooter,
  Stack,
} from "@chakra-ui/core";
import { uniqueId } from "lodash";
import { useDishes } from "../../context/dishes";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddIngredientsModal: FC<Props> = ({ isOpen, onClose }) => {
  const { setRaw, setProcessed, setCooked } = useDishes();

  const [raw, setCustomRaw] = useState("");
  const [processed, setCustomProcessed] = useState("");
  const [cooked, setCustomCooked] = useState("");

  const handleCustomRaw = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCustomRaw(target.value);
  };
  const handleCustomProcessed = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCustomProcessed(target.value);
  };
  const handleCustomCooked = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCustomCooked(target.value);
  };

  const resetValues = () => {
    setCustomCooked("");
    setCustomProcessed("");
    setCustomRaw("");
  };

  const handleAddCustom = () => {
    const newRaw = {
      name: raw,
      id: uniqueId("raw_"),
    };
    const newProcessed = {
      name: processed,
      id: uniqueId("processed_"),
      prev: [newRaw.id],
    };
    const newCooked = {
      name: cooked,
      id: uniqueId("cooked_"),
      prev: [newProcessed.id],
    };

    if (raw) {
      setRaw((old) => [...old, newRaw]);
    }

    if (processed) {
      setProcessed((old) => [...old, newProcessed]);
    }

    if (cooked) {
      setCooked((old) => [...old, newCooked]);
    }

    resetValues();
    onClose();
  };

  const handleClose = () => {
    resetValues();
    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Create a new dish</ModalHeader>

        <ModalCloseButton onClick={handleClose} />

        <ModalBody>
          <Stack spacing="4">
            <Input
              value={raw}
              placeholder="Add a raw ingredient"
              onChange={handleCustomRaw}
            />
            <Input
              value={processed}
              isDisabled={!raw.length}
              placeholder="Add a processed ingredient"
              onChange={handleCustomProcessed}
            />
            <Input
              value={cooked}
              isDisabled={!processed.length}
              placeholder="Add a cooked ingredient"
              onChange={handleCustomCooked}
            />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={handleClose} variant="ghost">
            Cancel
          </Button>

          <Button
            variantColor="teal"
            isDisabled={!raw.length}
            onClick={handleAddCustom}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddIngredientsModal;
