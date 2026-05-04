import Flower from "@/assets/images/footer/flower.svg"
import { Hstack, RoundBox, Vstack } from "@/shared/components"
import ExploreContents from "../1-explore-contents/ExploreContents"
import ConnectContents from "../2-connect-contents/ConnectContents"
import LegalRequirementsContents from "../3-legal-requirements-contents/LegalRequirementsContents"

const WideFooter = () => {
  return (
    <RoundBox padding="2xl" radius="none" className="bg-surface-default">
      <Vstack gap="xl">
        <Hstack>
          <Vstack gap="none" className="flex-2">
            <Vstack gap="sm">
              <h3 className="text-xl font-league-gothic">fragmnt</h3>
              <p className="text-text-sub">Where scent meets space.</p>
              <p className="text-text-sub">
                A quiet invitation to breathe, feel, and belong.
              </p>
              <img src={Flower} className="max-w-17.5 mt-17.5" />
            </Vstack>
          </Vstack>

          <Vstack className="flex-1">
            <ExploreContents />
          </Vstack>

          <Vstack className="flex-1">
            <ConnectContents />
          </Vstack>
        </Hstack>

        <Hstack className="*:flex-1 [&>*:first-child]:flex-2">
          <LegalRequirementsContents />
        </Hstack>
      </Vstack>
    </RoundBox>
  )
}

export default WideFooter
