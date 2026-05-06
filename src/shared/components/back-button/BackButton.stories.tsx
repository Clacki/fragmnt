import type { Meta, StoryObj } from "@storybook/react-vite"

import BackButton from "./BackButton"

const meta = {
  title: "Components/BackButton",
  component: BackButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "radio",
      options: ["history", "fallback"],
    },
    fallbackPath: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    fallbackPath: "/",
    mode: "history",
  },
} satisfies Meta<typeof BackButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FallbackMode: Story = {
  args: {
    fallbackPath: "/find-scent",
    mode: "fallback",
  },
}

export const WithCustomClick: Story = {
  args: {
    onClick: () => {},
  },
}
