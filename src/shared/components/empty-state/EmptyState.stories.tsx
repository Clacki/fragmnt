import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { Button } from "@/shared/components"
import type { Meta, StoryObj } from "@storybook/react-vite"
import EmptyState from "./EmptyState"

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    imageSrc: {
      control: "text",
    },
    imageAlt: {
      control: "text",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    action: {
      control: false,
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof EmptyState>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imageSrc: EmptyStateImage,
    imageAlt: "비어 있는 향수병 일러스트",
    title: "아직 저장된 향기가 없어요",
    description: "마음에 드는 향기를 저장하고 나만의 아카이브를 채워보세요.",
  },
}

export const WithAction: Story = {
  args: {
    imageSrc: EmptyStateImage,
    imageAlt: "비어 있는 향수병 일러스트",
    title: "아직 추천받은 기록이 없어요",
    description: "취향 테스트를 통해 당신에게 어울리는 향기를 추천받아보세요.",
    action: <Button>향기 추천 받기</Button>,
  },
}
