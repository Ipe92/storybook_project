import { Meta, Story } from "@storybook/react";
import { DateCircleProps } from "./DateCircle";
import { DateCircle } from "./DateCircle";

export default {
	title: "Components/DateCircle",
	component: DateCircle,
	argTypes: {
		date: { control: "date" },
	},
} as Meta;

// //👇 We create a “template” of how args map to rendering
const Template: Story<DateCircleProps> = (args) => {
	const date = new Date(args.date);
	return <DateCircle date={date} />;
};

export const FirstStory = Template.bind({});
FirstStory.args = {
	date: new Date("December 17, 1995 03:24:00"),
};
