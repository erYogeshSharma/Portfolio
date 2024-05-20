import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { Circle } from "@mui/icons-material";
import primarySecondaryGroup, {
  ColorKey,
  ColorSchemeKey,
} from "../../utils/colorGroup";
import React from "react";
import ColorSchemeContext from "../../contexts/colorSchemeContext";

const ThemeColorChange = () => {
  const theme = useTheme();
  const colorScheme = React.useContext(ColorSchemeContext);

  return (
    <Stack spacing={1}>
      {Object.keys(primarySecondaryGroup).map((key) => (
        <Paper key={key}>
          <Stack
            sx={{
              cursor: "pointer",
              "&: hover": {
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                transform: "scale(1.02)",
              },
              transition: "transform 0.3s",
            }}
            onClick={() => colorScheme.toggleColorScheme(key as ColorSchemeKey)}
            p={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <Typography
              flexGrow={1}
              variant="subtitle2"
              color={theme.palette.scheme === key ? "primary" : "text.primary"}
            >
              {key}
            </Typography>

            <Circle
              sx={{
                color:
                  primarySecondaryGroup[key as ColorSchemeKey][0][
                    500 as unknown as keyof ColorKey
                  ],
              }}
            />
            <Circle
              sx={{
                color:
                  primarySecondaryGroup[key as ColorSchemeKey][1][
                    500 as unknown as keyof ColorKey
                  ],
              }}
            />
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

export default ThemeColorChange;
