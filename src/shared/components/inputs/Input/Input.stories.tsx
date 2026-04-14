import type { Meta, StoryObj } from "@storybook/react-vite"
import Input from "./Input"

const ChildDiv = () => {
  return <div className="size-4 bg-amber-300" />
}

const meta = {
  title: "Shared/Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["none", "success", "error"],
      description: "Input status",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    value: {
      control: "text",
      description: "Input value",
    },
    disabled: {
      control: "boolean",
      description: "Whether input is disabled",
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
}

export const WithValue: Story = {
  args: {
    value: "Sample input text",
  },
}

export const Success: Story = {
  args: {
    status: "success",
    value: "Valid input",
  },
}

export const WithError: Story = {
  args: {
    status: "error",
    value: "Invalid input",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled input",
  },
}

export const WithTrailingChild: Story = {
  args: {
    placeholder: "With trailing child...",
    trailingChild: <ChildDiv />,
  },
}
