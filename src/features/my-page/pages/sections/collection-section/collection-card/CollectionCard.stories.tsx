import type { Meta, StoryObj } from "@storybook/react-vite"
import CollectionCard from "./CollectionCard"

const meta: Meta<typeof CollectionCard> = {
  title: "Components/CollectionCard",
  component: CollectionCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof CollectionCard>

export const Default: Story = {
  args: {
    imageSrc:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Golden Amber diffuser",
    category: "WOODY WARM",
    title: "Golden Amber",
    tags: ["샌달우드", "베르가못"],
    date: "2026.04.12",
  },
}

export const WithoutImage: Story = {
  args: {
    imageSrc: undefined,
    category: "WOODY WARM",
    title: "Golden Amber",
    tags: ["샌달우드", "베르가못"],
    date: "2026.04.12",
  },
}

export const InGridCell: Story = {
  render: (args) => (
    <div className="w-[315px]">
      <CollectionCard {...args} />
    </div>
  ),
  args: {
    imageSrc:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Golden Amber diffuser",
    category: "WOODY WARM",
    title: "Golden Amber",
    tags: ["샌달우드", "베르가못"],
    date: "2026.04.12",
  },
}
