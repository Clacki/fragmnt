import type { Meta, StoryObj } from "@storybook/react-vite"

import Toast from "./Toast"

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error"],
    },
    message: {
      control: "text",
    },
  },
} satisfies Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    variant: "success",
    message: "전송 완료! 이메일을 확인해주세요.",
  },
}

export const Error: Story = {
  args: {
    variant: "error",
    message: "요청에 실패했어요. 다시 시도해주세요.",
  },
}
