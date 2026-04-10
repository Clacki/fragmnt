import type { Meta, StoryObj } from "@storybook/react-vite"
import Hstack from "./Hstack"

const meta = {
  title: "Shared/Layouts/Hstack",
  component: Hstack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Gap between items",
    },
  },
} satisfies Meta<typeof Hstack>

export default meta
type Story = StoryObj<typeof meta>

const DemoItem = ({ label }: { label: string }) => (
  <div className="rounded-md bg-primary/20 p-md text-center">{label}</div>
)

export const Default: Story = {
  args: {
    gap: "lg",
    children: (
      <>
        <DemoItem label="Item 1" />
        <DemoItem label="Item 2" />
        <DemoItem label="Item 3" />
      </>
    ),
  },
}

export const NoGap: Story = {
  args: {
    gap: "none",
    children: (
      <>
        <DemoItem label="Item 1" />
        <DemoItem label="Item 2" />
        <DemoItem label="Item 3" />
      </>
    ),
  },
}

export const ExtraSmallGap: Story = {
  args: {
    gap: "xs",
    children: (
      <>
        <DemoItem label="Item 1" />
        <DemoItem label="Item 2" />
        <DemoItem label="Item 3" />
      </>
    ),
  },
}

export const SmallGap: Story = {
  args: {
    gap: "sm",
    children: (
      <>
        <DemoItem label="Item 1" />
        <DemoItem label="Item 2" />
        <DemoItem label="Item 3" />
      </>
    ),
  },
}

export const MediumGap: Story = {
  args: {
    gap: "md",
    children: (
      <>
        <DemoItem label="Item 1" />
        <DemoItem label="Item 2" />
        <DemoItem label="Item 3" />
      </>
    ),
  },
}

export const ExtraLargeGap: Story = {
  args: {
    gap: "xl",
    children: (
      <>
        <DemoItem label="Item 1" />
        <DemoItem label="Item 2" />
        <DemoItem label="Item 3" />
      </>
    ),
  },
}

export const DoubleExtraLargeGap: Story = {
  args: {
    gap: "2xl",
    children: (
      <>
        <DemoItem label="Item 1" />
        <DemoItem label="Item 2" />
        <DemoItem label="Item 3" />
      </>
    ),
  },
}
