import { Color, darkScrollbar } from "@mui/material";

import { ThemeOptions } from "@mui/material/styles";
import primarySecondaryGroup, { ColorKey, ColorSchemeKey } from "./colorGroup";
import { green, grey, red } from "@mui/material/colors";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    txt12: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    txt12?: React.CSSProperties;
  }

  interface PaletteColor {
    25?: string;
    50?: string;
    200?: string;
    400?: string;
    500?: string;
    600?: string;
  }

  interface SimplePaletteColorOptions {
    25?: string;
    50?: string;
    200?: string;
    400?: string;
    500?: string;
    600?: string;
  }
  interface PaletteOptions {
    scheme: ColorSchemeKey;
  }

  interface Palette {
    scheme: ColorSchemeKey;
  }

  interface TypeText {
    25?: string;
    50?: string;
    200?: string;
    500?: string;
    400?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    w9: string;
  }
}

const inter = `"Sora", sans-serif`;
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    txt12: true;
  }
}

type mode = "light" | "dark";

function getIconColors(color: Color, mode: mode) {
  const dark = mode === "dark";
  return {
    // backgroundColor: dark ? color[900] : color[50],
    color: dark ? color[100] : color[700],
    // border: `1px solid ${color[200]}`,
    // "&:hover": {
    //   backgroundColor: dark ? color[600] : color[100],
    // },
  };
}
const getTheme = (mode: mode, colorScheme: ColorSchemeKey): ThemeOptions => {
  const primary = primarySecondaryGroup[colorScheme][0];
  const secondary = primarySecondaryGroup[colorScheme][1];
  return {
    typography: {
      fontSize: 16,
      htmlFontSize: 10,
      fontFamily: inter,
      txt12: {
        fontSize: 12,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...darkScrollbar(
              mode === "light"
                ? {
                    track: "#fff",
                    thumb: grey[400],
                    active: grey[400],
                  }
                : undefined
            ),
            //scrollbarWidth for Firefox
            scrollbarWidth: "thin",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          fontSizeSmall: {
            height: 20,
            width: 20,
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontWeight: 500,
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: getIconColors(primary as Color, mode),
          colorError: getIconColors(red, mode),
          colorSuccess: getIconColors(green, mode),
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor:
                mode === "dark"
                  ? primary[700 as unknown as keyof ColorKey]
                  : primary[200 as unknown as keyof ColorKey],
              "&:hover": {
                backgroundColor:
                  mode === "dark"
                    ? primary[500 as unknown as keyof ColorKey]
                    : primary[100 as unknown as keyof ColorKey],
              },
            },
          },
        },
      },
    },
    palette: {
      mode: mode,
      scheme: colorScheme,
      primary: { ...primary, contrastText: "#fff" } as unknown as Color,
      secondary: secondary as Color,

      background: {
        default:
          mode === "light"
            ? (primary[50 as unknown as keyof ColorKey] as unknown as string)
            : grey[900],
        paper: mode === "light" ? "#fff" : grey[800],
      },
    },
    shape: {
      borderRadius: 4,
    },
  };
};

export default getTheme;
