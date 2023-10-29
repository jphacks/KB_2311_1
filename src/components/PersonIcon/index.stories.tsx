import { StoryObj } from "@storybook/react";
import { PersonIcon } from ".";

const meta = {
  title: "atoms/PersonIcon",
  component: PersonIcon,
};
export default meta;

type Story = StoryObj<typeof PersonIcon>;

//写真なしの状態を表示
export const IconWIthNoImage: Story = {
  render: () => <PersonIcon />,
};
