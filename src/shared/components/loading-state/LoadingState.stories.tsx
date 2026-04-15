import type { Meta, StoryObj } from "@storybook/react-vite"

import LoadingState from "./LoadingState"

const meta = {
  title: "Components/LoadingState",
  component: LoadingState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoadingState>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomMessage: Story = {
  args: {
    message: "향기 데이터를 정리하고 있어요.",
  },
}

export const Hidden: Story = {
  args: {
    loading: false,
  },
}
