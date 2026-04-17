import type { Meta, StoryObj } from "@storybook/react-vite"
import { ChevronRight } from "lucide-react"
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
    radius: {
      control: "select",
      options: ["md", "full"],
      description: "Button radius",
    },
    style: {
      control: "select",
      options: ["contained", "outlined", "ghost"],
      description: "Button style",
    },
    padding: {
      control: "select",
      options: ["wide", "same"],
      description: "Button padding",
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

export const IconPill: Story = {
  args: {
    radius: "full",
    children: <ChevronRight />,
  },
}

export const IconCircle: Story = {
  args: {
    radius: "full",
    padding: "same",
    children: <ChevronRight />,
  },
}
