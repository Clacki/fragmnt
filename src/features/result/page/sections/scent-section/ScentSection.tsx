import { StateBar } from "@/shared/components"
import NoteSectionCard from "@/shared/components/note-section/NoteSectionCard"
import type { RecommendedScent } from "@/shared/types"
import {
  getNoteList,
  getProfileItems,
} from "../../../utils/transformResultData"

type ScentSectionProps = {
  scent?: RecommendedScent
}

const ScentSection = ({ scent }: ScentSectionProps) => {
  if (!scent) {
    return null
  }

  const items = scent.profile ? getProfileItems(scent.profile) : []
  const noteList = scent.scent_notes ? getNoteList(scent.scent_notes) : []

  const hasProfile = items.length > 0
  const hasNotes = noteList.length > 0

  if (!hasProfile && !hasNotes) {
    return null
  }

  return (
    <div className="mt-md w-full">
      <div className="flex w-full flex-col gap-sm md:flex-row">
        {hasProfile && (
          <div className="w-full flex-1 rounded-lg border border-border bg-white p-xl">
            <div className="mb-md text-sm font-semibold text-text-primary">
              SCENT PROFILE
            </div>

            <div className="mt-md flex flex-col gap-md">
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
        )}

        {hasNotes && (
          <div className="w-full flex-1 rounded-lg border border-border bg-white p-xl">
            <div className="mb-md text-sm font-semibold text-text-primary">
              NOTE COMPOSITION
            </div>

            <div className="mt-sm flex flex-col gap-md">
              {noteList.map((note) => (
                <NoteSectionCard key={note.labelEn} {...note} size="md" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ScentSection
