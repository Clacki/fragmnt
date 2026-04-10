import type { Meta, StoryObj } from "@storybook/react-vite"
import CenterContainer from "./CenterContainer"

const meta = {
  title: "Shared/Layouts/CenterContainer",
  component: CenterContainer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-[400px] w-full bg-surface-default">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CenterContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="rounded-lg bg-primary/20 p-xl text-center">
        Centered Content
      </div>
    ),
  },
}

export const WithMultipleItems: Story = {
  args: {
    children: (
      <>
        <div className="mb-md rounded-lg bg-primary/20 p-lg text-center">
          First Item
        </div>
        <div className="mb-md rounded-lg bg-primary/30 p-lg text-center">
          Second Item
        </div>
        <div className="rounded-lg bg-primary/40 p-lg text-center">
          Third Item
        </div>
      </>
    ),
  },
}

export const WithCard: Story = {
  args: {
    children: (
      <div className="w-80 rounded-lg bg-card p-xl shadow-box">
        <h2 className="mb-md text-lg font-bold text-text-primary">
          Centered Card
        </h2>
        <p className="text-text-sub">
          This card is centered both horizontally and vertically within its
          parent container.
        </p>
      </div>
    ),
  },
}

export const LoadingState: Story = {
  args: {
    children: (
      <div className="text-center text-text-sub">
        <div className="mb-md text-2xl">Loading...</div>
        <p>Please wait while content is being loaded.</p>
      </div>
    ),
  },
}
