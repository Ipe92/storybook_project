import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { composeStories } from "@storybook/testing-react";
import * as DataCircleStories from "./DateCircle.stories";

const { FirstStory } = composeStories(DataCircleStories);

describe("Testing storybook dataCircle", () => {
	it("renders the dataCircle", () => {
		const { container } = render(<FirstStory />);
		expect(container).not.toBeNull;
	});
});
