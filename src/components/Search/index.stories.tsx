import { StoryObj } from "@storybook/react";
import { SearchBox } from ".";

const meta = {
  title: "molecules/SearchBox",
  component: SearchBox,
};

export default meta;

type Story = StoryObj<typeof SearchBox>;

export const SearchBoxWithRegister: Story = {
  args: {
    placeholder: "Search",
    labelText: "Search",
    register: undefined,
    registerValue: "search",
  },
  render: ({ placeholder, labelText, register, registerValue }) => (
    <SearchBox
      placeholder={placeholder}
      labelText={labelText}
      register={register}
      registerValue={registerValue}
    />
  ),
};
