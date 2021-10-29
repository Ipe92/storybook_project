import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { composeStories, composeStory } from "@storybook/testing-react";

import * as stories from "./DateCircle.stories";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/lightTheme";

const { DateCircleStory } = composeStories(stories);

it("renders the dataCircle", () => {
	render(
		//<ThemeProvider theme={lightTheme}>
		<DateCircleStory />,
		//</ThemeProvider>,
	);
	expect(screen.getByTestId("date-circle")).not.toBeNull();
});
