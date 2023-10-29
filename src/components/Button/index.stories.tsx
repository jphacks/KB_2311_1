import { StoryObj } from "@storybook/react";
import { PlainButton } from ".";

const meta = {
  title: "atoms/Button",
  component: PlainButton,
};

export default meta;

type Story = StoryObj<typeof PlainButton>;

export const TypeButton: Story = {
  render: () => <PlainButton type="button" innerText="戻る" />,
};

export const TypeSubmit: Story = {
  render: () => <PlainButton type="submit" innerText="送信する" />,
};

export const ButtonWithDisabled: Story = {
  render: () => (
    <PlainButton type="submit" innerText="送信する" disabled={true} />
  ),
};
