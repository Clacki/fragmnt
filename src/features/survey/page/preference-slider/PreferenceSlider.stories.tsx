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
    order: {
      control: {
        type: "number",
        min: 1,
      },
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
    order: 1,
    item: {
      title: "아침에 선호하는 향",
      additional: "하루를 시작할 때 어떤 느낌의 향을 원하시나요?",
      left_label: "상쾌한",
      right_label: "포근한",
      answer: [
        {
          content: "매우 상쾌함",
        },
        {
          content: "약간 상쾌함",
        },
        {
          content: "보통",
        },
        {
          content: "약간 포근함",
        },
        {
          content: "매우 포근함",
        },
      ],
    },
    value: 2,
    onChange: () => {},
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
