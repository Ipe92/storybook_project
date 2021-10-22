/*
Some libraries require components higher up in the component hierarchy to render correctly.
For example, in Styled Components, a ThemeProvider is necessary if your components use themes.
Add a single global decorator that adds this context to all stories in .storybook/preview.js:
*/
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "../src/components/styles/lightTheme";
import { darkTheme } from "../src/components/styles/darkTheme";

const themes = [lightTheme, darkTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const decorators = [
	(Story) => (
		<ThemeProvider theme={lightTheme}>
			<Story />
		</ThemeProvider>
	),
];

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
