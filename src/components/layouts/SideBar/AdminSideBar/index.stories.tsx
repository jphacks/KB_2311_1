import { StoryObj } from "@storybook/react";
import { AdminSidebar } from ".";

const meta = {
  title: "atoms/Heading",
  component: AdminSidebar,
};

export default meta;

type Story = StoryObj<typeof AdminSidebar>;

export const PlainHeading: Story = {
  render: () => <AdminSidebar />,
};
