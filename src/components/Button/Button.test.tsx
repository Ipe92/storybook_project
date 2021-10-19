// https://storybook.js.org/docs/react/workflows/unit-testing
// Unit tests for the display component are pretty easy.
// We really only need to test that the button gets rendered at all
// (we don’t care about what the label says — it may say different things in different languages, depending on user locale settings).

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Red, Green, Small, Large, LongLabel } from "../../stories/Button.stories";

beforeEach(() => {});

describe("red button", () => {
	it("renders the button in the primary state", () => {
		render(<Red {...Red.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});

	it("should have red background", () => {
		render(<Red {...Red.args} />);
		expect(screen.getByRole("button")).toHaveStyle({
			backgroundColor: "red",
		});
	});
});

describe("green button", () => {
	it("renders the button in the primary state", () => {
		render(<Green {...Green.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});

	it("should have green background", () => {
		render(<Green {...Green.args} />);
		expect(screen.getByRole("button")).toHaveStyle({
			backgroundColor: "green",
		});
	});
});

describe("Small button", () => {
	it("renders the button in the primary state", () => {
		render(<Small {...Small.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});
});

describe("Large button", () => {
	it("renders the button in the primary state", () => {
		render(<Large {...Large.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});
});

describe("Long label button", () => {
	it("renders the button in the primary state", () => {
		render(<LongLabel {...LongLabel.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});
});
