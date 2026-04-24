import {
  CalendarDays,
  Check,
  Mail,
  Pencil,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button, EmptyImage } from "@/shared/components"
import { formatDate } from "@/shared/utils/date"
import { useUpdateUserProfile } from "../../hooks/useUpdateUserProfileMutation"
import type { UpdateUserProfileRequest, UserProfile } from "../../types"
import EditField from "./edit-field/EditField"
import UserCard from "./user-card/UserCard"

type UserSectionProps = {
  user: UserProfile
  className?: string
}

export default function UserSection({ user, className }: UserSectionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [form, setForm] = useState<UpdateUserProfileRequest>({
    name: user.name,
    email: user.email,
    phone_number: user.phone_number,
    birthday: user.birthday,
  })

  const { mutate, isPending } = useUpdateUserProfile()
  const handleEditStart = () => {
    setForm({
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      birthday: user.birthday,
    })
    setIsEditing(true)
  }

  const handleChange =
    (key: keyof UpdateUserProfileRequest) => (value: string) => {
      setForm((prev) => ({
        ...prev,
        [key]: value,
      }))
    }
  const handleSubmit = () => {
    mutate(form, {
      onSuccess: () => {
        setIsEditing(false)
      },
    })
  }

  return (
    <section className={cn("w-full", className)}>
      <div className="flex flex-col items-center gap-xs">
        {user.profile_image_url ? (
          <img
            src={user.profile_image_url}
            alt={`${user.name} 프로필 이미지`}
            className="size-24 rounded-full object-cover"
          />
        ) : (
          <EmptyImage type="avatar" />
        )}

        <h2 className="mt-lg text-xl font-bold text-text-primary">
          {user.name}
        </h2>

        <Button
          style="outlined"
          padding="same"
          radius="full"
          className="text-sm"
        >
          <Sparkles size={16} />
          AI 이미지 생성하기
        </Button>

        <p className="mt-xs text-sm text-text-sub">{user.email}</p>
      </div>

      <div className="mt-xl flex items-center gap-xs">
        <span className="p-sm text-md font-semibold text-text-primary">
          개인정보
        </span>

        <button
          type="button"
          onClick={isEditing ? handleSubmit : handleEditStart}
          disabled={isPending}
          className="flex items-center justify-center text-text-description transition-opacity hover:opacity-70 disabled:opacity-50"
          aria-label={isEditing ? "개인정보 수정 완료" : "개인정보 수정"}
        >
          {isEditing ? (
            <Check size={18} strokeWidth={2} />
          ) : (
            <Pencil size={18} strokeWidth={2} />
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-sm">
        {isEditing ? (
          <>
            <EditField
              label="이름"
              value={form.name}
              onChange={handleChange("name")}
              icon={<UserRound size={18} strokeWidth={2} />}
            />

            <EditField
              label="이메일"
              value={form.email}
              onChange={handleChange("email")}
              icon={<Mail size={18} strokeWidth={2} />}
            />

            <EditField
              label="휴대폰 번호"
              value={form.phone_number}
              onChange={handleChange("phone_number")}
              icon={<Phone size={18} strokeWidth={2} />}
            />

            <EditField
              label="생년월일"
              value={form.birthday}
              onChange={handleChange("birthday")}
              icon={<CalendarDays size={18} strokeWidth={2} />}
            />
          </>
        ) : (
          <>
            <UserCard
              label="이름"
              value={user.name}
              icon={<UserRound size={18} strokeWidth={2} />}
            />

            <UserCard
              label="이메일"
              value={user.email}
              icon={<Mail size={18} strokeWidth={2} />}
            />

            <UserCard
              label="휴대폰 번호"
              value={user.phone_number}
              icon={<Phone size={18} strokeWidth={2} />}
            />

            <UserCard
              label="생년월일"
              value={formatDate(user.birthday)}
              icon={<CalendarDays size={18} strokeWidth={2} />}
            />
          </>
        )}
      </div>
    </section>
  )
}
