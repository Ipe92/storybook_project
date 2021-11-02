import { Meta, Story } from "@storybook/react";
import { Header } from "./Header";
import { HeaderProps } from "./Header";

export default {
	title: "Components/Header",
	component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderStory = Template.bind({});
HeaderStory.args = {
	text: "Story Header",
	fontSize: 26,
	color: "red",
};
