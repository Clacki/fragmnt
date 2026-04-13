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
    size: {
      control: "select",
      options: ["sm", "lg"],
      description: "Button size",
    },
    shape: {
      control: "select",
      options: ["rectangle", "pill"],
      description: "Button shape",
    },
    isContained: {
      control: "boolean",
      description: "Whether button is contained style",
    },
    disabled: {
      control: "boolean",
      description: "Whether button is disabled",
    },
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

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
}

export const Pill: Story = {
  args: {
    shape: "pill",
    children: "Pill Button",
  },
}

export const Outlined: Story = {
  args: {
    isContained: false,
    children: "Outlined Button",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
}

export const WithLongText: Story = {
  args: {
    children: "This is a button with longer text",
  },
}
