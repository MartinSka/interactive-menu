import { Icon } from "@chakra-ui/core";
import React, { FC, Fragment, memo, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { Dish } from "../../model/Dish";
import HighlightTag from "./HighlightTag";

type Props = {
  search: string;
  prev?: Dish[];
  ingredients?: Dish[];
  setIsOpen: (isOpen: boolean) => void;
};

const Ingredients: FC<Props> = memo(
  ({ setIsOpen, search, prev, ingredients }) => {
    const name = ingredients?.map(({ name }) => name).join(" & ") || "";

    useEffect(() => {
      if (!search) {
        setIsOpen(false);
      }
    }, [search, setIsOpen]);

    return (
      <>
        <Highlighter
          autoEscape={true}
          searchWords={[search]}
          textToHighlight={name}
          highlightTag={(props) => (
            <HighlightTag setIsOpen={setIsOpen} {...props} />
          )}
        />

        {prev?.map((props) => (
          <Fragment key={props.id}>
            <Icon color="gray.300" name="chevron-right" />
            <Ingredients {...props} search={search} setIsOpen={setIsOpen} />
          </Fragment>
        ))}
      </>
    );
  }
);

export default Ingredients;
