// https://storybook.js.org/docs/react/workflows/unit-testing
// Unit tests for the display component are pretty easy.
// We really only need to test that the button gets rendered at all
// (we don’t care about what the label says — it may say different things in different languages, depending on user locale settings).

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { composeStories } from "@storybook/testing-react";
import * as ButtonStories from "./Button.stories";

const { Small, Large, LongLabel } = composeStories(ButtonStories);

describe("Testing storybook buttons", () => {
	it("renders the small button", () => {
		const { container } = render(<Small />);
		expect(container).not.toBe(null);
	});

	it("renders the large button", () => {
		const { container } = render(<Large />);
		expect(container).not.toBe(null);
	});

	it("renders the long label button", () => {
		const { container } = render(<LongLabel />);
		expect(container).not.toBe(null);
	});
});
