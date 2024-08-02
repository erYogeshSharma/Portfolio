import React from "react";
import "./App.css";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import getTheme from "./utils/theme";
import ColorModeContext from "./contexts/themeContext";
import AppRouter from "./Routes";
import { ColorSchemeKey } from "./utils/colorGroup";
import ColorSchemeContext from "./contexts/colorSchemeContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const localMode = localStorage.getItem("mode") as "light" | "dark";
  const localScheme = localStorage.getItem("colorScheme") as ColorSchemeKey;

  const [mode, setMode] = React.useState<"light" | "dark">(
    localMode || "light"
  );
  const [colorScheme, setColorScheme] = React.useState<ColorSchemeKey>(
    localScheme || "DeepOrangeYellow"
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        localStorage.setItem("mode", mode === "light" ? "dark" : "light");
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const colorGroup = React.useMemo(
    () => ({
      toggleColorScheme: (scheme: ColorSchemeKey) => {
        localStorage.setItem("colorScheme", scheme);
        setColorScheme(scheme);
      },
    }),
    []
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(getTheme(mode, colorScheme))),
    [mode, colorScheme]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ColorSchemeContext.Provider value={colorGroup}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Analytics />
          <AppRouter />
        </ThemeProvider>
      </ColorSchemeContext.Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
