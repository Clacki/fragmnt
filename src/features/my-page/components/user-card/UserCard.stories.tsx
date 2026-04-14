import type { Meta, StoryObj } from "@storybook/react-vite"
import { CalendarDays, Mail, Phone, User } from "lucide-react"

import UserCard from "./UserCard"

const meta: Meta<typeof UserCard> = {
  title: "Components/UserCard",
  component: UserCard,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof UserCard>

export const Name: Story = {
  args: {
    label: "이름",
    value: "김철수",
    icon: <User className="h-[18px] w-[18px]" strokeWidth={2} />,
  },
  render: (args) => (
    <div className="w-[280px]">
      <UserCard {...args} />
    </div>
  ),
}

export const Email: Story = {
  args: {
    label: "이메일",
    value: "example@user.com",
    icon: <Mail className="h-[18px] w-[18px]" strokeWidth={2} />,
  },
  render: (args) => (
    <div className="w-[280px]">
      <UserCard {...args} />
    </div>
  ),
}

export const PhoneNumber: Story = {
  args: {
    label: "휴대폰 번호",
    value: "010-0000-0000",
    icon: <Phone className="h-[18px] w-[18px]" strokeWidth={2} />,
  },
  render: (args) => (
    <div className="w-[280px]">
      <UserCard {...args} />
    </div>
  ),
}

export const BirthDate: Story = {
  args: {
    label: "생년월일",
    value: "1999.01.01",
    icon: <CalendarDays className="h-[18px] w-[18px]" strokeWidth={2} />,
  },
  render: (args) => (
    <div className="w-[280px]">
      <UserCard {...args} />
    </div>
  ),
}

export const GridPreview: Story = {
  render: () => (
    <div className="w-[582px]">
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        <UserCard
          label="이름"
          value="김철수"
          icon={<User className="h-[18px] w-[18px]" strokeWidth={2} />}
        />
        <UserCard
          label="이메일"
          value="example@user.com"
          icon={<Mail className="h-[18px] w-[18px]" strokeWidth={2} />}
        />
        <UserCard
          label="휴대폰 번호"
          value="010-0000-0000"
          icon={<Phone className="h-[18px] w-[18px]" strokeWidth={2} />}
        />
        <UserCard
          label="생년월일"
          value="1999.01.01"
          icon={<CalendarDays className="h-[18px] w-[18px]" strokeWidth={2} />}
        />
      </div>
    </div>
  ),
}
