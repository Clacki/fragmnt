import type { CSSProperties } from "react"
import type { ScentFamily, WebSharedScent } from "../../types/web-shared.types"
import { FAMILY_THEME_MAP } from "./shared-scent-visual.constants"

export const getAllNoteItems = (scent: WebSharedScent) => {
  const { top, middle, base } = scent.scent_notes

  return [...top.items, ...middle.items, ...base.items].join(" ")
}

export const getScentFamily = (scent: WebSharedScent): ScentFamily => {
  const tags = scent.tags.join(" ")
  const noteItems = getAllNoteItems(scent)

  if (
    tags.includes("플로럴") ||
    noteItems.includes("로즈") ||
    noteItems.includes("피오니") ||
    noteItems.includes("제라늄") ||
    noteItems.includes("자스민")
  ) {
    return "floral"
  }

  if (
    noteItems.includes("베르가못") ||
    noteItems.includes("레몬") ||
    noteItems.includes("오렌지") ||
    noteItems.includes("자몽")
  ) {
    return "citrus"
  }

  if (
    noteItems.includes("시더우드") ||
    noteItems.includes("샌달우드") ||
    noteItems.includes("패출리") ||
    noteItems.includes("우드")
  ) {
    return "woody"
  }

  if (
    noteItems.includes("머스크") ||
    tags.includes("정돈된") ||
    tags.includes("깨끗한")
  ) {
    return "musk"
  }

  if (
    noteItems.includes("그린") ||
    noteItems.includes("리프") ||
    tags.includes("허브")
  ) {
    return "green"
  }

  if (
    tags.includes("산뜻한") ||
    tags.includes("청량한") ||
    tags.includes("시원한")
  ) {
    return "aquatic"
  }

  if (
    tags.includes("스파이시") ||
    noteItems.includes("페퍼") ||
    noteItems.includes("클로브")
  ) {
    return "spicy"
  }

  if (
    tags.includes("잔잔한") ||
    tags.includes("포근한") ||
    tags.includes("부드러운")
  ) {
    return "powdery"
  }

  return "floral"
}

export const getStableIndex = ({
  text,
  length,
}: {
  text: string
  length: number
}) => {
  const sum = text.split("").reduce((accumulator, character) => {
    return accumulator + character.charCodeAt(0)
  }, 0)

  return sum % length
}

export const getScentTheme = (scent: WebSharedScent) => {
  const family = getScentFamily(scent)
  const variants = FAMILY_THEME_MAP[family]
  const variantIndex = getStableIndex({
    text: scent.name,
    length: variants.length,
  })

  return variants[variantIndex]
}

export const getScentVisualStyle = (scent: WebSharedScent) => {
  const { profile } = scent

  const horizontalPosition = (profile.freshness - profile.depth) * 1.2
  const verticalPosition = (profile.warmth - profile.softness) * 1.2
  const scale = 0.78 + profile.softness / 320
  const opacity = 0.82

  return {
    "--scent-x": `${horizontalPosition}px`,
    "--scent-y": `${verticalPosition}px`,
    "--scent-scale": scale,
    "--scent-opacity": opacity,
  } as CSSProperties
}
