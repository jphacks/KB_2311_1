import { StoryObj } from "@storybook/react";
import { AdminHeading } from ".";

const meta = {
  title: "atoms/Heading/admin",
  component: AdminHeading,
};

export default meta;

type Story = StoryObj<typeof AdminHeading>;

export const PlainHeading: Story = {
  render: () => <AdminHeading />,
};
