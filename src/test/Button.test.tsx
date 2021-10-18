// https://storybook.js.org/docs/react/workflows/unit-testing

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Red, Green, Small, Large, LongLabel } from "../stories/Button.stories";

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

// can't find right matcher to test size: "sm";

describe("Small button", () => {
	it("renders the button in the primary state", () => {
		render(<Small {...Small.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});

	it("should be small", () => {
		render(<Small {...Small.args} />);
		expect(screen.getByRole("button")).toHaveValue(size, "sm");
	});
});

describe("Large button", () => {
	it("renders the button in the primary state", () => {
		render(<Large {...Large.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});

	it("should be large", () => {
		render(<Large {...Large.args} />);
		expect(screen.getByRole("button")).toHaveStyle({
			size: "lg",
		});
	});
});

// Figure out how to test label length
/*

.toHaveLength(number)#
Use .toHaveLength to check that an object has a .length property and it is set to a certain numeric value.

This is especially useful for checking arrays or strings size.
expect(model.description().length).toBe(1000)
*/
describe("Long label button", () => {
	it("renders the button in the primary state", () => {
		render(<LongLabel {...LongLabel.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});

	it("should have long label", () => {
		render(<LongLabel {...LongLabel.args} />);
		expect(screen.getByRole("button")).toHaveTextContent("Press Me");
	});
});
