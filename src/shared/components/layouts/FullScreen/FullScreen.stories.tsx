import type { Meta, StoryObj } from "@storybook/react-vite"
import FullScreen from "./FullScreen"

const meta = {
  title: "Shared/Layouts/FullScreen",
  component: FullScreen,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FullScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-1 items-center justify-center bg-surface-default">
        <div className="rounded-lg bg-primary/20 p-xl text-center">
          FullScreen Content - Takes up the entire viewport
        </div>
      </div>
    ),
  },
}

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <header className="flex h-16 items-center justify-center bg-primary text-text-button">
          Header
        </header>
        <main className="flex flex-1 items-center justify-center bg-surface-default">
          <div className="rounded-lg bg-primary/20 p-xl text-center">
            Main Content Area
          </div>
        </main>
      </>
    ),
  },
}

export const WithHeaderAndFooter: Story = {
  args: {
    children: (
      <>
        <header className="flex h-16 items-center justify-center bg-primary text-text-button">
          Header
        </header>
        <main className="flex flex-1 items-center justify-center bg-surface-default">
          <div className="rounded-lg bg-primary/20 p-xl text-center">
            Main Content Area
          </div>
        </main>
        <footer className="flex h-12 items-center justify-center bg-surface-container text-text-footer">
          Footer
        </footer>
      </>
    ),
  },
}
