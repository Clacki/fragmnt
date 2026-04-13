import type { Meta, StoryObj } from "@storybook/react-vite"
import Empty from "./Empty"

const meta: Meta<typeof Empty> = {
  title: "Common/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Empty 컴포넌트는 콘텐츠가 없을 때 표시되는 플레이스홀더 UI입니다.

### 타입
- avatar: 프로필 이미지가 없을 때 사용
- image: 일반 이미지가 없을 때 사용

### 사이즈
- 공통 타입 \`SmToLg\`를 사용합니다.
- 기본적으로 \`size\` prop을 통해 sm / md / lg 프리셋을 사용합니다.
- 아이콘 크기는 lucide-react의 \`size\` prop을 통해 제어합니다.

### 스타일 커스터마이징
- \`wrapperClassName\`: 바깥 레이아웃 제어 (margin, flex 등)
- \`className\`: 실제 Empty 박스 스타일 제어 (border, background 등)

### 예시
\`\`\`tsx
<Empty />
<Empty type="avatar" size="lg" />
<Empty className="bg-white" />
<Empty wrapperClassName="justify-start" />
<Empty iconSize={28} />
\`\`\`
    `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Empty>

export const Avatar: Story = {
  args: {
    type: "avatar",
  },
}

export const Image: Story = {
  args: {
    type: "image",
  },
}
