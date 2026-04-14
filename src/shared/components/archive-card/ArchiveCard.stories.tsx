import type { Meta, StoryObj } from "@storybook/react-vite"

import ArchiveCard from "./ArchiveCard"

const meta = {
  title: "Components/Card/ArchiveCard",
  component: ArchiveCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-60 box-sizing: border-box">
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
    tags: {
      control: "object",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
} satisfies Meta<typeof ArchiveCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imageSrc:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    imageAlt: "우디한 무드의 향기 이미지",
    tags: ["Woody", "Warm", "Calm"],
    title: "Serene Woods",
    description:
      "깊은 숲속의 잔잔한 공기처럼 차분하고 포근한 분위기를 전하는 향기입니다.",
  },
}

export const LongText: Story = {
  args: {
    imageSrc:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80",
    imageAlt: "플로럴 향기 이미지",
    tags: ["Floral", "Soft", "Elegant", "Daily"],
    title: "Blossom Dream With Long Title",
    description:
      "은은하게 퍼지는 꽃향기와 부드러운 머스크가 어우러져 일상 속에서도 부담 없이 사용할 수 있는 섬세한 향기입니다.",
  },
}
