import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./DateCircle.stories";

const { DateCircleStory } = composeStories(stories);

it("renders the dataCircle", () => {
	render(<DateCircleStory />);
	expect(screen.getByTestId("date-circle")).not.toBeNull();
});
