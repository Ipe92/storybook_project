// https://storybook.js.org/docs/react/workflows/unit-testing
// Unit tests for the display component are pretty easy.
// We really only need to test that the button gets rendered at all
// (we don’t care about what the label says — it may say different things in different languages, depending on user locale settings).

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";

import { composeStories } from "@storybook/testing-react";
import * as ButtonStories from "./Button.stories";
import { lightTheme } from "../styles/lightTheme";

const { Small, Large, LongLabel } = composeStories(ButtonStories);

describe("Testing storybook buttons", () => {
	it("renders the small button", () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Small />
			</ThemeProvider>,
		);
		expect(screen.getByText(/Press Me/i)).not.toBeNull();
	});

	it("renders the large button", () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Large />
			</ThemeProvider>,
		);
		expect(screen.getByText(/Press Me/i)).not.toBeNull();
	});

	it("renders the long label button", () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<LongLabel />
			</ThemeProvider>,
		);
		expect(screen.getByText(/Press Me/i)).not.toBeNull();
	});
});
