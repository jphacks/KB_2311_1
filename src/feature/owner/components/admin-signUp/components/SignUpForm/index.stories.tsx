import { StoryObj } from "@storybook/react";
import { SignUpForm } from ".";

const meta = {
  title: "feature/owner/components/SignUpForm",
  component: SignUpForm,
};

export default meta;

type Story = StoryObj<typeof SignUpForm>;

export const Form: Story = {
  render: () => <SignUpForm />,
};
