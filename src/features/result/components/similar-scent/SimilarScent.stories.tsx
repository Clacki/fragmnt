import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  default as ScentSummaryCard,
  default as SimilarScent,
} from "./SimilarScent"

const meta = {
  title: "Components/SimilarScent",
  component: SimilarScent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1693011409966-54eff3ee686a?auto=format&fit=crop&w=200&q=80",
    imageAlt: "향수 이미지",
    label: "WOODY WARM",
    title: "Soft Cedar",
    description: "새벽 숲의 서늘한 공기를 담은 정갈한 우드 향",
  },
} satisfies Meta<typeof ScentSummaryCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutImage: Story = {
  args: {
    imageSrc: undefined,
  },
}
