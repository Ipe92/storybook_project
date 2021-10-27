/*
Some libraries require components higher up in the component hierarchy to render correctly.
For example, in Styled Components, a ThemeProvider is necessary if your components use themes.
Add a single global decorator that adds this context to all stories in .storybook/preview.js:
*/
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { withThemes } from "@react-theming/storybook-addon";

import { lightTheme } from "../src/components/styles/lightTheme";
import { darkTheme } from "../src/components/styles/darkTheme";
import { brightColors } from "../src/components/styles/brightColors";

const themes = [lightTheme, darkTheme, brightColors];
addDecorator(withThemes(ThemeProvider, themes));

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
