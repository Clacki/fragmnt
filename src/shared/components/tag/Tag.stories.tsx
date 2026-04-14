import type { Meta, StoryObj } from "@storybook/react-vite"
import Tag from "./Tag"

const meta = {
  title: "common/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    size: {
      control: "radio",
      options: ["sm", "md"],
    },
    variant: {
      control: "radio",
      options: ["outlined", "selected", "soft", "subtle"],
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "산뜻한",
    size: "sm",
    variant: "outlined",
  },
}

export const Selected: Story = {
  args: {
    label: "생기 있는",
    size: "sm",
    variant: "selected",
  },
}

export const Soft: Story = {
  args: {
    label: "따뜻한",
    size: "sm",
    variant: "soft",
  },
}

export const Subtle: Story = {
  args: {
    label: "베르가못",
    size: "sm",
    variant: "subtle",
  },
}
