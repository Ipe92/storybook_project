import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Div.stories";

// const { ManyHeadersInContainer } = composeStories(stories);

// it("renders the Container", () => {
// 	render(<ManyHeadersInContainer />);
// 	expect(screen.getByTestId("date-circle")).not.toBeNull();
// });
