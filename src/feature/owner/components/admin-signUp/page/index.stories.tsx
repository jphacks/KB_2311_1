import { StoryObj } from "@storybook/react";
import { OwnerSignUp } from ".";

const meta = {
  title: "feature/owner/page/SignUp",
  component: OwnerSignUp,
};

export default meta;

type Story = StoryObj<typeof OwnerSignUp>;

export const Form: Story = {
  render: () => <OwnerSignUp />,
};
