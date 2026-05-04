import { Hstack, RoundBox, Vstack } from "@/shared/components"
import ExploreContents from "../1-explore-contents/ExploreContents"
import ConnectContents from "../2-connect-contents/ConnectContents"
import LegalRequirementsContents from "../3-legal-requirements-contents/LegalRequirementsContents"

const NarrowFooter = () => {
  return (
    <RoundBox padding="2xl" radius="none" className="bg-surface-default">
      <Vstack className="col-span-2">
        <h3 className="text-xl font-league-gothic">fragmnt</h3>

        <Hstack>
          <Vstack gap="sm" className="flex-1">
            <ExploreContents />
          </Vstack>

          <Vstack gap="sm" className="flex-1">
            <ConnectContents />
          </Vstack>
        </Hstack>

        <Vstack gap="xs">
          <LegalRequirementsContents />
        </Vstack>
      </Vstack>
    </RoundBox>
  )
}

export default NarrowFooter
