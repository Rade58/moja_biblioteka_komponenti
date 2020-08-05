import { blue, neutral, green, red, yellow } from "./colors";

import { primaryFont, primaryFontFace } from "./typography";

export const defaultTheme = {
  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryColorActive: blue[100],
  textColorPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  // EVO STA SAM DODAO
  formelementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  //
  primaryFont,
  primaryFontFace,
  disabledColor: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  primaryColor: neutral[100],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[100],
  textColorPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],
  // DODAO I ZA DARK THEME-U
  formelementBackground: blue[100],
  textOnFormElementBackground: neutral[100],
  //
  primaryFont,
  primaryFontFace,
  disabledColor: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
