import type { Meta, StoryObj } from "@storybook/react-vite"
import { RoundBox } from ".."
import Vstack from "./Vstack"

const DummyChildren = () => {
  return (
    <>
      <RoundBox className="bg-red-200">item 1</RoundBox>
      <RoundBox className="bg-red-200">item 1</RoundBox>
      <RoundBox className="bg-red-200">item 1</RoundBox>
      <RoundBox className="bg-red-200">item 1</RoundBox>
      <RoundBox className="bg-red-200">item 1</RoundBox>
    </>
  )
}

const meta = {
  title: "Shared/Layouts/Vstack",
  component: Vstack,
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
} satisfies Meta<typeof Vstack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    gap: "lg",
    children: <DummyChildren />,
  },
}

export const NoGap: Story = {
  args: {
    gap: "none",
    children: <DummyChildren />,
  },
}

export const ExtraSmallGap: Story = {
  args: {
    gap: "xs",
    children: <DummyChildren />,
  },
}

export const SmallGap: Story = {
  args: {
    gap: "sm",
    children: <DummyChildren />,
  },
}

export const MediumGap: Story = {
  args: {
    gap: "md",
    children: <DummyChildren />,
  },
}

export const ExtraLargeGap: Story = {
  args: {
    gap: "xl",
    children: <DummyChildren />,
  },
}

export const DoubleExtraLargeGap: Story = {
  args: {
    gap: "2xl",
    children: <DummyChildren />,
  },
}
