import { StoryObj } from "@storybook/react";
import { OwnerSignIn } from ".";

const meta = {
  title: "feature/owner/page/SignIn",
  component: OwnerSignIn,
};

export default meta;

type Story = StoryObj<typeof OwnerSignIn>;

export const Form: Story = {
  render: () => <OwnerSignIn />,
};
