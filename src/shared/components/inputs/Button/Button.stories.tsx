import type { Meta, StoryObj } from "@storybook/react-vite"
import Button from "./Button"

const meta = {
  title: "Shared/Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Button content",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const WithLongText: Story = {
  args: {
    children: "This is a button with longer text",
  },
}
