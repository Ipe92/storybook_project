// https://storybook.js.org/docs/react/workflows/unit-testing

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Red } from "../stories/Button.stories";

it("renders the button in the primary state", () => {
	render(<Red {...Red.args} />);
	expect(screen.getByRole("button")).toHaveTextContent("Red");
});
