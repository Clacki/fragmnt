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

  const notes = scent.scent_notes
  const profile = scent.profile

  const items = getProfileItems(profile)
  const noteList = getNoteList(notes)

  return (
    <div className="w-full mt-md">
      <div className="flex flex-col md:flex-row gap-sm w-full">
        {/* profile */}
        <div className="flex-1 w-full rounded-lg border border-border bg-white p-xl">
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

        {/* notes */}
        <div className="flex-1 w-full rounded-lg border border-border bg-white p-xl">
          <div className="mb-md text-sm font-semibold text-text-primary">
            NOTE COMPOSITION
          </div>

          <div className="mt-sm flex flex-col gap-md">
            {noteList.map((note) => (
              <NoteSectionCard key={note.labelEn} {...note} size="md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScentSection
