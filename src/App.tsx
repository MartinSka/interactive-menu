import React from "react";
import { CSSReset, ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import Main from "./components/Main";
import { DishesProvider } from "./context/dishes";

function App() {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <DishesProvider>
          <Main />
        </DishesProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
