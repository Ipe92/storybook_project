import { Meta, Story } from "@storybook/react";
import { Div } from "./Div";
//import { Header } from "../Header/Header";

export default {
	title: "Components/Container",
	component: Div,
} as Meta;

const Template: Story = (args) => <Div {...args} />;

export const ContainerStory = Template.bind({});
ContainerStory.args = {};

// export const ManyHeadersInContainer: React.VFC<{}> = (args) => (
// 	<Container>
// 		<Header {...args} />
// 		<Header />
// 		<Header />
// 	</Container>
// );
