import { StoryObj } from "@storybook/react";
import { SignInSignUpToggle } from ".";

const meta = {
  title: "feature/owner/components/SignInSignUpToggle",
  component: SignInSignUpToggle,
};

export default meta;

type Story = StoryObj<typeof SignInSignUpToggle>;

export const Form: Story = {
  render: () => (
    <SignInSignUpToggle innerText="テスト" path="/" toggleText="ログイン" />
  ),
};
