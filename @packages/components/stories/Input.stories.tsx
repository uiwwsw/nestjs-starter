import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => {
    return <Input label="라벨">내용입력</Input>
  }
};
