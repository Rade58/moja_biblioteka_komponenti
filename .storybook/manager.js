import { addons } from "@storybook/addons";
// import { themes } from "@storybook/theming"; // OVO MI VISE NE TREBA JER MI NETREBAJU PRESET TEME
//  UVOZIM MOJU TEMU
import myTheme from "./mojaTema";

addons.setConfig({
  // theme: themes.dark,
  theme: myTheme,
});
