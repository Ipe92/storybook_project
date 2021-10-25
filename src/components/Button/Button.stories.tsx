import { Meta, Story } from "@storybook/react";

import { ButtonProps, Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: { handleClick: { action: "handleClick" } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
	label: "Press Me",
	size: 1,
};

export const Large = Template.bind({});
Large.args = {
	label: "Press Me",
	size: 3,
};

export const LongLabel = Template.bind({});
LongLabel.args = {
	label: "Press MePress MPress MPress MPress MPress MPress MPress MPress M",
	size: 2,
};
