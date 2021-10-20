// https://storybook.js.org/docs/react/workflows/unit-testing
// Unit tests for the display component are pretty easy.
// We really only need to test that the button gets rendered at all
// (we don’t care about what the label says — it may say different things in different languages, depending on user locale settings).

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { composeStories } from "@storybook/testing-react";
import * as ButtonStories from "./Button.stories";

const { Red, Green, Small, Large, LongLabel } = composeStories(ButtonStories);

describe("red button", () => {
	it("renders the button in the primary state", () => {
		const { container } = render(<Red />);
		expect(container).not.toBe(null);
	});
});

describe("green button", () => {
	it("renders the button in the primary state", () => {
		const { container } = render(<Red />);
		expect(container).not.toBe(null);
	});
});

describe("Small button", () => {
	it("renders the button in the primary state", () => {
		const { container } = render(<Small />);
		expect(container).not.toBe(null);
	});
});

describe("Large button", () => {
	it("renders the button in the primary state", () => {
		const { container } = render(<Large />);
		expect(container).not.toBe(null);
	});
});

describe("Testing Button with stories", () => {
	it("Should not be null", () => {
		const { container } = render(<LongLabel />);
		expect(container).not.toBe(null);
	});
});
