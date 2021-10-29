/*
Some libraries require components higher up in the component hierarchy to render correctly.
For example, in Styled Components, a ThemeProvider is necessary if your components use themes.
Add a single global decorator that adds this context to all stories in .storybook/preview.js:
*/

import { withThemesProvider } from "themeprovider-storybook";

import { lightTheme } from "../src/components/styles/lightTheme";
import { darkTheme } from "../src/components/styles/darkTheme";
import { brightColors } from "../src/components/styles/brightColors";

const THEMES = [lightTheme, darkTheme, brightColors];

export const parameters = {
	actions: { argTypesRegellx: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [withThemesProvider(THEMES, { disableThemePreview: true })];
