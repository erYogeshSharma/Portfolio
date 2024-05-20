import {
  amber,
  deepOrange,
  green,
  grey,
  red,
  blue,
  blueGrey,
  brown,
  cyan,
  indigo,
  lightGreen,
  pink,
  lime,
  orange,
  purple,
  deepPurple,
  lightBlue,
  teal,
  yellow,
} from "@mui/material/colors";

const primarySecondaryGroup = {
  DeepOrangeYellow: [deepOrange, yellow],
  BlueLightBlue: [blue, lightBlue],
  RedPink: [red, pink],
  BlueGreyLightGreen: [blueGrey, lightGreen],
  IndigoCyan: [indigo, cyan],
  BrownAmber: [brown, amber],
  OrangeLime: [orange, lime],
  DeepPurplePurple: [deepPurple, purple],
  TealGrey: [teal, grey],
  GreenCommonLightBlue: [green, lightBlue],
};

export type ColorSchemeKey = keyof typeof primarySecondaryGroup;
export default primarySecondaryGroup;
export type ColorKey = keyof typeof amber;
