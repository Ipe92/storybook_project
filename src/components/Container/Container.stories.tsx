import { Meta, Story } from "@storybook/react";
import { Container } from "./Container";
import { Header } from "../Header/Header";

export default {
	title: "Components/Container",
	component: Container,
} as Meta;

// interface StoryProps {
// 	args: any,
// }

// const Template: Story = (args) => <Container {...args} />;

// export const ContainerStory = Template.bind({});
// ContainerStory.args = {
// 	<Header/>
// };

export const ManyHeadersInContainer: React.VFC<{}> = (args) => (
	<Container>
		<Header {...args} />
		<Header />
		<Header />
	</Container>
);
