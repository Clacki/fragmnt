import type { Meta, StoryObj } from "@storybook/react-vite"
import Input from "../Input/Input"
import Labeled from "./Labeled"

const meta = {
  title: "Shared/Inputs/Labeled",
  component: Labeled,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isError: {
      control: "boolean",
      description: "Whether to show error styling",
    },
  },
} satisfies Meta<typeof Labeled>

export default meta
type Story = StoryObj<typeof meta>

export const WithTitleAndMessage: Story = {
  render: ({ isError }) => (
    <Labeled isError={isError}>
      <Labeled.Title>Username</Labeled.Title>
      <Input placeholder="Enter username" />
      <Labeled.Message>This is a helper text</Labeled.Message>
    </Labeled>
  ),
}

export const WithTitleOnly: Story = {
  render: () => (
    <Labeled>
      <Labeled.Title>Email</Labeled.Title>
      <Input placeholder="Enter email" />
    </Labeled>
  ),
}

export const MessageAbove: Story = {
  render: () => (
    <Labeled>
      <Labeled.Message>Please fill in your password</Labeled.Message>
      <Input placeholder="Password" type="password" />
    </Labeled>
  ),
}

export const WithStar: Story = {
  render: () => (
    <Labeled>
      <Labeled.Message withStar>Please fill in your password</Labeled.Message>
      <Input placeholder="Password" type="password" />
    </Labeled>
  ),
}

export const WithError: Story = {
  render: () => (
    <Labeled isError>
      <Labeled.Title>Password</Labeled.Title>
      <Input placeholder="Enter password" value="wrong" />
      <Labeled.Message withStar>Incorrect password</Labeled.Message>
    </Labeled>
  ),
}
