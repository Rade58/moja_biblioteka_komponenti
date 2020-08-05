import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
// EVO UVOZIM SLEDECE
import { withA11y } from "@storybook/addon-a11y";
//
import { contexts } from "./context";

addParameters({
  backgrounds: [
    { name: "Default Theme", value: "#ffffff", default: true },
    { name: "Dark Theme", value: "#050449" },
  ],
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);

// DODAJEM DEKORATORA
addDecorator(withA11y);
