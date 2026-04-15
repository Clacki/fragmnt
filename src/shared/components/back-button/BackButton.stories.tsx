import type { Meta, StoryObj } from "@storybook/react-vite"

import BackButton from "./BackButton"

const meta = {
  title: "Components/BackButton",
  component: BackButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {},
  },
} satisfies Meta<typeof BackButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
