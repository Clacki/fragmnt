import { Tag } from "@/shared/components"
import NoteSectionCard from "@/shared/components/note-section/NoteSectionCard"
import type { ScentDetail } from "@/shared/types/scent-types/scent.type"
import { Sun, Tag as TagIcon } from "lucide-react"

type NoteCardProps = {
  notes: ScentDetail["scent_notes"]
  tags: ScentDetail["tags"]
  seasons: ScentDetail["season"]
}

const getSeasonLabel = (season: string) => {
  const seasonMap: Record<string, string> = {
    spring: "봄",
    summer: "여름",
    autumn: "가을",
    fall: "가을",
    winter: "겨울",
  }

  return seasonMap[season] ?? season
}

const NoteCard = ({ notes, tags, seasons }: NoteCardProps) => {
  const noteSections = [
    {
      labelEn: "TOP NOTES",
      labelKo: notes.top.title,
      description: notes.top.description,
      tags: notes.top.items,
    },
    {
      labelEn: "MIDDLE NOTES",
      labelKo: notes.middle.title,
      description: notes.middle.description,
      tags: notes.middle.items,
    },
    {
      labelEn: "BASE NOTE",
      labelKo: notes.base.title,
      description: notes.base.description,
      tags: notes.base.items,
    },
  ]

  return (
    <div className="mt-2xl flex flex-col items-center justify-center gap-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="text-md font-light">SCENT PYRAMID</div>
        <div className="text-lg font-bold">Note Composition</div>
      </div>

      <div className="flex w-full flex-col gap-md">
        {noteSections.map((section) => (
          <div
            key={section.labelEn}
            className="w-full rounded-lg border border-border bg-white p-lg"
          >
            <NoteSectionCard {...section} />
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-xl px-lg pt-2xl md:flex-row md:items-start md:justify-between md:gap-2xl md:px-2xl">
        <div className="flex w-full flex-1 flex-col items-center gap-md md:items-start">
          <div className="flex items-center gap-2 text-lg font-bold">
            <TagIcon size={16} />
            <span>Tags</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} size="sm" variant="soft" />
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center gap-2 text-lg font-bold">
            <Sun size={16} />
            <span>Season</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {seasons.map((season) => (
              <Tag
                key={season}
                label={getSeasonLabel(season)}
                size="sm"
                variant="selected"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
