import { StoryObj } from "@storybook/react";
import { ErrorText } from ".";

const meta = {
  title: "atoms/ErrorText",
  component: ErrorText,
};

export default meta;

type Story = StoryObj<typeof ErrorText>;

//error表示
export const Error: Story = {
  render: () => <ErrorText errorText="必須項目です。" />,
};
