import React from "react";
import { ColorSchemeKey } from "../utils/colorGroup";

const ColorSchemeContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleColorScheme: (_: ColorSchemeKey) => {},
});

export default ColorSchemeContext;
