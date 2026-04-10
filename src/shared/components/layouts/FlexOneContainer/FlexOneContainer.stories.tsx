import type { Meta, StoryObj } from "@storybook/react-vite"
import FlexOneContainer from "./FlexOneContainer"

const meta = {
  title: "Shared/Layouts/FlexOneContainer",
  component: FlexOneContainer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isYScrollable: {
      control: "boolean",
      description: "Enable vertical scrolling",
    },
    isXScrollable: {
      control: "boolean",
      description: "Enable horizontal scrolling",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen flex-col">
        <header className="flex h-16 shrink-0 items-center justify-center bg-primary text-text-button">
          Fixed Header
        </header>
        <Story />
        <footer className="flex h-12 shrink-0 items-center justify-center bg-surface-container text-text-footer">
          Fixed Footer
        </footer>
      </div>
    ),
  ],
} satisfies Meta<typeof FlexOneContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isYScrollable: false,
    isXScrollable: false,
    children: (
      <div className="flex h-full items-center justify-center bg-surface-default">
        <div className="rounded-lg bg-primary/20 p-xl text-center">
          FlexOneContainer fills remaining space
        </div>
      </div>
    ),
  },
}

export const YScrollable: Story = {
  args: {
    isYScrollable: true,
    isXScrollable: false,
    children: (
      <div className="bg-surface-default p-lg">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="mb-md rounded-md bg-primary/20 p-lg text-center"
          >
            Scrollable Item {i + 1}
          </div>
        ))}
      </div>
    ),
  },
}

export const XScrollable: Story = {
  args: {
    isYScrollable: false,
    isXScrollable: true,
    children: (
      <div className="flex gap-md bg-surface-default p-lg">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="shrink-0 rounded-md bg-primary/20 p-lg text-center"
            style={{ width: "200px" }}
          >
            Scrollable Item {i + 1}
          </div>
        ))}
      </div>
    ),
  },
}

export const BothScrollable: Story = {
  args: {
    isYScrollable: true,
    isXScrollable: true,
    children: (
      <div className="bg-surface-default p-lg" style={{ width: "2000px" }}>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="mb-md rounded-md bg-primary/20 p-lg text-center"
          >
            Scrollable Item {i + 1} - Wide content that may require horizontal
            scrolling
          </div>
        ))}
      </div>
    ),
  },
}
