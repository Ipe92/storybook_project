// Typescript needs these to work
import { Meta, Story } from "@storybook/react";

import { ButtonProps, Button } from "../components/Button/Button";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: { handleClick: { action: "handleClick" } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
	backgroundColor: "red",
	label: "Press Me",
	size: "md",
};

export const Green = Template.bind({});
Green.args = {
	backgroundColor: "green",
	label: "Press Me",
	size: "md",
};

export const Small = Template.bind({});
Small.args = {
	backgroundColor: "blue",
	label: "Press Me",
	size: "sm",
};

export const Large = Template.bind({});
Large.args = {
	backgroundColor: "blue",
	label: "Press Me",
	size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
	backgroundColor: "blue",
	label: "Press MePress MPress MPress MPress MPress MPress MPress MPress M",
	size: "md",
};
