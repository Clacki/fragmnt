import type { Meta, StoryObj } from "@storybook/react-vite"

import PlaceCard from "./PlaceCard"

const meta: Meta<typeof PlaceCard> = {
  title: "components/PlaceCard",
  component: PlaceCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof PlaceCard>

const defaultArgs = {
  imageSrc:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "따뜻한 분위기의 거실",
  title: "Living Room",
  description: "가족과 함께하는 따뜻한 시간",
  matchRate: 95,
}

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 380 }}>
        <Story />
      </div>
    ),
  ],
}

export const Grid: Story = {
  args: {
    ...defaultArgs,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          width: 800,
        }}
      >
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
}
