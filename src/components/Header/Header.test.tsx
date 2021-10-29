import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Header.stories";

const { HeaderStory } = composeStories(stories);

it("renders the Header", () => {
	render(<HeaderStory />);
	expect(screen.getByText(/Header/i)).not.toBeNull();
});
