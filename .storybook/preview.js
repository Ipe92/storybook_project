/*
Some libraries require components higher up in the component hierarchy to render correctly.
For example, in Styled Components, a ThemeProvider is necessary if your components use themes.
Add a single global decorator that adds this context to all stories in .storybook/preview.js:
*/
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";

import { theme } from "../src/components/Button/Button";

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [theme]));
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
