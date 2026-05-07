import { StateBar } from "@/shared/components"
import type {
  ProfileMetric,
  ScentProfile,
} from "@/shared/types/scent-types/scent.type"

type ProfileCardProps = {
  intensity: number
  profile: ScentProfile
}

const getProfileMetrics = (profile: ScentProfile): ProfileMetric[] => {
  return [
    {
      label: "Freshness",
      value: profile.freshness,
      leftText: "은은함",
      rightText: "산뜻함",
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
      leftText: "날카로움",
      rightText: "부드러움",
    },
    {
      label: "Depth",
      value: profile.depth,
      leftText: "가벼움",
      rightText: "깊이감",
    },
    {
      label: "Sweetness",
      value: profile.sweetness,
      leftText: "드라이",
      rightText: "달콤함",
    },
  ]
}

const ProfileCard = ({ intensity, profile }: ProfileCardProps) => {
  const metrics = getProfileMetrics(profile)

  return (
    <div className="mt-2xl flex flex-col items-center justify-center gap-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="text-md font-light">CHARACTER ANALYSES</div>
        <div className="text-lg font-bold">Scent Profile</div>
      </div>

      <div className="flex w-full items-center gap-sm rounded-lg border border-border bg-white p-md">
        <div>
          <p className="text-md font-bold text-text-primary">
            Overall Intensity
          </p>
          <p className="text-sm text-text-sub">향기의 지속력</p>
        </div>

        <div className="w-full">
          <StateBar
            height={10}
            leftText="은은한"
            rightText="강렬한"
            value={intensity}
          />
        </div>

        <div className="hidden h-full items-center justify-center p-sm sm:flex">
          <div className="flex size-button-lg items-center justify-center rounded-full bg-badge font-bold text-text-primary">
            {intensity}
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg border border-border bg-white p-lg">
        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2">
          {metrics.map((metric) => (
            <StateBar
              key={metric.label}
              label={metric.label}
              value={metric.value}
              leftText={metric.leftText}
              rightText={metric.rightText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
