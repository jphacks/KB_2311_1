import { StoryObj } from "@storybook/react";
import { Heading } from ".";

const meta = {
  title: "atoms/Heading/user",
  component: Heading,
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const PlainHeading: Story = {
  render: () => <Heading />,
};
