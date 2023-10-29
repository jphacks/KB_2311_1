import { StoryObj } from "@storybook/react";
import { UserHeader } from ".";

const meta = {
  title: "atoms/Heading",
  component: UserHeader,
};

export default meta;

type Story = StoryObj<typeof UserHeader>;

export const Header: Story = {
  render: () => <UserHeader />,
};
