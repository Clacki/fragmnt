import type { Meta, StoryObj } from "@storybook/react-vite"
import PasswordInput from "./PasswordInput"

const meta = {
  title: "Shared/Inputs/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isError: {
      control: "boolean",
      description: "Whether to show error styling",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Whether input is disabled",
    },
  },
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter password",
    isError: false,
  },
}

export const WithError: Story = {
  args: {
    placeholder: "Enter password",
    isError: true,
    value: "wrongpassword",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Enter password",
    disabled: true,
    isError: false,
  },
}

export const WithValue: Story = {
  args: {
    placeholder: "Enter password",
    value: "secretpassword123",
    isError: false,
  },
}
