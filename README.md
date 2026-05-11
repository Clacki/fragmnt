<p align="center">
  <img src="./src/assets/images/readme/fragmnt_mockup.png" alt="Fragmnt 브랜딩 목업" width="100%" />
</p>

<h1 align="center">Fragmnt</h1>

<p align="center">
  사용자의 취향과 상황에 맞는 향기를 추천하고, 추천 결과를 저장·공유할 수 있는 향기 추천 서비스
</p>

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [프로젝트 개요](#프로젝트-개요)
- [링크](#링크)
- [주요 기능](#주요-기능)
- [역할 분담](#역할-분담)
- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [스크립트](#스크립트)
- [브랜치 전략](#브랜치-전략)
- [커밋 컨벤션](#커밋-컨벤션)
- [코드 스타일](#코드-스타일)
- [컴포넌트 가이드](#컴포넌트-가이드)
- [상태 관리 및 API 연동](#상태-관리-및-api-연동)
- [협업 방식](#협업-방식)
- [주요 구현 및 문제 해결](#주요-구현-및-문제-해결)

---

## 프로젝트 소개

Fragmnt는 사용자가 자신에게 어울리는 향기를 더 쉽게 찾을 수 있도록 돕는 향기 추천 서비스입니다.

사진, 챗봇, 키워드, 설문 기반의 다양한 추천 흐름을 제공하며, 추천 결과를 단순 조회에서 끝내지 않고 저장하거나 공유할 수 있도록 설계했습니다.

---

## 프로젝트 개요

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | Fragmnt |
| 한 줄 설명 | 사용자의 취향과 상황에 맞는 향기를 추천하고, 추천 결과를 저장·공유할 수 있는 향기 추천 서비스 |
| 팀 구성 | Frontend 3명, Backend 4명 |
| Frontend | 김광욱, 김채현, 하흥주 |
| Backend | 박진규, 황현진, 이규빈, 심상보 |
| 배포 | Vercel |

---
## 배포

- https://fe-one-piece.vercel.app/
---

## 주요 기능

- 메인 랜딩 페이지
- 소셜 로그인
- 사진 기반 향기 추천
- 챗봇 기반 향기 추천
- 키워드 기반 향기 추천
- 설문 기반 향기 추천
- 추천 결과 페이지
- 추천 결과 저장
- 추천 결과 공유
- 향기 리스트
- 향기 상세 페이지
- 리뷰 기능
- 마이페이지
- 반응형 UI

---

## 역할 분담

Fragmnt의 프론트엔드는 기능 단위로 담당 영역을 나누어 개발했습니다. 각 담당자는 페이지 구현, API 연동, 상태 처리, 반응형 UI를 함께 관리했으며, 공통 UI와 서버 상태 관리 방식은 팀 내 컨벤션에 맞춰 일관되게 적용했습니다.

| 이름 | 포지션 | 담당 영역 |
| --- | --- | --- |
| 광욱 | Frontend | 기능 선택 페이지, 사진/챗봇/키워드/설문 기반 추천 페이지, 추천 결과 페이지, 공유 페이지, 추천 결과 저장·공유 API 연동, 담당 페이지 반응형 UI, 인증 상태에 따른 접근 제어, 공유 URL 및 OG 관련 문제 수정, 마이페이지 캐시 갱신 관련 문제 해결 |
| 채현 | Frontend | 마이페이지, 향기 리스트 페이지, 향기 상세 페이지, 리뷰 페이지, 관련 API 연동 및 UI 구현 |
| 흥주 | Frontend | 메인 랜딩 페이지, 로그인, 회원가입, 인증 관련 UI 및 흐름 구현 |
| Backend | Backend | 회원 인증, 향기 데이터 관리, 추천 분석 API, 추천 결과 저장 및 공유 API, 리뷰 API, 마이페이지 API 구현 |

---

## 기술 스택

| 분류 | 기술 | 사용 목적 |
| --- | --- | --- |
| Framework | React 19, TypeScript | 컴포넌트 기반 UI 구현 및 정적 타입 기반 개발 |
| Build Tool | Vite | 빠른 개발 서버와 번들링 환경 구성 |
| Routing | TanStack Router | 파일 기반 라우팅, 중첩 라우트, 동적 라우트 관리 |
| Server State | TanStack Query | 서버 상태 관리, API 요청 캐싱, 데이터 무효화 처리 |
| Client State | Zustand | 인증 정보 등 클라이언트 전역 상태 관리 |
| HTTP Client | Axios | API 요청 인스턴스 및 인터셉터 기반 HTTP 통신 |
| Styling | Tailwind CSS v4 | 토큰 기반 반응형 UI 스타일링 |
| UI Components | shadcn/ui, Radix UI | 접근성과 재사용성을 고려한 UI 컴포넌트 구성 |
| Icons | lucide-react | 일관된 아이콘 시스템 적용 |
| Animation | Framer Motion | 추천 플로우 내 전환 및 인터랙션 애니메이션 구현 |
| Asset | SVGR | SVG 에셋을 React 컴포넌트로 활용 |
| Mocking | MSW | 개발 환경 API 모킹 |
| Documentation | Storybook | 공통 UI 컴포넌트 확인 및 문서화 |
| Code Quality | ESLint, Prettier | 코드 품질 검사 및 포맷팅 |
| Git Hooks | husky, lint-staged | 커밋 전 자동 포맷팅 및 린트 검사 |
| Commit | commitlint | Conventional Commits 기반 커밋 메시지 검사 |
| Deploy | Vercel | 프론트엔드 배포 및 공유 URL 검증 |

---

## 시작하기

### 요구사항

- Node.js 18+
- pnpm

### 설치 및 실행

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

---

## 프로젝트 구조

Feature 중심으로 기능 단위를 분리하고, 공통으로 사용하는 API, 컴포넌트, 훅, 타입은 `shared` 영역에서 관리합니다.

```txt
src/
├── assets/             # 프로젝트 내부 정적 자원
├── components/         # 전역 UI 및 공통 컴포넌트
├── features/           # 기능 단위 페이지 및 비즈니스 로직
│   ├── chat/           # 챗봇 기반 추천
│   ├── find-scent/     # 추천 방식 선택
│   ├── keyword/        # 키워드 기반 추천
│   ├── my-page/        # 마이페이지
│   ├── photo/          # 사진 기반 추천
│   ├── result/         # 추천 결과
│   ├── review/         # 리뷰
│   ├── scent-detail/   # 향기 상세
│   ├── scent-list/     # 향기 리스트
│   └── survey/         # 설문 기반 추천
├── lib/                # 라이브러리 설정 및 유틸성 모듈
├── routes/             # TanStack Router 라우트 정의
├── shared/             # 공통 API, 컴포넌트, hooks, types, utils
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── mocks/
│   ├── types/
│   └── utils/
├── App.tsx
├── main.tsx
├── routeTree.gen.ts
└── index.css           # 글로벌 스타일 및 디자인 토큰
```

---

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | Vite 개발 서버 실행 |
| `pnpm build` | TypeScript 컴파일 후 Vite 프로덕션 빌드 |
| `pnpm preview` | 빌드 결과물 로컬 미리보기 |
| `pnpm lint` | ESLint 검사 |
| `pnpm format` | Prettier 포맷팅 및 import 정리 |
| `pnpm storybook` | Storybook 개발 서버 실행 |
| `pnpm build-storybook` | Storybook 정적 빌드 |
| `pnpm prepare` | Husky Git Hook 설정 |

---

## 브랜치 전략

| 브랜치 | 용도 |
| --- | --- |
| `main` | 배포 가능한 안정 버전 관리 |
| `develop` | 기능 통합 및 QA 진행 |
| `feature/*` | 기능 단위 개발 |
| `fix/*` | 버그 수정 |
| `docs/*` | 문서 수정 |
| `refactor/*` | 리팩토링 작업 |

브랜치는 작업 목적이 드러나도록 작성합니다.

```txt
feature/recommend-result
fix/share-og-meta
docs/update-readme
```

---

## 커밋 컨벤션

Fragmnt는 Conventional Commits 기반의 커밋 메시지 규칙을 사용합니다.

### 커밋 메시지 형식

```txt
<type>: <subject> (#<issue-number>)

[optional body]
```

### 커밋 타입

| 타입 | 설명 |
| --- | --- |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 또는 문제 해결 |
| `docs` | 문서 작성 및 수정 |
| `style` | 코드 포맷팅, 세미콜론 등 기능 변경이 없는 스타일 수정 |
| `refactor` | 기능 변경 없이 코드 구조 개선 |
| `test` | 테스트 코드 추가 및 수정 |
| `chore` | 설정, 패키지, 빌드 관련 작업 |
| `remove` | 사용하지 않는 파일 또는 코드 삭제 |
| `hotfix` | 운영 중 긴급 버그 수정 |
| `deprecated` | 더 이상 사용하지 않는 기능 표시 또는 제거 예정 처리 |
| `design` | UI/UX 및 스타일 관련 작업 |

### 예시

```bash
feat: 추천 결과 저장 API 연동 (#12)
fix: 공유 URL OG 정보 노출 오류 수정 (#18)
docs: README 프로젝트 구조 정리 (#21)
```

### Git Hooks

| Hook | 동작 |
| --- | --- |
| `pre-commit` | `pnpm run format` 실행 후 변경 파일에 대해 `lint-staged` 실행 |
| `commit-msg` | commitlint로 커밋 메시지 형식 검사 |
| `pre-push` | `pnpm build`로 빌드 검증 |

---

## 코드 스타일

### ESLint

- TypeScript, React Hooks, React Refresh 규칙을 기반으로 코드 품질을 검사합니다.
- 커밋 전 `lint-staged`를 통해 변경된 `js`, `jsx`, `ts`, `tsx` 파일에 `eslint --fix`를 적용합니다.

### Prettier

```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "bracketSpacing": true,
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"]
}
```

### Path Alias

`@/`를 사용하여 `src/` 디렉터리를 기준으로 모듈을 import합니다.

```tsx
// 권장
import { cn } from "@/lib/utils"
import { queryClient } from "@/shared/api/query-client"

// 지양
import { cn } from "../../../lib/utils"
```

---

## 컴포넌트 가이드

### Feature 컴포넌트

기능별 화면과 비즈니스 로직은 `src/features` 하위에 배치합니다.

```txt
features/
├── keyword/
│   └── page/
│       └── ScentKeyword.tsx
└── result/
    └── ...
```

### Shared 컴포넌트

여러 Feature에서 재사용되는 UI는 `src/shared/components`에서 관리합니다.

```txt
shared/components/
├── empty-state/
├── error-box/
├── loading-state/
├── modal/
├── page-intro/
├── tag/
└── toast/
```

### UI 작성 기준

- 반복 사용되는 상태 UI는 공통 컴포넌트로 분리합니다.
- 로딩, 에러, EmptyState는 추천 플로우에서 일관된 경험을 제공하도록 공통 패턴을 사용합니다.
- Tailwind CSS를 우선 사용하고, 조건부 클래스 조합은 공통 유틸을 활용합니다.
- 아이콘은 가능한 경우 `lucide-react`를 사용해 스타일 일관성을 유지합니다.

---

## 상태 관리 및 API 연동

### Axios

공통 Axios 인스턴스는 `src/shared/api/axios-instance.ts`에서 관리합니다.

- API base URL 관리
- 요청 및 응답 인터셉터 처리
- 인증 상태와 연동되는 요청 흐름 관리

### TanStack Query

서버 상태는 TanStack Query를 기준으로 관리합니다.

- 추천 결과 조회
- 추천 결과 저장 및 공유
- 향기 리스트 및 상세 조회
- 마이페이지 데이터 조회
- 저장 이후 관련 쿼리 무효화 및 재조회 처리

### Zustand

클라이언트 전역 상태는 Zustand로 관리합니다.

- 인증 정보 관리
- 인증 상태에 따른 접근 제어
- 로그인 여부에 따라 저장 및 공유 흐름 분기

### MSW

개발 환경에서 API 응답을 모킹할 수 있도록 MSW 설정을 포함합니다.

```typescript
import { http, HttpResponse } from "msw"

export const handlers = [
  http.get("/api/scents", () => {
    return HttpResponse.json([])
  }),
]
```

---

## 협업 방식

- 기능 단위로 담당 범위를 나누고, 각 담당자가 페이지 구현과 API 연동을 함께 진행했습니다.
- API 명세를 기준으로 프론트엔드와 백엔드 간 요청·응답 구조를 맞췄습니다.
- 추천 결과 저장 및 공유 흐름에서 필요한 예외 케이스를 백엔드와 함께 조율했습니다.
- 공통 UI 컴포넌트와 페이지별 Feature 구조를 분리해 작업 충돌을 줄였습니다.
- husky, lint-staged, commitlint를 적용해 커밋 전 코드 품질과 메시지 컨벤션을 관리했습니다.
- PR 단위로 변경 사항을 공유하고, UI·상태 처리·API 연동 방식이 팀 컨벤션과 맞는지 확인했습니다.

---

## 주요 구현 및 문제 해결

### 다양한 추천 플로우를 일관된 사용자 경험으로 연결

Fragmnt는 사진, 챗봇, 키워드, 설문처럼 입력 방식이 다른 추천 기능을 제공합니다. 각 기능의 인터랙션은 다르지만, 사용자는 모두 추천 결과 페이지로 자연스럽게 이동해야 했습니다.

추천 방식별 페이지는 Feature 단위로 분리하고, 결과 조회·저장·공유 흐름은 공통적인 상태 처리와 API 연동 방식으로 맞췄습니다. 추천 요청 중에는 로딩 상태를 명확히 보여주고, 실패하거나 결과가 없는 경우에도 사용자가 다음 행동을 이해할 수 있도록 에러 및 EmptyState를 구성했습니다.

### 서버 상태와 클라이언트 상태의 역할 분리

추천 결과, 향기 리스트, 마이페이지 데이터처럼 서버에서 관리되는 데이터는 TanStack Query로 관리했습니다. API 요청 캐싱, 재요청, 무효화 흐름을 활용해 데이터 변경 이후 화면이 최신 상태로 유지되도록 구성했습니다.

인증 정보처럼 여러 페이지에서 즉시 참조해야 하는 클라이언트 전역 상태는 Zustand로 분리해 관리했습니다. 이를 통해 인증 상태에 따라 접근 가능한 페이지를 제어하고, 비로그인 사용자가 저장이 필요한 기능에 접근했을 때의 흐름을 처리했습니다.

### 추천 결과 저장 후 마이페이지 캐시 갱신 문제

추천 결과 저장 API 요청은 성공했지만, 마이페이지에서는 이전 캐시 데이터가 그대로 보이는 문제가 있었습니다.

저장 완료 후 관련 쿼리를 무효화하거나 재조회하도록 TanStack Query의 캐시 갱신 흐름을 정리해, 저장한 추천 결과를 마이페이지에서 즉시 확인할 수 있도록 수정했습니다.

### 공유 URL 접근 및 OG 정보 문제

추천 결과 공유 링크에서 URL 접근 방식과 OG 정보 노출이 기대대로 동작하지 않는 문제가 있었습니다.

공유 페이지를 별도 라우트로 구성하고 공유 ID 기반 조회 흐름을 정리해, 링크로 직접 접근해도 추천 결과가 안정적으로 표시되도록 수정했습니다.

### 추천 플로우의 예외 상태 처리

추천 요청은 입력 방식에 따라 실패 지점과 빈 결과 케이스가 달랐습니다.

로딩, 에러, EmptyState를 추천 플로우에 맞게 분리해 사용자가 현재 상태를 이해하고 다시 시도하거나 이전 단계로 돌아갈 수 있도록 개선했습니다.
