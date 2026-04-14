import type { Meta, StoryObj } from "@storybook/react-vite"

import ReviewCard from "./ReviewCard"

const meta: Meta<typeof ReviewCard> = {
  title: "components/ReviewCard",
  component: ReviewCard,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof ReviewCard>

export const Default: Story = {
  args: {
    title: "Blossom Dream",
    rating: 4,
    content:
      "처음엔 낯설었지만, 지속력이 좋고 깊어지는 향이 매력적입니다.\n특별한 날에 자주 뿌려요",
    date: "2026. 04. 12",
  },
}
