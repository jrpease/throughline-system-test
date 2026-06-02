import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: { label: "Tooltip text", children: <Button>Hover me</Button>, side: "top" },
  argTypes: {
    side: { control: "select", options: ["top", "bottom"] },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sides: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 48, padding: 48 }}>
      <Tooltip label="Top tooltip" side="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip label="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
    </div>
  ),
};
