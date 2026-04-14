import type { Meta, StoryObj } from "@storybook/react-vite"
import StateBar from "./StateBar"

const items = [
  {
    label: "상쾌함",
    value: 21,
    leftText: "은은한",
    rightText: "선명한",
  },
  {
    label: "온기",
    value: 68,
    leftText: "차가운",
    rightText: "따뜻한",
  },
  {
    label: "부드러움",
    value: 48,
    leftText: "날카로운",
    rightText: "부드러운",
  },
  {
    label: "깊이감",
    value: 82,
    leftText: "가벼운",
    rightText: "깊이 있는",
  },
  {
    label: "달콤함",
    value: 78,
    leftText: "담백한",
    rightText: "달콤한",
  },
]

const meta = {
  title: "common/StateBar",
  component: StateBar,
  tags: ["autodocs"],
  args: {
    label: "상쾌함",
    value: 21,
    leftText: "은은한",
    rightText: "선명한",
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    height: {
      control: { type: "number", min: 1, step: 1 },
    },
  },
} satisfies Meta<typeof StateBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomHeight: Story = {
  args: {
    label: "",
    value: 76,
    leftText: "은은한",
    rightText: "강렬한",
    height: 10,
  },
  render: (args) => (
    <div className="w-full rounded-lg border border-border bg-white flex grid-cols-3 w-full items-center gap-sm p-md">
      <div className="">
        <p className="text-text-primary text-md font-bold">Overall Intensity</p>
        <p className="text-text-sub text-sm">향기의 지속력</p>
      </div>
      <div className="w-full">
        <StateBar {...args} />
      </div>
      <div className="flex h-full items-center justify-center p-sm">
        <div className="flex items-center justify-center size-button-lg rounded-full bg-badge text-text-primary font-bold">
          76
        </div>
      </div>
    </div>
  ),
}

export const TwoColumnLayout: Story = {
  render: () => (
    <div className="w-full rounded-lg border border-border bg-white p-lg">
      <div className="grid grid-cols-2 gap-lg">
        {items.map((item) => (
          <StateBar
            key={item.label}
            label={item.label}
            value={item.value}
            leftText={item.leftText}
            rightText={item.rightText}
          />
        ))}
      </div>
    </div>
  ),
}

export const VerticalLayout: Story = {
  render: () => (
    <div className="w-full rounded-lg border border-border bg-white p-lg">
      <div className="mb-md text-base font-semibold text-text-primary">
        SCENT PROFILE
      </div>

      <div className="flex flex-col gap-md">
        {items.map((item) => (
          <StateBar
            key={item.label}
            label={item.label}
            value={item.value}
            leftText={item.leftText}
            rightText={item.rightText}
          />
        ))}
      </div>
    </div>
  ),
}
