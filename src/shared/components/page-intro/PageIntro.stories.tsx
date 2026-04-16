import type { Meta, StoryObj } from "@storybook/react-vite"

import { BackButton } from "@/shared/components"
import PageIntro from "./PageIntro"

const meta = {
  title: "Components/PageIntro",
  component: PageIntro,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    backButton: {
      control: false,
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof PageIntro>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "어떤 방식으로 향기를 찾을까요?",
    description:
      "당신의 공간과 취향, 그 정교한 조각(Fragment)들을 분석해 드립니다.",
  },
}

export const WithBackButton: Story = {
  args: {
    title: "사진으로 찾기",
    description:
      "좋아하는 공간의 사진을 올려주세요.\nAI가 분위기를 분석해 어울리는 향을 추천해드릴게요.",
    backButton: <BackButton />,
  },
}

export const TitleOnly: Story = {
  args: {
    title: "키워드로 찾기",
  },
}
