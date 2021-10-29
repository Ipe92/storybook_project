import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Container.stories";

const { ContainerStory } = composeStories(stories);

it("renders the Container", () => {
	render(<ContainerStory />);
	expect(screen.getByTestId("date-circle")).not.toBeNull();
});
