import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { composeStories } from "@storybook/testing-react";
import * as DataCircleStories from "./DateCircle.stories";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/lightTheme";

const { DateCircleStory } = composeStories(DataCircleStories);

describe("Testing storybook dataCircle", () => {
	it("renders the dataCircle", () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<DateCircleStory />
			</ThemeProvider>,
		);
		expect(screen.getByTestId("date-circle")).not.toBeNull();
	});
});
