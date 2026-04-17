import type { Meta, StoryObj } from "@storybook/react-vite"
import { useArgs } from "storybook/preview-api"

import PreferenceSlider from "./PreferenceSlider"

const meta = {
  title: "Components/PreferenceSlider",
  component: PreferenceSlider,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    item: {
      control: "object",
    },
    value: {
      control: {
        type: "range",
        min: 0,
        max: 4,
        step: 1,
      },
    },
    onChange: {
      control: false,
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof PreferenceSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    item: {
      order: 1,
      title: "아침에 선호하는 향",
      description: "하루를 시작할 때 어떤 느낌의 향을 원하시나요?",
      labels: [
        "매우 상쾌함",
        "약간 상쾌함",
        "보통",
        "약간 포근함",
        "매우 포근함",
      ],
      edgeLabels: ["상쾌한", "포근한"],
    },
    value: 2,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs()

    return (
      <PreferenceSlider
        {...args}
        value={value}
        onChange={(nextValue) => {
          updateArgs({ value: nextValue })
        }}
      />
    )
  },
}
