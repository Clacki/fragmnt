import type { Meta, StoryObj } from "@storybook/react-vite"
import RoundBox from "./RoundBox"

const meta = {
  title: "Shared/Layouts/RoundBox",
  component: RoundBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Border radius size",
    },
    padding: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Padding size",
    },
    isBordered: {
      control: "boolean",
      description: "Whether to show border",
    },
    isShadowed: {
      control: "boolean",
      description: "Whether to show shadow",
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-surface-default p-xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RoundBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "RoundBox Content",
    radius: "lg",
    padding: "lg",
  },
}

export const WithBorder: Story = {
  args: {
    children: "Bordered RoundBox",
    radius: "lg",
    padding: "lg",
    isBordered: true,
  },
}

export const WithShadow: Story = {
  args: {
    children: "Shadowed RoundBox",
    radius: "lg",
    padding: "lg",
    isShadowed: true,
  },
}

export const WithBorderAndShadow: Story = {
  args: {
    children: "Bordered and Shadowed",
    radius: "lg",
    padding: "lg",
    isBordered: true,
    isShadowed: true,
  },
}

export const SmallRadius: Story = {
  args: {
    children: "Small Radius",
    radius: "sm",
    padding: "lg",
    isBordered: true,
  },
}

export const MediumRadius: Story = {
  args: {
    children: "Medium Radius",
    radius: "md",
    padding: "lg",
    isBordered: true,
  },
}

export const NoPadding: Story = {
  args: {
    children: "No Padding",
    radius: "lg",
    padding: "none",
    isBordered: true,
  },
}

export const ExtraLargePadding: Story = {
  args: {
    children: "Extra Large Padding",
    radius: "lg",
    padding: "xl",
    isBordered: true,
  },
}
