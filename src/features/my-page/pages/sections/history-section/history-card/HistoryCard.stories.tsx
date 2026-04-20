import type { Meta, StoryObj } from "@storybook/react-vite"
import HistoryCard from "./HistoryCard"

const meta: Meta<typeof HistoryCard> = {
  title: "Components/HistoryCard",
  component: HistoryCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
HistoryCard는 추천 히스토리 정보를 카드 형태로 보여주는 컴포넌트입니다.

### 특징
- 이미지가 없을 경우 Empty 컴포넌트를 fallback으로 사용합니다
- 태그 리스트와 날짜 정보를 함께 표시합니다

### 예시
\`\`\`tsx
<HistoryCard
  title="Blossom Dream"
  tags={["체리 블라썸", "머스크", "바닐라"]}
  date="2026.04.06"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HistoryCard>

export const Default: Story = {
  args: {
    imageSrc:
      "https://images.unsplash.com/photo-1591925463023-1ca6b0636780?auto=format&fit=crop&w=200&q=80",
    title: "Blossom Dream",
    badgeText: "챗봇 추천",
    tags: ["체리 블라썸", "머스크", "바닐라"],
    date: "2026.04.06",
  },
}

export const WithoutImage: Story = {
  args: {
    imageSrc: undefined,
    title: "Blossom Dream",
    badgeText: "챗봇 추천",
    tags: ["체리 블라썸", "머스크", "바닐라"],
    date: "2026.04.06",
  },
}
