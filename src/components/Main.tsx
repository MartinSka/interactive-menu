import React, { ChangeEvent, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/core";
import { useDebounce } from "../hooks/useDebounce";
import CreateButton from "./create/Button";
import AddButton from "./add-ingredients/Button";
import Dishes from "./dishes/Dishes";

const Main = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 100);

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setSearch(target.value);

  return (
    <Box maxW="xl" mx="auto" px="4" py="8">
      <FormControl>
        <FormLabel htmlFor="search">Search an allergen</FormLabel>
        <Input id="search" type="text" value={search} onChange={handleSearch} />
        <FormHelperText id="email-helper-text">E.g. Pork</FormHelperText>
      </FormControl>

      <Dishes search={debouncedSearch} />

      <Box mt="4" d="flex" justifyContent="flex-end">
        <CreateButton />
        <AddButton></AddButton>
      </Box>
    </Box>
  );
};

export default Main;
