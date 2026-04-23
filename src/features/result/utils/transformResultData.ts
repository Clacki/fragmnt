import type { ScentDetail } from "@/shared/types/scent-types/scent.type"

type ScentNote = {
  title: string
  description: string
  items: readonly string[]
}

type ScentNotes = {
  top: ScentNote
  middle: ScentNote
  base: ScentNote
}
export const getProfileItems = (profile: ScentDetail["profile"]) => {
  return [
    {
      label: "Depth",
      value: profile.depth,
      leftText: "가벼움",
      rightText: "깊음",
    },
    {
      label: "Warmth",
      value: profile.warmth,
      leftText: "차가움",
      rightText: "따뜻함",
    },
    {
      label: "Softness",
      value: profile.softness,
      leftText: "강함",
      rightText: "부드러움",
    },
    {
      label: "Freshness",
      value: profile.freshness,
      leftText: "무거움",
      rightText: "상쾌함",
    },
    {
      label: "Sweetness",
      value: profile.sweetness,
      leftText: "드라이",
      rightText: "달콤함",
    },
  ]
}

export const getNoteList = (notes: ScentNotes) => {
  return [
    {
      labelEn: "TOP NOTE",
      labelKo: notes.top.title,
      description: notes.top.description,
      tags: [...notes.top.items],
    },
    {
      labelEn: "MIDDLE NOTE",
      labelKo: notes.middle.title,
      description: notes.middle.description,
      tags: [...notes.middle.items],
    },
    {
      labelEn: "BASE NOTE",
      labelKo: notes.base.title,
      description: notes.base.description,
      tags: [...notes.base.items],
    },
  ]
}
