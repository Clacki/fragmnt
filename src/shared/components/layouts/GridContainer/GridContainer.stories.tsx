import type { Meta, StoryObj } from "@storybook/react-vite"
import GridContainer from "./GridContainer"

const meta = {
  title: "Shared/Layouts/GridContainer",
  component: GridContainer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Gap between grid items",
    },
    isAutoFill: {
      control: "boolean",
      description: "Use auto-fill (true) or auto-fit (false)",
    },
    minColWidth: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Minimum column width",
    },
  },
} satisfies Meta<typeof GridContainer>

export default meta
type Story = StoryObj<typeof meta>

const DemoItem = ({ label }: { label: string }) => (
  <div className="rounded-md bg-primary/20 p-lg text-center">{label}</div>
)

const GridItems = () => (
  <>
    <DemoItem label="Item 1" />
    <DemoItem label="Item 2" />
    <DemoItem label="Item 3" />
    <DemoItem label="Item 4" />
    <DemoItem label="Item 5" />
    <DemoItem label="Item 6" />
  </>
)

export const Default: Story = {
  args: {
    gap: "lg",
    minColWidth: "md",
    isAutoFill: true,
    children: <GridItems />,
  },
}

export const SmallColumns: Story = {
  args: {
    gap: "md",
    minColWidth: "sm",
    isAutoFill: true,
    children: <GridItems />,
  },
}

export const MediumColumns: Story = {
  args: {
    gap: "md",
    minColWidth: "md",
    isAutoFill: true,
    children: <GridItems />,
  },
}

export const LargeColumns: Story = {
  args: {
    gap: "md",
    minColWidth: "lg",
    isAutoFill: true,
    children: <GridItems />,
  },
}

export const AutoFit: Story = {
  args: {
    gap: "md",
    minColWidth: "md",
    isAutoFill: false,
    children: <GridItems />,
  },
}

export const NoGap: Story = {
  args: {
    gap: "none",
    minColWidth: "md",
    isAutoFill: true,
    children: <GridItems />,
  },
}

export const LargeGap: Story = {
  args: {
    gap: "xl",
    minColWidth: "md",
    isAutoFill: true,
    children: <GridItems />,
  },
}
