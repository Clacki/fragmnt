import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import type { TabKey } from "./Tab"
import Tab from "./Tab"

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    activeTab: {
      control: "radio",
      options: ["collection", "history", "review"],
    },
    onChange: { action: "changed" },
  },
}

export default meta

type Story = StoryObj<typeof Tab>

/**
 * 기본 (컨트롤 기반)
 */
export const Default: Story = {
  args: {
    activeTab: "collection",
  },
}

/**
 * 인터랙션 가능한 스토리 (실제 상태 변화)
 */
export const Interactive: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState<TabKey>("collection")

    return (
      <Tab
        {...args}
        activeTab={activeTab}
        onChange={(tab) => {
          setActiveTab(tab)
          args.onChange?.(tab)
        }}
      />
    )
  },
}

/**
 * 각 상태별 스냅샷 확인용
 */
export const CollectionActive: Story = {
  args: {
    activeTab: "collection",
  },
}

export const HistoryActive: Story = {
  args: {
    activeTab: "history",
  },
}

export const ReviewActive: Story = {
  args: {
    activeTab: "review",
  },
}
