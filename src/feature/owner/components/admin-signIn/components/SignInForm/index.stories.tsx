import { StoryObj } from "@storybook/react";
import { SignInForm } from ".";

const meta = {
  title: "feature/owner/components/SignInForm",
  component: SignInForm,
};

export default meta;

type Story = StoryObj<typeof SignInForm>;

export const Form: Story = {
  render: () => <SignInForm />,
};
