import { Meta, Story } from "@storybook/react";
import { DateCircleProps } from "./DateCircle";
import { DateCircle } from "./DateCircle";

// export default {
// 	title: "Components/DateCircle",
// 	component: DateCircle,
// 	argTypes: {
// 		date: { control: "date" },
// 	},
// } as Meta;

export default { component: DateCircle };
export const Template = { argTypes: { date: { control: "date" } } };

// const Template: Story<DateCircleProps> = (args) => {
// 	const date = new Date(args.date);
// 	return <DateCircle date={date} />;
// };

// export const DateCircleStory = Template.bind({});
// DateCircleStory.args = {
// 	date: new Date("December 17, 1995 03:24:00"),
// };

export const DateCircleStory = {
	...Template,
	parameters: { date: new Date("December 17, 1995 03:24:00") },
};
