import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Button.stories";

const { Small, Large, LongLabel } = composeStories(stories);

test("it renders the small button", () => {
	render(<Small />);
	expect(screen.getByText(/Press Me/i)).not.toBeNull();
});

test("it renders the large button", () => {
	render(<Large />);
	expect(screen.getByText(/Press Me/i)).not.toBeNull();
});

test("it renders the long label button", () => {
	render(<LongLabel />);
	expect(screen.getByText(/Press Me/i)).not.toBeNull();
});
