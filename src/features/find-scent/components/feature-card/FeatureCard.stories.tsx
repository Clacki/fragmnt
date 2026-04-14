import type { Meta, StoryObj } from "@storybook/react-vite"

import FeatureCard from "./FeatureCard"

const meta = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof FeatureCard>

export default meta

type Story = StoryObj<typeof meta>

export const Photo: Story = {
  args: {
    imageSrc: "/src/assets/images/find-scent/photo.jpg",
    imageAlt: "사진 기반 공간 분석 카드 이미지",
    title: "사진 기반 공간 분석",
    description:
      "사진 속 공간의 무드를 포착해\n분위기를 분석한 향기를 제안합니다",
    buttonLabel: "향기 찾기",
  },
}

export const Chat: Story = {
  args: {
    imageSrc: "/src/assets/images/find-scent/chat.jpg",
    imageAlt: "대화 기반 취향 분석 카드 이미지",
    title: "대화 기반 취향 분석",
    description: "당신의 문장 사이에서\n오늘의 향기를 찾습니다",
    buttonLabel: "향기 찾기",
  },
}

export const Keyword: Story = {
  args: {
    imageSrc: "/src/assets/images/find-scent/servey.jpg",
    imageAlt: "키워드 기반 정밀 분석 카드 이미지",
    title: "키워드 기반 정밀 분석",
    description: "선호하는 분위기와 향 키워드를\n조합하여 향기를 찾습니다",
    buttonLabel: "향기 찾기",
  },
}

export const Default: Story = {
  args: {
    imageSrc: "/src/assets/images/find-scent/photo.jpg",
    imageAlt: "사진 기반 공간 분석 카드 이미지",
    title: "사진 기반 공간 분석",
    description:
      "사진 속 공간의 무드를 포착해\n분위기를 분석한 향기를 제안합니다",
    buttonLabel: "향기 찾기",
  },
}
