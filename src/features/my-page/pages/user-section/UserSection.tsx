import { cn } from "@/lib/utils"
import { Button, EmptyImage } from "@/shared/components"
import { formatDate } from "@/shared/utils/date"
import {
  CalendarDays,
  Check,
  Mail,
  Pencil,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react"
import { useRef, useState } from "react"
import { useCreateAiProfileImage } from "../../hooks/useCreateProfileMutation"
import { useUpdateUserProfile } from "../../hooks/useUpdateUserProfileMutation"
import { useUploadProfileImage } from "../../hooks/useUploadImageMutation"
import type { UserProfile } from "../../types"
import EditField from "./edit-field/EditField"
import UserCard from "./user-card/UserCard"

type UserSectionProps = {
  user: UserProfile
  className?: string
}
type UserProfileForm = {
  name: string
  birthday: string
}

export const UserSection = ({ user, className }: UserSectionProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const [form, setForm] = useState<UserProfileForm>({
    name: user.name,
    birthday: user.birthday,
  })

  const { mutate, isPending } = useUpdateUserProfile()

  const handleEditStart = () => {
    setForm({
      name: user.name,
      birthday: user.birthday,
    })
    setIsEditing(true)
  }

  const handleChange = (key: keyof UserProfileForm) => (value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSubmit = () => {
    mutate(
      {
        name: form.name,
        birthday: form.birthday,
      },
      {
        onSuccess: () => {
          setIsEditing(false)
        },
      }
    )
  }

  const fileInputRef = useRef<HTMLInputElement>(null)

  const { mutate: uploadProfileImage, isPending: isImageUploading } =
    useUploadProfileImage()

  const { mutate: createAiProfileImage, isPending: isAiImageCreating } =
    useCreateAiProfileImage()

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    uploadProfileImage(file, {
      onSuccess: () => {
        setPreviewImage(null)
      },
    })

    e.target.value = ""
  }

  const profileImageSrc = previewImage || user.profile_image_url || undefined

  return (
    <section className={cn("w-full", className)}>
      <div className="flex flex-col items-center gap-xs">
        <button
          type="button"
          onClick={handleImageClick}
          disabled={isImageUploading}
          className="relative rounded-full transition-opacity hover:opacity-80 disabled:opacity-50"
          aria-label="프로필 이미지 업로드"
        >
          {profileImageSrc ? (
            <img
              src={profileImageSrc}
              alt={`${user.name} 프로필 이미지`}
              className="size-35 rounded-full object-cover"
            />
          ) : (
            <EmptyImage type="avatar" />
          )}

          {/* 연필 버튼 */}
          <div className="absolute bottom-1 right-1 flex size-10 items-center justify-center rounded-full bg-badge shadow-sm border border-white">
            <Pencil size={18} className="text-primary" />
          </div>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <h2 className="mt-lg text-xl font-bold text-text-primary">
          {user.name}
        </h2>
        <Button
          type="button"
          style="outlined"
          padding="same"
          radius="full"
          className="text-sm"
          disabled={isAiImageCreating}
          onClick={() =>
            createAiProfileImage(undefined, {
              onSuccess: (data) => {
                setPreviewImage(data.profile_image_url)
              },
            })
          }
        >
          <Sparkles size={16} />
          {isAiImageCreating ? "이미지 생성 중..." : "AI 이미지 생성하기"}
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

      <div className="grid grid-cols-1 gap-sm md:grid-cols-2">
        {isEditing ? (
          <>
            <EditField
              label="이름"
              value={form.name}
              onChange={handleChange("name")}
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
