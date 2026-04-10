import type { Meta, StoryObj } from "@storybook/react-vite"
import Container from "./Container"

const meta = {
  title: "Shared/Layouts/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Container width variant",
    },
    isPadded: {
      control: "boolean",
      description: "Whether to add padding",
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-surface-default min-h-[200px] p-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

const DemoContent = () => (
  <div className="bg-primary/20 rounded-md p-lg text-center">
    Container Content
  </div>
)

export const Default: Story = {
  args: {
    width: "xl",
    isPadded: false,
    children: <DemoContent />,
  },
}

export const ExtraLarge: Story = {
  args: {
    width: "xl",
    isPadded: false,
    children: <DemoContent />,
  },
}

export const Large: Story = {
  args: {
    width: "lg",
    isPadded: false,
    children: <DemoContent />,
  },
}

export const Medium: Story = {
  args: {
    width: "md",
    isPadded: false,
    children: <DemoContent />,
  },
}

export const Small: Story = {
  args: {
    width: "sm",
    isPadded: false,
    children: <DemoContent />,
  },
}

export const WithPadding: Story = {
  args: {
    width: "xl",
    isPadded: true,
    children: <DemoContent />,
  },
}
