import type { Meta, StoryObj } from "@storybook/react-vite"

import NoteSectionCard from "./NoteSectionCard"

const meta: Meta<typeof NoteSectionCard> = {
  title: "components/NoteSectionCard",
  component: NoteSectionCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof NoteSectionCard>

const defaultArgs = {
  labelEn: "TOP NOTES",
  labelKo: "탑 노트",
  description: "첫 인상을 결정하는 가벼운 향기",
  tags: ["베르가못", "핑크 페퍼", "유칼립투스"],
}

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export const LongDescription: Story = {
  args: {
    ...defaultArgs,
    size: "sm",
    description:
      "처음엔 가볍고 산뜻하게 시작되지만 시간이 지날수록 점점 더 풍부하고 섬세한 향의 층이 드러나는 매력적인 노트입니다.",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
}

export const SeparatedCards: Story = {
  render: () => (
    <div className="flex flex-col gap-sm" style={{ width: 520 }}>
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg border border-border bg-white p-lg">
          <NoteSectionCard {...defaultArgs} size="md" />
        </div>
      ))}
    </div>
  ),
}

export const GroupedCard: Story = {
  render: () => (
    <div className="rounded-lg bg-background p-lg w-full">
      <p className="text-sm font-semibold text-text-primary">
        NOTE COMPOSITION
      </p>

      <div className="mt-sm flex flex-col gap-sm">
        <NoteSectionCard {...defaultArgs} size="sm" />
        <NoteSectionCard {...defaultArgs} size="sm" />
        <NoteSectionCard {...defaultArgs} size="sm" />
      </div>
    </div>
  ),
}
