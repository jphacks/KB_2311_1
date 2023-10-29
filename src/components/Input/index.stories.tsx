import { PlainInput } from ".";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PlainInput> = {
  title: "molecules/Input",
  component: PlainInput,
};
export default meta;

type Story = StoryObj<typeof PlainInput>;

//typeがtextの時
export const TypeTextInput: Story = {
  render: () => (
    <PlainInput label="名前" registerValue="name" inputType="text" />
  ),
};
// バリデーション時のコンポーネント表示
export const InputWithError: Story = {
  render: () => (
    <PlainInput
      label="名前"
      registerValue="name"
      inputType="text"
      error="必須項目です。"
    />
  ),
};

//typeがpasswordの時
export const TypePasswordInput: Story = {
  render: () => (
    <PlainInput
      label="パスワード"
      registerValue="password"
      inputType="password"
    />
  ),
};
