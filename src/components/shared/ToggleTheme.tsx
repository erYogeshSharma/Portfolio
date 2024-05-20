import React from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton, Popover, Stack } from "@mui/material";
import {
  Brightness4,
  Brightness7,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import ColorModeContext from "../../contexts/themeContext";
import ThemeColorChange from "./ThemeColorChange";

const ToggleTheme = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack p={1}>
          <Stack
            p={1}
            sx={{
              background: theme.palette.background.default,
              borderRadius: 1,
            }}
          >
            <Stack
              onClick={colorMode.toggleColorMode}
              sx={{
                position: "relative",
                height: 40,
                background: theme.palette.background.default,

                p: 1,
              }}
            >
              <Stack
                sx={{
                  width: 30,
                  position: "absolute",
                  top: "50%",
                  left: theme.palette.mode === "dark" ? "8%" : "92%",
                  transform: "translate(-50%, -50%)",
                  transition: "0.8s",
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <DarkMode color="primary" />
                ) : (
                  <LightMode color="primary" />
                )}
              </Stack>
            </Stack>
            <ThemeColorChange />
          </Stack>
        </Stack>
      </Popover>
    </div>
  );
};

export default ToggleTheme;
